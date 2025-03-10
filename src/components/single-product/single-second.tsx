import React, { useState } from "react";
import Image from "next/image";

const MidleSingle = () => {
    const [activeTab, setActiveTab] = useState("Descriptions");

    const renderContent = () => {
        switch (activeTab) {
            case "Descriptions":
                return (
                    <ul className="list-disc list-inside text-gray-700 mb-4 text-center">
                        <li>100 g of fresh leaves provides.</li>
                        <li>Aliquam ac est at augue volutpat elementum.</li>
                        <li>Quisque nec enim eget sapien molestie.</li>
                        <li>Proin convallis odio volutpat finibus posuere.</li>
                    </ul>
                );
            case "Additional Information":
                return (
                    <div className="text-center text-gray-700">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde enim dolores impedit ea sequi iure illum temporibus harum! Expedita esse iusto error nemo suscipit omnis, totam dignissimos cum maxime?
                        </p>
                    </div>
                );
            case "Customer Feedback":
                return (
                    <div className="text-center text-gray-700">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime quae quia harum consequuntur unde, atque fugit mollitia hic nulla, vitae modi. Accusamus ipsum odit perferendis dolor vel natus est?</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
            <div className="bg-white text-black py-4 px-8 shadow-lg w-11/12">
                <nav className="flex justify-around">
                    <a
                        href="#"
                        className={`${activeTab === "Descriptions"
                                ? "text-green-500 border-b-2 border-green-500"
                                : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("Descriptions")}
                    >
                        Descriptions
                    </a>
                    <a
                        href="#"
                        className={`${activeTab === "Additional Information"
                                ? "text-green-500 border-b-2 border-green-500"
                                : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("Additional Information")}
                    >
                        Additional Information
                    </a>
                    <a
                        href="#"
                        className={`${activeTab === "Customer Feedback"
                                ? "text-green-500 border-b-2 border-green-500"
                                : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("Customer Feedback")}
                    >
                        Customer Feedback
                    </a>
                </nav>
            </div>

            <main className="flex flex-grow items-center justify-center w-11/12 mt-8">
                <div className="flex-1">
                    {renderContent()}
                    <div className="mt-10 flex justify-around">
                        <div className="text-center mb-4">
                            <p className="text-green-500 text-2xl">64% Discount</p>
                            <p className="text-gray-700">Save your 64% money with us</p>
                        </div>
                        <div className="text-center">
                            <p className="text-green-500 text-2xl">100% Organic</p>
                            <p className="text-gray-700">100% Organic Vegetables</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div className="w-80 h-80 overflow-hidden border rounded-lg shadow-md">
                        <Image
                            src="https://tse2.mm.bing.net/th?id=OIP.qAVdXoirudGPl_lbhwSp1gHaE8&pid=Api&P=0&h=220"
                            alt="Sample Image"
                            width={320}
                            height={240}
                            layout="responsive"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MidleSingle;
