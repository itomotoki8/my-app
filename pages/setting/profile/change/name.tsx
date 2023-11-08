import Link from "next/link";
import { useState } from "react";

const Name = () => {

    const user = {
        id:1,
        name:"user1",
        text:"testtexttesttexttesttexttesttexttesttexttesttexttesttext",
        updata_at:"11/06",
        image:""
    }

    const [name,setName] = useState(user.name);

    const changeName = async (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    
    return (
        <div className="py-5 px-4">
            <div className="flex items-center justify-center py-3 text-xl bg-white" >
                <Link href={"/setting/profile/change"} className="absolute left-7 w-4 h-4 border-t-2 border-l-2 border-slate-950 -rotate-45"></Link>
                <h2>名前</h2>
            </div>

            <div className="mt-20">
                <p>名前</p>
                <input type="text" autoFocus className="border-b border-slate-200 w-full mt-3 text-2xl focus:border-green-400 focus:border-b-2 focus:outline-none" value={name} onChange={changeName} />
            </div>

            <button className="bg-green-400 text-white w-full mt-5 py-3 text-lg">保存</button>
        </div>
    );
}

export default Name;