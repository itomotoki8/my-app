import { useState } from "react";
import { useRouter } from "next/router";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/utils/firebase";
import axios from "axios";

const Register = () => {
  const router = useRouter();

  // 値を格納

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");

  const change = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const value = e.target.value;
    switch (e.target.id) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
      case "name":
        setName(value);
      case "id":
        setId(value);
    }
  };

  const [boolean, setBoolean] = useState(true);
  const onOff = async (): Promise<void> => {
    setBoolean(!boolean);
  };

  const [topImage, setTopImage] = useState<any>("");
  const [backImage, setBackImage] = useState<any>("");

  //クイックフィックスのでもエラーが出るのいったanyで...
  const handleChange = async (e: any): Promise<void> => {
    //取得したeventのidがtopならtopImageに、違えばbackImageに
    if (e.target.id == "top") {
      setTopImage(e.target.files[0]);
      return;
    }

    setBackImage(e.target.files[0]);
  };

  // 値を収納ここまで

  //ここから画像を保存
  const handleSubmit = (nowDate: string): undefined => {
    try {
      if (topImage == "") {
        return;
      } else {
        const topImageRef = ref(storage, "image/" + nowDate + topImage.name);
        uploadBytes(topImageRef, topImage).then(() => {
          console.log("Uploaded a file!");
        });
      }

      if (backImage == "") {
        return;
      } else {
        const backImageRef = ref(storage, "image/" + nowDate + backImage.name);
        uploadBytes(backImageRef, backImage).then(() => {
          console.log("Uploaded a file!");
        });
      }
    } catch {
      console.log("error");
    }
  };

  //画像保存ここまで

  //submitイベント
  const createTodo = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //画像の名前が重複すると上書きされてしまうため名前の前に現在日付時刻を付ける
    const now = new Date();
    const year = now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const date = ("0" + now.getDate()).slice(-2);
    const hours = ("0" + now.getHours()).slice(-2);
    const minutes = ("0" + now.getMinutes()).slice(-2);
    const seconds = ("0" + now.getSeconds()).slice(-2);
    const nowDate = `${year}-${month}-${date}_${hours}:${minutes}:${seconds}_`;
    //ここまで

    //オブジェクトいれる

    const data = {
      email: email,
      password: password,
      name: name,
      search_flag: boolean,
      search_id: id,
      topImage_url: topImage ? nowDate + topImage.name : "",
      backgroundImage_url: backImage ? nowDate + backImage.name : "",
    };
    //

    //DBに保存

    try {
      axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`, { ...data });
      router.push("/");
    } catch {
      console.log("error");
    }
    //現在日付時刻を渡す
    handleSubmit(nowDate);
  };

  // const [img,setImg] = useState("");
  // useEffect(() => {
  //   const fetch = async () => {
  //     const gsRef = ref(
  //       storage,
  //       `gs://next-auth-471c4.appspot.com/image/2023-12-11_17:27:07_eat.jpg`
  //     );

  //     await getDownloadURL(gsRef)
  //       .then((url) => {
  //         setImg(url);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   fetch();
  // },);

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-slate-300 px-7 py-4">
      <h2 className="text-xl">ユーザー登録</h2>
      <form
        onSubmit={createTodo}
        className="flex flex-col gap-5 w-full items-center"
      >
        <div className=" w-[70vw]">
          <label htmlFor="email" className="block">
            Eメール
          </label>
          <input
            type="text"
            autoComplete="off"
            onChange={change}
            id="email"
            required
            className="border border-slate-700 w-[70vw] px-1"
          />
        </div>

        <div className=" w-[70vw]">
          <label htmlFor="password" className="block">
            パスワード
          </label>
          <input
            type="text"
            autoComplete="off"
            onChange={change}
            pattern="^([a-zA-Z0-9]{7,})$"
            minLength={7}
            id="password"
            required
            className="border border-slate-700 w-[70vw] px-1"
          />
          <small>半角英数7文字以上</small>
        </div>

        <div className=" w-[70vw]">
          <label htmlFor="name" className="block">
            名前
          </label>
          <input
            type="text"
            autoComplete="off"
            onChange={change}
            id="name"
            required
            maxLength={20}
            className="border border-slate-700 w-[70vw] px-1"
          />
          <small>20文字以内</small>
        </div>

        <div className=" w-[70vw]">
          <label htmlFor="id" className="block">
            ID
          </label>
          <input
            type="text"
            autoComplete="off"
            id="id"
            onChange={change}
            pattern="^([a-zA-Z0-9]{7,})$"
            minLength={7}
            required
            className="border border-slate-700  w-[70vw] px-1"
          />
          <small>半角英数7文字以上</small>
        </div>

        <div className="flex gap-5 w-[70vw]">
          <p className="inline-block w-12">ID検索</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={onOff}
              defaultChecked={boolean}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <p className="text-sm"></p>
        </div>

        <div className="w-[70vw]">
          <div>
            <label htmlFor="top" className="inline-block">
              トップ画像
            </label>
          </div>
          <input
            type="file"
            id="top"
            accept=".png, .jpeg, .jpg"
            onChange={handleChange}
          />
        </div>

        <div className="w-[70vw]">
          <div>
            <label htmlFor="back" className="inline-block">
              背景画像
            </label>
          </div>
          <input
            type="file"
            id="back"
            accept=".png, .jpeg, .jpg"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="border border-slate-800 p-1 text-white bg-sky-300 w-3/4"
        >
          登録
        </button>
      </form>
    </div>
  );
};

export default Register;
