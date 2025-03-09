import React from "react";
import { navPages } from "../constants/const";

function Navbar() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center w-full p-12 shadow bg-white border-2 ">
        <div className="flex items-center cursor-pointer clear-start p-1 rounded-md">
          <img
            className="h-24"
            src="https://www.svgrepo.com/show/318264/food-fruit-vegetable-vegetarian-organic-coconut-young.svg"
            alt=""
          />
          <span className="font-bold text-3xl text-green-500">ارگانیک شاپ</span>
        </div>
        <div className="border border-1 flex rounded-l-xl rounded-r-md shadow-lg">
          <div className="bg-white p-2">
            <input
              className="outline-none"
              placeholder="جستجو"
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
          />
        </div>
      </div>
      <div className="bg-green-500 flex justify-between">
        <div className=" flex justify-around  text-xl font-semibold text-white">
          {navPages.map((page) => (
            <span
              className="cursor-pointer hover:bg-green-800 p-2"
              key={page.id}
            >
              {page.name}
            </span>
          ))}
        </div>
        <div className="px-4 flex items-center gap-2 cursor-pointer text-white font-semibold hover:bg-green-900">
          <span>پشتیبانی</span>
          <img className="h-10" src="https://www.svgrepo.com/show/343881/customer-support-help-service.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
