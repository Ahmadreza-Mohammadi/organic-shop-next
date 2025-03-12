"use client";

import React from "react";
import { navPages } from "../constants/const";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-full flex flex-col">
      <div className=" flex justify-between items-center w-full p-12 shadow  border-2 ">
        <div className="flex items-center cursor-pointer clear-start p-1 rounded-md">
          <img
            className="h-24"
            src="https://www.svgrepo.com/show/318264/food-fruit-vegetable-vegetarian-organic-coconut-young.svg"
            alt=""
          />
          <span
            className="font-bold text-3xl text-green-500"
            onClick={() => handleNavigation("/home")}
          >
            ارگانیک شاپ
          </span>
        </div>
        <div className="border border-1 flex rounded-l-xl rounded-r-md shadow-lg">
          <div className="bg-white p-2">
            <input
              className="outline-none w-[480px]"
              placeholder="جستجوی محصولات"
              type="text"
              name=""
              id=""
            />
          </div>
          <button className="border border-1 p-2 rounded-l-xl bg-green-500 text-white hover:bg-green-600">
            جستجو
          </button>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-xl">
          <div className="flex gap-1">
            <span>جمع کل:</span>
            <span>۳۴۵۰۰۰ تومان</span>
          </div>
          <img
            className="h-16 cursor-pointer"
            src="https://www.svgrepo.com/show/313120/cart.svg"
            alt=""
            onClick={() => handleNavigation("/cart")}
          />
        </div>
      </div>
      <div className="bg-[#919090] flex justify-between">
        <div className=" flex justify-around  text-xl font-semibold text-white">
          {navPages.map((page) => (
            <span
              className="cursor-pointer hover:scale-105 hover:font-bold transition-all duration-400 ease-in-out  p-4"
              key={page.id}
              onClick={() => handleNavigation(page.path)}
            >
              {page.name}
            </span>
          ))}
        </div>
        <div
          className="px-4 flex items-center gap-2 cursor-pointer text-white font-semibold hover:scale-105 hover:font-bold transition-all duration-300 ease-in-out"
          onClick={() => handleNavigation("/support")}
        >
          <span>پشتیبانی</span>
          <img
            className="h-10 animate-pulse"
            src="https://www.svgrepo.com/show/343881/customer-support-help-service.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
