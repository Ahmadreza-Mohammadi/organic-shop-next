"use client";

import React, { useState } from "react";

interface Product {
  description?: string;
  additionalInfo?: string;
  customerFeedback?: string;
}

const MidleSingle: React.FC<{ product: Product }> = ({ product }) => {
  const [activeTab, setActiveTab] = useState("توضیحات");

  const renderContent = () => {
    switch (activeTab) {
      case "توضیحات":
        return (
          <p className="text-gray-700">
            {product.description || "اطلاعاتی در این بخش وجود ندارد."}
          </p>
        );
      case "اطلاعات اضافی":
        return (
          <p className="text-gray-700">
            {product.additionalInfo || "اطلاعات اضافی موجود نیست."}
          </p>
        );
      case "بازخورد مشتری":
        return (
          <p className="text-gray-700">
            {product.customerFeedback || "هیچ بازخوردی موجود نیست."}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white w-full min-h-screen flex justify-center items-center p-8">
      <div className="w-full bg-white shadow-md rounded-lg p-8" style={{ height: "90vh" }}>
        <div className="h-full flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col">
            <div className="text-center">
              <nav className="flex justify-around mb-4">
                <button
                  className={`${
                    activeTab === "توضیحات"
                      ? "text-green-500 border-b-2 border-green-500"
                      : "text-gray-500"
                  } text-lg font-medium`}
                  onClick={() => setActiveTab("توضیحات")}
                >
                  توضیحات
                </button>
                <button
                  className={`${
                    activeTab === "اطلاعات اضافی"
                      ? "text-green-500 border-b-2 border-green-500"
                      : "text-gray-500"
                  } text-lg font-medium`}
                  onClick={() => setActiveTab("اطلاعات اضافی")}
                >
                  اطلاعات اضافی
                </button>
                <button
                  className={`${
                    activeTab === "بازخورد مشتری"
                      ? "text-green-500 border-b-2 border-green-500"
                      : "text-gray-500"
                  } text-lg font-medium`}
                  onClick={() => setActiveTab("بازخورد مشتری")}
                >
                  بازخورد مشتری
                </button>
              </nav>
              {renderContent()}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-full overflow-hidden border rounded-lg shadow-md">
              <img
                src="https://www.svgrepo.com/show/484874/orange-part-2.svg"
                alt="Product Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidleSingle;
