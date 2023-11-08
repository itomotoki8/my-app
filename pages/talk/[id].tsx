import Image from "next/image";
import { useRouter } from "next/router";
import user from "../../public/user/kkrn_icon_user_11.png";
import Link from "next/link";
import Head from "next/head";

const User = () => {

    const router = useRouter();

    const {id} = router.query;
    
    return (
        <div className="bg-sky-300 min-h-screen">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
            </Head>
            <div className="bg-slate-400 h-16 flex items-center gap-10">
                <Link href={"/talk"} className="w-4 h-4 border-t-2 border-l-2 border-slate-950 -rotate-45 ml-7"></Link>
                <p className="text-xl">user{id}</p>
            </div>

            <div className="md:mx-10 md:text-xl">
                <div className="px-2 pt-5">

                    <div className="flex mb-5 gap-1">
                        <div><Image className="rounded-full" src={user} width={35} height={35} alt="image"/></div>
                        <p className="bg-white px-2 py-1 rounded-xl max-w-[80%]">user1のテキストです。</p>
                    </div>
                    
                    <div className="flex justify-end">
                        <p className="bg-green-200 p-2 rounded-xl  max-w-[80%]">user2のテキストです。</p>
                    </div>

                </div>
            </div>
            <div className="shadow-2xl shadow-black bg-white h-20 fixed bottom-0 w-full flex items-center justify-center">
                <textarea className="border border-slate-800 rounded-lg w-3/4 p-2 leading-5 resize-none" placeholder="Aa"/>
                <button className="absolute w-6 h-6 right-2 bg-blue-500"></button>
            </div>
        </div>
    );
}

export default User;