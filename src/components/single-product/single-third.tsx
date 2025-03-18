"use client";

import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  stars: number;
  imageUrl?: string;
}

const BottomSingle: React.FC<{ relatedProducts: Product[] }> = ({ relatedProducts }) => {
  if (!relatedProducts || relatedProducts.length === 0) {
    return (
      <div className="bg-white w-full min-h-screen flex justify-center items-center p-8">
        <h2 className="text-xl font-bold text-gray-600">محصول مرتبطی یافت نشد.</h2>
      </div>
    );
  }

  return (
    <div className="bg-white w-full flex justify-center items-center p-8">
      <div className="w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">محصولات مرتبط</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg p-4 relative flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                <img
                  src={product.imageUrl || "/placeholder.jpg"}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-medium text-lg text-center">{product.name}</h3>
              <div className="text-gray-700 text-sm mt-2">
                <span className="font-bold">{product.price} تومان</span>
              </div>
              <div className="flex text-yellow-500 text-sm mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < product.stars ? "⭐" : "☆"}</span>
                ))}
              </div>
              <button
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
              >
                مشاهده جزئیات
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomSingle;
