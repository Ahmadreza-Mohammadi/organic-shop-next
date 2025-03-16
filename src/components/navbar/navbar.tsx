"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { navPages } from "../constants/const";

function Navbar() {
  const router = useRouter();
  const productData = useSelector((state: any) => state.product);

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
        <div className="flex items-center gap-2 p-2 rounded-xl relative">
          <div className="flex gap-1">
            <div className="bg-red-400 p-2 rounded-full w-8 h-8 text-white absolute top-0 translate-y-[-30%] items-center flex justify-center">
              {productData.length}
            </div>
          </div>
          <img
            className="h-16 cursor-pointer"
            src="https://www.svgrepo.com/show/313120/cart.svg"
            alt=""
            onClick={() => handleNavigation("/cart")}
          />
        </div>
      </div>

      <div className="navbar p-8 flex justify-between">
        <div className=" flex justify-around  text-xl font-semibold text-white gap-2">
          {navPages.map((page) => (
            <div
              key={page.id}
              className="cursor-pointer hover:text-green-200 p-2 flex items-center gap-1"
            >
              <img className="h-6" src={page.logo} alt="organic shop" />
              <span key={page.id} onClick={() => handleNavigation(page.path)}>
                {page.name}
              </span>
            </div>
          ))}
        </div>
        <div
          className="px-4 flex items-center gap-2 cursor-pointer text-white font-semibold hover:text-green-200 "
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
