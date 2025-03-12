import Image from "next/image";

import Rectangle_1 from "@/assets/images/baner/Rectangle 54.png";
import Rectangle_2 from "@/assets/images/baner/Rectangle 54 (1).png";
import Rectangle_3 from "@/assets/images/baner/Rectangle 54 (2).png";



export default function Bannar2() {
  return (
    <div className="flex flex-row justify-around m-6 mt-10">
        <div className="relative">
<Image src={Rectangle_1} alt="bannar" width={424} height={536} />

        <p className="absolute left-1/3 top-1/4 -translate-y-1/2   flex flex-col justify-center items-center font-bold text-3xl">
             سبزیجات تازه
            </p>
        </div>
        <div className="relative">
        <p className="absolute left-1/3 top-1/4 -translate-y-1/2   flex flex-col justify-center items-center font-bold text-3xl text-white">
              گوشت تازه
            </p>
<Image src={Rectangle_2} alt="bannar" width={424} height={536} />
        </div>
        <div className="relative">
        <p className="absolute left-1/3 top-1/4 -translate-y-1/2   flex flex-col justify-center items-center font-bold text-3xl text-white">
              میوه تازه
            </p>
<Image src={Rectangle_3} alt="bannar" width={424} height={536} />
        </div>

    </div>
  )
}
