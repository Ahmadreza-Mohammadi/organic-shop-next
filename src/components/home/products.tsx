import Image from "next/image";

import Category_1 from "@/assets/images/Categories/image 1 (1).png";

export default function Products() {
  return (
    <div className="m-6 mt-10">

    <div className="flex flex-row justify-between ">
      <h2 className="text-2xl font-bold">  محصولات محبوب </h2>
      <button className="text-[#00B207]">مشاهده همه</button>
    </div>

    <div className="grid  grid-cols-5 mt-10 gap-5">
            <div
              className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
                hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
                transition-all duration-300 ease-in-out"
            >
              <Image src={Category_1} alt="bannargreen" width={200} height={213} />
              <h3 className="text-center">میوه تازه</h3>
            </div>
    </div>


    </div>
  )
}

