import Image from "next/image";

import product_1 from "@/assets/images/product/Image (4).png";
import product_2 from "@/assets/images/product/Image (6).png";
import product_3 from "@/assets/images/product/Image (7).png";
import product_4 from "@/assets/images/product/Image (8).png";
import product_5 from "@/assets/images/product/Image (9).png";
import product_6 from "@/assets/images/product/Product Image (1).png";
import product_7 from "@/assets/images/product/Product Image (2).png";
import product_8 from "@/assets/images/product/Product Image (3).png";
import product_9 from "@/assets/images/product/Product Image (4).png";
import product_10 from "@/assets/images/product/Image (11).png";




export default function Products() {
  return (
    <div className="m-6 mt-10">

    <div className="flex flex-row justify-between ">
      <h2 className="text-2xl font-bold">  محصولات محبوب </h2>
      <button className="text-[#00B207]">مشاهده همه</button>
    </div>

    <div className="grid  grid-cols-5 mt-10 gap-5">
            <div
              className="flex flex-col justify-center  items-center border-2 border-gray-300 w-[244px] h-[307px] rounded-lg  
                hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
                transition-all duration-300 ease-in-out"
            >
              <Image src={product_1} alt="bannargreen" width={200} height={213} />
              <h3 className="text-center"> سیب</h3>
            </div>
            <div
              className="flex flex-col justify-center  items-center border-2 border-gray-300 w-[244px] h-[307px] rounded-lg  
                hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
                transition-all duration-300 ease-in-out"
            >
              <Image src={product_2} alt="bannargreen" width={200} height={213} />
              <h3 className="text-center"> کلم</h3>
            </div>
            <div
              className="flex flex-col justify-center  items-center border-2 border-gray-300 w-[244px] h-[307px] rounded-lg  
                hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
                transition-all duration-300 ease-in-out"
            >
              <Image src={product_3} alt="bannargreen" width={200} height={213} />
              <h3 className="text-center">بادمجان </h3>
            </div>
            <div
              className="flex flex-col justify-center  items-center border-2 border-gray-300 w-[244px] h-[307px] rounded-lg  
                hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
                transition-all duration-300 ease-in-out"
            >
              <Image src={product_4} alt="bannargreen" width={200} height={213} />
              <h3 className="text-center"> فلفل تند</h3>
            </div>
            <div
              className="flex flex-col justify-center  items-center border-2 border-gray-300 w-[244px] h-[307px] rounded-lg  
                hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
                transition-all duration-300 ease-in-out"
            >
              <Image src={product_5} alt="bannargreen" width={200} height={213} />
              <h3 className="text-center"> فلفل دلمه ای</h3>
            </div>
            <div
              className="flex flex-col justify-center  items-center border-2 border-gray-300 w-[244px] h-[307px] rounded-lg  
                hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
                transition-all duration-300 ease-in-out"
            >
              <Image src={product_6} alt="bannargreen" width={200} height={213} />
              <h3 className="text-center"> سیب زمینی</h3>
            </div><div
              className="flex flex-col justify-center  items-center border-2 border-gray-300 w-[244px] h-[307px] rounded-lg  
                hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
                transition-all duration-300 ease-in-out"
            >
              <Image src={product_7} alt="bannargreen" width={200} height={213} />
              <h3 className="text-center"> ذرت</h3>
            </div><div
              className="flex flex-col justify-center  items-center border-2 border-gray-300 w-[244px] h-[307px] rounded-lg  
                hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
                transition-all duration-300 ease-in-out"
            >
              <Image src={product_8} alt="bannargreen" width={200} height={213} />
              <h3 className="text-center"> کاهو چینی</h3>
            </div><div
              className="flex flex-col justify-center  items-center border-2 border-gray-300 w-[244px] h-[307px] rounded-lg  
                hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
                transition-all duration-300 ease-in-out"
            >
              <Image src={product_9} alt="bannargreen" width={200} height={213} />
              <h3 className="text-center"> کاهو فرانسوی</h3>
            </div><div
              className="flex flex-col justify-center  items-center border-2 border-gray-300 w-[244px] h-[307px] rounded-lg  
                hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
                transition-all duration-300 ease-in-out"
            >
              <Image src={product_10} alt="bannargreen" width={200} height={213} />
              <h3 className="text-center">پرتقال </h3>
            </div>
            
            
    </div>


    </div>
  )
}

