import Image from "next/image";
import Link from "next/link";
import image from "../../../../public/user/kkrn_icon_user_11.png";
import { useState } from "react";
import { useRouter } from "next/router";

const Index = () => {
    const user = {
        id:1,
        name:"user1",
        text:"testtexttesttexttesttexttesttexttesttexttesttexttesttext",
        updata_at:"11/06",
        image:""
    }

    const [boolean, setBoolean] = useState(true);

    const onOff = async () => {
        setBoolean(!boolean);
    }

    const router = useRouter();

    const push = async () => {
        router.push('/');
    }

    
    return (
        <div className="py-5">
            <div className="flex items-center justify-center py-3 text-xl bg-white" >
                <Link href={"/setting/profile"} className="absolute left-7 text-3xl">✕</Link>
                <h2>プロフィール</h2>
            </div>

            <div className="p-5">
                <Link href={""} className="relative flex justify-center items-center h-32 md:h-80 bg-[url('/user/hatiman.jpg')] bg-center bg-cover opacity-80 rounded-lg">
                    <div className="relative z-30" onClick={push}>
                        <Image src={image} className="rounded-full" alt="image" width={100} height={100} />
                        <div className="text-xl absolute right-0 bottom-0">〇</div>
                    </div>
                    <div className="text-xl absolute right-2 bottom-1">〇</div>
                </Link>

                <Link href={"change/name"} className="border-b border-slate-200 py-4 flex mt-7 items-center after:w-3 after:h-3 after:border-t after:border-r after:border-black after:rotate-45 after:absolute after:right-10">
                    <div>
                        <h3>名前</h3>
                        <p className="text-2xl">{user.name}</p>
                    </div>
                </Link>

                <div className="py-4">
                    <div>
                        <h3>ID</h3>
                        <p className="text-2xl">{"hatiman80000"}</p>
                    </div>
                </div>

                <div className="border-b border-slate-200 pb-3 flex justify-between">
                    <h3>IDによる友達追加を許可</h3>

                    <div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" onClick={onOff} defaultChecked={boolean}/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;