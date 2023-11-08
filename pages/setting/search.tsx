import Layouts from "@/components/layouts/Layout";
import Link from "next/link";
import { useState } from "react";
import user from "../../public/user/kkrn_icon_user_11.png";
import Image from "next/image";

const Search = () => {

    const serachValue = {
        id:2,
        name:"佐藤です",
        image:"",
    }

    const [value,setValue] = useState<string>("");

    const changeValue = async (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <Layouts>
            <div className="flex items-center justify-center py-5 text-xl bg-white" >
                <Link href={"/setting"} className="absolute left-7 w-4 h-4 border-t-2 border-l-2 border-slate-950 -rotate-45"></Link>
                <h2>友だち検索</h2>
            </div>
            <div className="flex justify-center mt-32 px-3 gap-3">
                <input type="text" value={value} onChange={changeValue} placeholder="id検索" className="border border-slate-900 rounded-md w-[80%] p-1" />
                <button>検索</button>
            </div>


            <div className="flex items-center justify-between text-lg px-7 mt-10 md:px-20" key={serachValue.id} onClick={console.log}>
                <Link href={""} className="flex items-center gap-5 flex-1">
                    <Image src={user} className="rounded-full" alt="image" width={50} height={50} />
                    <p>{serachValue.name}</p>
                </Link>
                <button className="text-3xl absolute right-7 p-2 z-10 md:right-20">+</button>
            </div>
        </Layouts>
    );
}

export default Search;