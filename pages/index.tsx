import Layouts from "@/components/layouts/Layout"
import Image from "next/image"
import user from "../public/user/kkrn_icon_user_11.png";
import hatiman from "../public/user/hatiman.jpg";
import Link from "next/link";

type User = {
  id:number,
  name:string,
  text:string,
  updata_at:string,
  image:string
}

export default function Home() {

  const data:User[] = [
    {
        id:1,
        name:"user1",
        text:"testtexttesttexttesttexttesttexttesttexttesttexttesttext",
        updata_at:"11/06",
        image:""
    },
    {
        id:2,
        name:"user2",
        text:"testtexttesttexttesttexttesttexttesttexttesttexttesttext",
        updata_at:"11/06",
        image:""
    },
    {
        id:3,
        name:"user3",
        text:"testtexttesttexttesttexttesttexttesttexttesttexttesttext",
        updata_at:"11/06",
        image:""
    },
    {
        id:4,
        name:"user4",
        text:"testtexttesttexttesttexttesttexttesttexttesttexttesttext",
        updata_at:"11/06",
        image:""
    },
    {
        id:5,
        name:"user5",
        text:"testtexttesttexttesttexttesttexttesttexttesttexttesttext",
        updata_at:"11/06",
        image:""
    },
    {
        id:5,
        name:"user6",
        text:"testtexttesttexttesttexttesttexttesttexttesttexttesttext",
        updata_at:"11/06",
        image:""
    },
    {
        id:6,
        name:"user6",
        text:"testtexttesttexttesttexttesttexttesttexttesttexttesttext",
        updata_at:"11/06",
        image:""
    },
    {
        id:7,
        name:"user7",
        text:"testtexttesttexttesttexttesttexttesttexttesttexttesttext",
        updata_at:"11/06",
        image:""
    },
    {
        id:8,
        name:"user8",
        text:"testtexttesttexttesttexttest",
        updata_at:"11/06",
        image:"hatiman"
    },
]

  
  return (
    <Layouts>
      <div className="flex items-center justify-between px-7 py-4 bg-white md:justify-around ">
        <h2 className="text-2xl">はちまん</h2>
        <Image src={hatiman} className="rounded-full" alt="image" width={70} height={70}></Image>
      </div>

      <div className="px-7 my-5">
        <div className="flex justify-between mx-5 items-center mb-5">
          <h2 className="text-xl">友達リスト</h2>
          <Link href={"/approval"} className="p-1 text-xl border border-slate-500 bg-slate-300">承認</Link>
        </div>
        
        {data && data.map((e) => (
          <Link href={""} className="flex items-center gap-5 text-lg py-2 lg:gap-24" key={e.id} onClick={console.log}>
            <Image src={user} className="rounded-full" alt="image" width={50} height={50}></Image>
            <p className="md:text-2xl">{e.name}</p>
          </Link>
        ))}
      </div>
    </Layouts>
  )
}
