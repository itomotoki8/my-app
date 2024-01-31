import Layouts from "@/components/layouts/Layout";
import Image from "next/image";
import image from "../public/user/kkrn_icon_user_11.png";
import hatiman from "../public/user/hatiman.jpg";
import Link from "next/link";
import axios from "axios";

// export async function getServerSideProps() {
//   const { data } = await axios.get(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/2`
//   );
//   const frends = (
//     await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/friends`)
//   ).data;

//   return { props: { user: data, frends } };
// }

//使いたいページの()のなかに{}で記述

export default function Home(/*{ user, frends }: any*/) {
  const user = {
    email: "hatiman@test.com",
    password: "hatiman80000",
    name: "hatiman",
    search_flag: false,
    search_id: "hatiman80000",
    topImage_url: "2023-12-12_11:16:56_hatiman.jpg",
    backgroundImage_url: "2023-12-12_11:16:56_bangkoksp.jpg",
  };

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

  return (
    <Layouts>
      <div className="flex items-center justify-between px-7 py-4 bg-white md:justify-around ">
        <h2 className="text-2xl">{user && user.name}</h2>
        <Image
          src={hatiman}
          className="rounded-full"
          alt="image"
          width={70}
          height={70}
        ></Image>
      </div>

      <div className="px-7 my-5">
        <div className="flex justify-between mx-5 items-center mb-5">
          <h2 className="text-xl">友達リスト</h2>
          <Link
            href={"/approval"}
            className="p-1 text-xl border border-slate-500 bg-slate-300"
          >
            承認
          </Link>
        </div>

        {frends &&
          frends.map((e) => (
            <Link
              href={""}
              className="flex items-center gap-5 text-lg py-2 lg:gap-24"
              key={e.id}
              onClick={console.log}
            >
              <Image
                src={image}
                className="rounded-full"
                alt="image"
                width={50}
                height={50}
              ></Image>
              <p className="md:text-2xl">{e.name}</p>
            </Link>
          ))}
      </div>
    </Layouts>
  );
}
