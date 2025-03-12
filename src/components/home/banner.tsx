import React from "react";
import Image from "next/image";
import BannarBig from "@/assets/images/baner/BannarBig.png";
import BannarBag from "@/assets/images/baner/BannarBag.png";
import Bannargreen from "@/assets/images/baner/Bannargreen.png";

export default function Banner() {
  return (
    <div className="mt-16 ">
      <div className="flex flex-row justify-around">
        <div className="flex flex-col gap-5">
          <div className="relative w-[423px] h-[288px]">
            <Image
              src={BannarBag}
              alt="bannarBag"
              width={423}
              height={288}
              className="rounded-lg object-cover"
            />

            <p className="absolute left-4 top-1/4 -translate-y-1/2 text-xl  flex flex-col">
              فروش تابستانی{" "}
              <span className="font-bold text-2xl">تخفیف 75%</span>
              <span className="text-lg">فقط میوه و سبزیجات</span>
            </p>
          </div>

          <div className="relative">
            <Image
              src={Bannargreen}
              alt="bannargreen"
              width={423}
              height={288}
            />
            <p className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-bold  rounded-lg">
              <span className="text-sm">بهترین معاملات</span> ویژه محصولات ویژه
              ماه
            </p>
          </div>
        </div>
        <div className="relative">
          <p className="absolute left-12 top-1/4 mb-5 flex items-center justify-center text-white text-5xl font-bold  rounded-lg  flex-col">
            غذای ارگانیک<span> تازه و سالم</span>
          </p>
          <p className="absolute left-12 top-2/4  flex flex-col  gap-3 items-center justify-center text-white text-xl font-bold ">
            فروش تا{" "}
            <span className="bg-orange-500 p-2 rounded-lg">30%تخفیف</span>
            <span className="text-sm">ارسال رایگان برای تمام سفارشات شما</span>
          </p>
          <img src={BannarBig.src} alt="bannarBig" />
        </div>
      </div>
    </div>
  );
}
