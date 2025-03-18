"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "@/redux/reducers/productReducer";
import { formatPrice } from "@/utils/helper";

interface Product {
  id: number;
  name: string;
  price: number;
  stars: number;
  category: string;
  description?: string;
  imageUrl?: string;
}

const TopSingle: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.product);
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(add(product));
    }
  };

  const inCart = productData.find((item: any) => item.id === product.id);

  return (
    <div className="bg-white w-full min-h-screen flex justify-center items-center p-8 text-center">
      <div className="w-full bg-white shadow-md rounded-lg p-8" style={{ height: "90vh" }}>
        <div className="h-full flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex items-center">
            <img
              src={product.imageUrl || "https://via.placeholder.com/400"}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="border-b border-gray-300 pb-4">
              <h1 className="text-gray-800 font-bold" style={{ fontSize: "40px" }}>
                {product.name}
              </h1>
              <div className="text-2xl font-bold" style={{ color: "#00B207" }}>
                {formatPrice(product.price)} تومان
              </div>
              <p className="text-green-600 text-base font-medium">
                ⭐ {product.stars} ستاره • {product.category}
              </p>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-4 border border-black rounded-full mt-4 p-1">
                  <button
                    onClick={handleDecrease}
                    className="w-12 h-12 bg-gray-200 border border-black text-gray-700 rounded-full text-xl font-bold hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-gray-700 text-lg">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="w-12 h-12 bg-gray-200 border border-black text-gray-700 rounded-full text-xl font-bold hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="py-3 px-6 text-white font-semibold rounded-full hover:opacity-90 w-100"
                  style={{ backgroundColor: "#00B207" }}
                >
                  افزودن به سبد خرید
                </button>
              </div>
              {inCart && (
                <div className="mt-4 flex items-center gap-4">
                  <button
                    onClick={() => dispatch(add(product))}
                    className="text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    +
                  </button>
                  <span className="text-gray-700 text-lg">{inCart.count}</span>
                  <button
                    onClick={() => dispatch(remove(product))}
                    className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    -
                  </button>
                </div>
              )}
              <div className="mt-4">
                <p className="text-gray-600">
                  دسته‌بندی: <span className="font-medium">{product.category}</span>
                </p>
                <p className="text-gray-600">{product.description || "اطلاعات اضافی موجود نیست."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSingle;
