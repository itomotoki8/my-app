import Layouts from "@/components/layouts/Layout";
import Image from "next/image";
import Link from "next/link";
import user from "../../public/user/kkrn_icon_user_11.png";
import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
  text: string;
  updata_at: string;
  image: string;
};

const Index = () => {
  const data: User[] = [
    {
      id: 1,
      name: "user1",
      text: "testtexttesttexttesttexttesttexttesttexttesttexttesttext",
      updata_at: "11/06",
      image: "",
    },
    {
      id: 2,
      name: "user2",
      text: "testtexttesttexttesttexttesttexttesttexttesttexttesttext",
      updata_at: "11/06",
      image: "",
    },
    {
      id: 3,
      name: "user3",
      text: "testtexttesttexttesttexttesttexttesttexttesttexttesttext",
      updata_at: "11/06",
      image: "",
    },
    {
      id: 4,
      name: "user4",
      text: "testtexttesttexttesttexttesttexttesttexttesttexttesttext",
      updata_at: "11/06",
      image: "",
    },
    {
      id: 5,
      name: "user5",
      text: "testtexttesttexttesttexttesttexttesttexttesttexttesttext",
      updata_at: "11/06",
      image: "",
    },
    {
      id: 6,
      name: "user6",
      text: "testtexttesttexttesttexttesttexttesttexttesttexttesttext",
      updata_at: "11/06",
      image: "",
    },
    {
      id: 7,
      name: "user7",
      text: "testtexttesttexttesttexttesttexttesttexttesttexttesttext",
      updata_at: "11/06",
      image: "",
    },
    {
      id: 8,
      name: "user8",
      text: "testtexttesttexttesttexttest",
      updata_at: "11/06",
      image: "",
    },
    {
      id: 9,
      name: "user9",
      text: "testtexttesttexttesttexttest",
      updata_at: "11/06",
      image: "",
    },
    {
      id: 10,
      name: "user10",
      text: "testtexttesttexttesttexttest",
      updata_at: "11/06",
      image: "",
    },
  ];
  const [frends, setFrends] = useState<any>();
  useEffect(() => {
    const uid = localStorage.getItem("key");
    axios
      .post("http://localhost:8000/api/get_frends", { uid: uid })
      .then((res) => setFrends(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Layouts>
      <div className="py-7 px-5">
        {data &&
          data.map((e) => (
            <Link
              href={`talk/${e.id}`}
              key={e.id}
              className="w-full h-full block "
            >
              <ul className="h-20 flex items-center lg:justify-normal lg:h-24">
                {e.image ? (
                  <Image src={e.image} alt={"image"} />
                ) : (
                  <Image src={user} alt="image" width={55} height={55} />
                )}
                <div className="pl-5">
                  <p className="md:text-2xl">{e.name}</p>
                  <p className="text-left md:text-xl">
                    {e.text.length > 35 ? (
                      <>{e.text.substring(0, 35)}...</>
                    ) : (
                      <>{e.text}</>
                    )}
                  </p>
                </div>
              </ul>
            </Link>
          ))}
      </div>
    </Layouts>
  );
};

export default Index;
