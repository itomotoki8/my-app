import Layouts from "@/components/layouts/Layout";
import Image from "next/image";
import user from "../../public/user/hatiman.jpg";
import Link from "next/link";

const Index = () => {
    return (
            <Layouts>
                <h2 className="text-center py-5 text-xl bg-white" >設定</h2>
                <div className=" px-5 py-7 md:px-20" >
                    <div className="">
                        <h3 className="md:text-2xl">プロフィール</h3>
                        <Link href={"setting/profile"} className="mt-8 flex gap-5 items-center after:w-3 after:h-3 after:border-t after:border-r after:border-black after:rotate-45 after:absolute after:right-10 md:after:right-32">
                            <Image src={user} className="rounded-full" alt="image" width={60} height={60} />
                            <p className="text-xl">はちまん</p>
                        </Link>
                    </div>

                    <div className="flex items-center mt-7 md:mt-14">
                        <Link href={"setting/search"} className="md:text-lg w-screen py-5 block after:w-3 after:h-3 after:border-t after:border-r after:border-black after:rotate-45 after:absolute after:right-10 md:after:right-32">友だち検索</Link>
                    </div>
                </div>

            </Layouts>
    );
}

export default Index;