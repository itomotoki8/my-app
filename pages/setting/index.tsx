import Layouts from "@/components/layouts/Layout";
import Image from "next/image";
import user from "../../public/user/hatiman.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
  // const [users, setUser] = useState<any>();

  // useEffect(() => {
  //   const uid = localStorage.getItem("key");

  //   axios
  //     .post("http://localhost:8000/api/user", { uid: uid })
  //     .then((res) => setUser(res.data))
  //     .catch((error) => console.log(error));
  // }, []);

  const users = {
    email: "hatiman@test.com",
    password: "hatiman80000",
    name: "user01",
    search_flag: false,
    search_id: "hatiman80000",
    topImage_url: "2023-12-12_11:16:56_hatiman.jpg",
    backgroundImage_url: "2023-12-12_11:16:56_bangkoksp.jpg",
  };

  return (
    <Layouts>
      <h2 className="text-center py-5 text-xl bg-white">設定</h2>
      <div className=" px-5 py-7 md:px-20">
        <div className="">
          <h3 className="md:text-2xl">プロフィール</h3>
          <Link
            href={"setting/profile"}
            className="mt-8 flex gap-5 items-center after:w-3 after:h-3 after:border-t after:border-r after:border-black after:rotate-45 after:absolute after:right-10 md:after:right-32"
          >
            <Image
              src={user}
              className="rounded-full"
              alt="image"
              width={60}
              height={60}
            />
            <p className="text-xl">{users && users.name}</p>
          </Link>
        </div>

        <div className="flex items-center mt-7 md:mt-14">
          <Link
            href={"setting/search"}
            className="md:text-lg w-screen py-5 block after:w-3 after:h-3 after:border-t after:border-r after:border-black after:rotate-45 after:absolute after:right-10 md:after:right-32"
          >
            友だち検索
          </Link>
        </div>
      </div>
    </Layouts>
  );
};

export default Index;
