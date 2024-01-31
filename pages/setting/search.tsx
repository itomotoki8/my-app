import Layouts from "@/components/layouts/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import user from "../../public/user/kkrn_icon_user_11.png";
import Image from "next/image";
import axios from "axios";

const Search = () => {
  const [value, setValue] = useState<string>();

  const changeValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  //   const [frend, setFrend] = useState<any>();

  const searchId = async (e: any) => {
    e.preventDefault();
    // const uid = localStorage.getItem("key");
    // await axios
    //   .post("http://localhost:8000/api/search", { frendId: value, uid: uid })
    //   .then((res) => setFrend(res.data))
    //   .catch((error) => console.log(error));
  };

  const addFrend = async (id: number) => {
    // const uid = localStorage.getItem("key");
    // axios
    //   .post("http://localhost:8000/api/addFrend", { id: id, uid: uid })
    //   .catch((error) => console.log(error));
    // setFrend("");
  };

  const frend = {
    email: "test@test.com",
    password: "Motoki0305",
    name: "Motoki",
    search_flag: true,
    search_id: "Motoki03050",
    topImage_url: "",
    backgroundImage_url: "",
    id: 1,
    msg: "",
  };

  return (
    <Layouts>
      <div className="flex items-center justify-center py-5 text-xl bg-white">
        <Link
          href={"/setting"}
          className="absolute left-7 w-4 h-4 border-t-2 border-l-2 border-slate-950 -rotate-45"
        ></Link>
        <h2>友だち検索</h2>
      </div>
      <form
        className="flex justify-center mt-32 px-3 gap-3"
        onSubmit={searchId}
      >
        <input
          type="text"
          value={value}
          onChange={changeValue}
          placeholder="id検索"
          className="border border-slate-900 rounded-md w-[80%] p-1"
        />
        <button type="submit">検索</button>
      </form>

      {frend && (
        <div className="flex items-center justify-between text-lg px-7 mt-10 md:px-20">
          <Link href={""} className="flex items-center gap-5 flex-1">
            <Image
              src={user}
              className="rounded-full"
              alt="image"
              width={50}
              height={50}
            />
            <p>{frend.name}</p>
          </Link>
          {frend.msg ? (
            frend.msg
          ) : (
            <button
              className="text-3xl absolute right-7 p-2 z-10 md:right-20"
              onClick={() => addFrend(frend.id)}
            >
              +
            </button>
          )}
        </div>
      )}
    </Layouts>
  );
};

export default Search;
