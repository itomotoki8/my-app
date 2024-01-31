import Image from "next/image";
import Link from "next/link";
import image from "../../../public/user/kkrn_icon_user_11.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
  // const [users,setUser] = useState<any>();

  // useEffect(() => {
  //     const uid = localStorage.getItem('key');

  //     axios.post('http://localhost:8000/api/user',{uid:uid})
  //     .then((res) => setUser(res.data))
  //     .catch((error) => console.log(error));
  //   },[]);

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
    <div className="px-7 py-5 min-h-screen bg-[url('/user/hatiman.jpg')] bg-center bg-cover opacity-80 text-white ">
      <div className="h-16 flex items-center justify-between text-2xl md:text-4xl">
        <Link href={"/setting"} className="text-3xl md:text-4xl">
          ✕
        </Link>
        <Link href={"/setting/profile/change"}>設定</Link>
      </div>
      <div className="flex items-center w-screen justify-center flex-col h-screen absolute top-0 left-0 -z-10">
        <Image src={image} alt="image" width={150} height={150} />
        <h2 className="text-3xl">{users && users.name}</h2>
      </div>
    </div>
  );
};

export default Index;
