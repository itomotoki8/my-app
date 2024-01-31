import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Name = () => {
  const [name, setName] = useState("user01");

  const changeName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // useEffect(() => {
  //     const uid = localStorage.getItem('key');
  //     axios.post('http://localhost:8000/api/user',{uid:uid})
  //     .then((res) => setName(res.data.name))
  //     .catch((error) => console.log(error));
  // },[]);

  const router = useRouter();

  const addName = async () => {
    const uid = localStorage.getItem("key");
    await axios
      .post("http://localhost:8000/api/add_name", { uid: uid, name: name })
      .then((res) => router.push("/setting/profile/change"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="py-5 px-4">
      <div className="flex items-center justify-center py-3 text-xl bg-white">
        <Link
          href={"/setting/profile/change"}
          className="absolute left-7 w-4 h-4 border-t-2 border-l-2 border-slate-950 -rotate-45"
        ></Link>
        <h2>名前</h2>
      </div>

      <div className="mt-20">
        <p>名前</p>
        <input
          type="text"
          autoFocus
          className="border-b border-slate-200 w-full mt-3 text-2xl focus:border-green-400 focus:border-b-2 focus:outline-none"
          value={name && name}
          onChange={changeName}
        />
      </div>

      <button
        className="bg-green-400 text-white w-full mt-5 py-3 text-lg"
        onClick={addName}
      >
        保存
      </button>
    </div>
  );
};

export default Name;
