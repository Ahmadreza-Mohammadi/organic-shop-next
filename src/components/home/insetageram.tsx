import Image from "next/image";

import Instagram_1 from "@/assets/images/instagram/Instagram Post (1).png";
import Instagram_2 from "@/assets/images/instagram/Instagram Post (2).png";
import Instagram_3 from "@/assets/images/instagram/Instagram Post (3).png";
import Instagram_4 from "@/assets/images/instagram/Instagram Post (4).png";
import Instagram_5 from "@/assets/images/instagram/Instagram Post (5).png";
import Instagram_6 from "@/assets/images/instagram/Instagram Post.png";

export default function Insetageram() {
  return (
    <div className="mb-28 mt-20">
      <div className="flex justify-center items-center mt-14 mb-8">
        <h2 className="font-bold text-3xl "> اینستاگرام مارا دنبال کنید </h2>
      </div>
      <div className="flex flex-row justify-around ">
        <Image src={Instagram_1} alt="bannargreen" width={200} height={200} />
        <Image src={Instagram_3} alt="bannargreen" width={200} height={200} />
        <Image src={Instagram_4} alt="bannargreen" width={200} height={200} />
        <Image src={Instagram_5} alt="bannargreen" width={200} height={200} />
        <Image src={Instagram_2} alt="bannargreen" width={200} height={200} />
        <Image src={Instagram_6} alt="bannargreen" width={200} height={200} />
      </div>
    </div>
  );
}
