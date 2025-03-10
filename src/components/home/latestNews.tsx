import Image from "next/image";

import news_1 from "@/assets/images/news/Image (14).png";
import news_2 from "@/assets/images/news/Image (15).png";
import news_3 from "@/assets/images/news/Image (18).png";
import arrow from "@/assets/images/Group (2).png";

export default function LatestNews() {
  return (
    <div>
      <div className="flex justify-center items-center mt-14">
        <h2 className="font-bold text-3xl ">آخرین اخبار </h2>
      </div>
      <div className="flex flex-row justify-around mt-8">
        <div className="rounded-lg w-[400px] overflow-visible">
          <Image
            src={news_1}
            alt="bannargreen"
            width={200}
            height={200}
            className="w-full h-[300px] object-cover rounded-lg -mb-3"
          />

          <div className="border-2 border-gray-300 rounded-br-lg rounded-bl-lg p-4">
            <h3 className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quo?
            </h3>
            <div className="flex flex-col mt-3">
              <button className="flex flex-row-reverse items-center text-[#00B207] gap-2">
                ادامه مطلب
                <Image src={arrow} alt="bannargreen" width={10} height={10} />
              </button>
            </div>
          </div>

        </div>
        <div className="rounded-lg w-[400px] overflow-visible">
          <Image
            src={news_2}
            alt="bannargreen"
            width={200}
            height={200}
            className="w-full h-[300px] object-cover rounded-lg -mb-3"
          />

          <div className="border-2 border-gray-300 rounded-br-lg rounded-bl-lg p-4">
            <h3 className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quo?
            </h3>
            <div className="flex flex-col mt-3">
              <button className="flex flex-row-reverse items-center text-[#00B207] gap-2">
                ادامه مطلب
                <Image src={arrow} alt="bannargreen" width={10} height={10} />
              </button>
            </div>
          </div>

        </div>
        <div className="rounded-lg w-[400px] overflow-visible">
          <Image
            src={news_3}
            alt="bannargreen"
            width={200}
            height={200}
            className="w-full h-[300px] object-cover rounded-lg -mb-3"
          />

          <div className="border-2 border-gray-300 rounded-br-lg rounded-bl-lg p-4">
            <h3 className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quo?
            </h3>
            <div className="flex flex-col mt-3">
              <button className="flex flex-row-reverse items-center text-[#00B207] gap-2">
                ادامه مطلب
                <Image src={arrow} alt="bannargreen" width={10} height={10} />
              </button>
            </div>
          </div>

        </div>
      </div>
      
      
    </div>
  );
}
