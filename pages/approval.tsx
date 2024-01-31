import Link from "next/link";
import user from "../public/user/kkrn_icon_user_11.png";
import Image from "next/image";
import Layouts from "@/components/layouts/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

const Approval = () => {
  // const [frends,setFrends] = useState<any>();
  // useEffect(() => {
  //     const uid = localStorage.getItem('key');
  //     axios.post('http://localhost:8000/api/approval',{uid:uid})
  //     .then((res) => setFrends(res.data))
  //     .catch((error) => console.log(error));
  // },[])

  const frends = [
    {
      email: "test@test1.com",
      password: "testuser01",
      name: "testUser01",
      search_flag: true,
      search_id: "testuser01",
      topImage_url: "",
      backgroundImage_url: "",
      id: 1,
    },
    {
      email: "test@test2.com",
      password: "testuser02",
      name: "testuser02",
      search_flag: true,
      search_id: "testuser02",
      topImage_url: "",
      backgroundImage_url: "",
      id: 1,
    },
  ];

  const flagChange = async (e: number) => {
    const uid = localStorage.getItem("key");
    axios
      .post("http://localhost:8000/api/flag_change", { uid: uid, id: e })
      .catch((error) => console.log(error));
  };

  return (
    <Layouts>
      <div className="h-16 flex items-center bg-white">
        <Link
          href={"/"}
          className="w-4 h-4 border-t-2 border-l-2 border-slate-950 -rotate-45 ml-7"
        ></Link>
      </div>

      <div className="px-7 py-4">
        <div className="flex gap-3">
          <h2 className="text-lg">知り合いかも？</h2>
          <p className="text-lg">{frends && frends.length}</p>
        </div>
        <div className="mt-3">
          {frends &&
            frends.map((e) => (
              <div
                className="flex items-center justify-between text-lg py-2 "
                key={e.id}
              >
                <Link href={""} className="flex items-center gap-5 w-[80%]">
                  <Image
                    src={user}
                    className="rounded-full"
                    alt="image"
                    width={50}
                    height={50}
                  />
                  <p className="lg:text-2xl">{e.name}</p>
                </Link>
                <button
                  className="text-3xl absolute right-7 p-2 z-10 w-[20%]"
                  onClick={() => flagChange(e.id)}
                >
                  +
                </button>
              </div>
            ))}
        </div>
      </div>
    </Layouts>
  );
};

export default Approval;
