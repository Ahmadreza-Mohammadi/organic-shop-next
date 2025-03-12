import Image from "next/image";

import Category_1 from "@/assets/images/Categories/image 1 (1).png";
import Category_2 from "@/assets/images/Categories/image 1.png";
import Category_3 from "@/assets/images/Categories/image 1 (2).png";
import Category_4 from "@/assets/images/Categories/image 1 (3).png";
import Category_5 from "@/assets/images/Categories/image 1 (4).png";
import Category_6 from "@/assets/images/Categories/image 1 (5).png";
import Category_7 from "@/assets/images/Categories/image 1 (6).png";
import Category_8 from "@/assets/images/Categories/image 1 (7).png";
import Category_9 from "@/assets/images/Categories/image 1 (8).png";
import Category_10 from "@/assets/images/Categories/image 1 (9).png";
import Category_11 from "@/assets/images/Categories/image 1 (10).png";
import Category_12 from "@/assets/images/Categories/image 1 (11).png";

export default function Categories() {
  return (
    <div className="m-6 mt-10">
      <div className="flex flex-row justify-between ">
        <h2 className="text-2xl font-bold">دسته بندی های محبوب</h2>
        <button className="text-[#00B207]">مشاهده همه</button>
      </div>

      <div className="grid  grid-cols-6 mt-10 gap-5">
        <div
          className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
            hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
            transition-all duration-300 ease-in-out "
        >
          <Image src={Category_1} alt="bannargreen" width={200} height={213} />
          <h3 className="text-center">میوه تازه</h3>
        </div>
        <div
          className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
         hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
          transition-all duration-300 ease-in-out "
        >
          <Image src={Category_2} alt="bannargreen" width={200} height={213} />
          <h3 className="text-center">سبزیجات تازه</h3>
        </div>
        <div
          className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
        hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
        transition-all duration-300 ease-in-out "
        >
          <Image src={Category_3} alt="bannargreen" width={200} height={213} />
          <h3 className="text-center">گوشت و ماهی</h3>
        </div>
        <div
          className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
          hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
          transition-all duration-300 ease-in-out "
        >
          <Image src={Category_4} alt="bannargreen" width={200} height={213} />
          <h3 className="text-center">تنقلات</h3>
        </div>
        <div
          className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
          hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
          transition-all duration-300 ease-in-out "
        >
          <Image src={Category_5} alt="bannargreen" width={200} height={213} />
          <h3 className="text-center">نوشیدنی ها</h3>
        </div>
        <div
          className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
          hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
         transition-all duration-300 ease-in-out "
        >
          <Image src={Category_6} alt="bannargreen" width={200} height={213} />
          <h3 className="text-center">زیبایی و سلامت</h3>
        </div>
        <div
          className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
          hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
          transition-all duration-300 ease-in-out "
        >
          <Image src={Category_7} alt="bannargreen" width={200} height={213} />
          <h3 className="text-center"> نان</h3>
        </div>
        <div
          className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
          hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
          transition-all duration-300 ease-in-out "
        >
          <Image src={Category_8} alt="bannargreen" width={200} height={213} />
          <h3 className="text-center"> نیازهای پخت</h3>
        </div>
        <div
          className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
          hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
          transition-all duration-300 ease-in-out "
        >
          <Image src={Category_9} alt="bannargreen" width={200} height={213} />
          <h3 className="text-center"> آشپزی</h3>
        </div>
        <div
          className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
          hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
          transition-all duration-300 ease-in-out "
        >
          <Image src={Category_10} alt="bannargreen" width={200} height={213} />
          <h3 className="text-center"> غذای دیابتی</h3>
        </div>
        <div
          className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
          hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
          transition-all duration-300 ease-in-out "
        >
          <Image src={Category_11} alt="bannargreen" width={200} height={213} />
          <h3 className="text-center"> مواد شوینده</h3>
        </div>
        <div
          className="flex flex-col justify-center border-2 border-gray-300 w-[200px] h-[213px] rounded-lg gap-5 
          hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
          transition-all duration-300 ease-in-out "
        >
          <Image src={Category_12} alt="bannargreen" width={200} height={213} />
          <h3 className="text-center"> روغن</h3>
        </div>
      </div>
    </div>
  );
}
