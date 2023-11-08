import Link from "next/link";
import user from "../public/user/kkrn_icon_user_11.png";
import Image from "next/image";
import Layouts from "@/components/layouts/Layout";


type User = {
    id:number,
    name:string,
    text:string,
    updata_at:string,
    image:string
  }
  

const Approval = () => {

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
            <div className="h-16 flex items-center bg-white">
                <Link href={"/"} className="w-4 h-4 border-t-2 border-l-2 border-slate-950 -rotate-45 ml-7"></Link>
            </div>

            <div className="px-7 py-4">
                <div className="flex gap-3">
                    <h2 className="text-lg">知り合いかも？</h2>
                    <p className="text-lg">{data.length}</p>
                </div>
                <div className="mt-3">
                {data && data.map((e) => (
                    <div className="flex items-center justify-between text-lg py-2" key={e.id} onClick={console.log}>
                        <Link href={""} className="flex items-center gap-5 flex-1">
                            <Image src={user} className="rounded-full" alt="image" width={50} height={50} />
                            <p className="lg:text-2xl">{e.name}</p>
                        </Link>
                        <button className="text-3xl absolute right-7 p-2 z-10">+</button>
                    </div>
                ))}
                </div>

            </div>
        </Layouts>
    );
}

export default Approval;