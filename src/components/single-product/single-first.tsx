"use client";

import React, { useState } from "react";

const TopSingle: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
 
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="bg-white w-full min-h-screen flex justify-center items-center p-8 text-center">
        <div className="w-full bg-white shadow-md rounded-lg p-8" style={{ height: "90vh" }}>
          <div className="h-full flex flex-col lg:flex-row gap-8">
            <div className="flex-1 flex items-center">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.upLW9cxb5VFYly2Nj8P5tAHaE7&pid=Api&P=0&h=220"
                alt="کلم چینی"
                className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="border-b border-gray-300 pb-4">
                <h1 className="text-gray-800 font-bold" style={{ fontSize: "40px" }}>
                  پیازچه
                </h1>
                <div className="text-2xl font-bold" style={{ color: "#00B207" }}>
                  ۱۷٫۲۸ دلار <span className="line-through text-gray-500">۴۸٫۰۰ دلار</span>
                </div>
                <p className="text-green-600 text-base font-medium">٪۶۴ تخفیف • موجود در انبار</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-base">
                  تاکسی کلاس اپتنت سوسیوسکو اد لیتورا تورکونت پر کونووبیا نوسترا، پر اینسپتوس هیمنائوس. نولا نیب دیام، بلاندیت ول کنسکوات نک، اولتریکس ات ایپسام. نولا واریوس مگنا آ کنسکوات پولوینار.
                </p>
                <div className="flex items-center justify-between gap-4 p-4 ">
                  <div className="flex items-center gap-4 border border-black rounded-full mt-4 p-1">
                    <button
                      onClick={handleDecrease}
                      className="w-12 h-12 bg-gray-200 border border-black text-gray-700 rounded-full text-xl font-bold hover:bg-gray-300"
                    >-</button>
                    <span className="text-gray-700 text-lg">{quantity}</span>
                    <button
                      onClick={handleIncrease}
                      className="w-12 h-12 bg-gray-200 border border-black text-gray-700 rounded-full text-xl font-bold hover:bg-gray-300"
                    >+</button>
                  </div>
                  <button
                    className="py-3 px-6 text-white font-semibold rounded-full hover:opacity-90 w-100"
                    style={{ backgroundColor: "#00B207" }}
                  >افزودن به سبد خرید</button>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">
                    دسته‌بندی: <span className="font-medium">سبزیجات</span>
                  </p>
                  <p className="text-gray-600">
                    برچسب‌ها: <span className="font-medium">سبزیجات، سالم، چینی، کلم، کلم سبز</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSingle;
