import Image from "next/image";
import Link from "next/link";
import image from "../../../public/user/kkrn_icon_user_11.png";

const Index = () => {
    const user = {
        id:1,
        name:"user1",
        text:"testtexttesttexttesttexttesttexttesttexttesttexttesttext",
        updata_at:"11/06",
        image:""
    }

    return (
        <div className="px-7 py-5 min-h-screen bg-[url('/user/hatiman.jpg')] bg-center bg-cover opacity-80 text-white ">
            <div className="h-16 flex items-center justify-between text-2xl md:text-4xl">
                <Link href={"/setting"} className="text-3xl md:text-4xl">✕</Link>
                <Link href={"/setting/profile/change"}>設定</Link>
            </div>
            <div className="text-center items-center absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/4">
                <Image src={image} alt="image" width={150} height={150} />
                <h2 className="text-3xl">{user.name}</h2>
            </div>

        </div>
    );
}

export default Index;