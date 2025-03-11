import React, { useState } from "react";
import Image from "next/image";

const MidleSingle = () => {
    const [activeTab, setActiveTab] = useState("توضیحات");

    const renderContent = () => {
        switch (activeTab) {
            case "توضیحات":
                return (
                    <ul className="list-disc list-inside text-gray-700 mb-4 text-center">
                        <li>۱۰۰ گرم از برگ‌های تازه ارائه می‌دهد.</li>
                        <li>علی‌القام اَک اِست ات آگوئه ولپوت المنتوم.</li>
                        <li>کوئسکه نک اینم اِگت ساپیئن مولِستیه.</li>
                        <li>پرُین کنوالییس اودیو ولپوت فینیبوس پوسوئر.</li>
                    </ul>
                );
            case "اطلاعات اضافی":
                return (
                    <div className="text-center text-gray-700">
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. کمودی اند انیم دلورس ایمپدیت اِا سکویی جوری اِلوم تمپوس هاروم! اکسپدیتا اِسه یوستو اِرور نمو سوسِپیت اُمنی‌س، توتام دیگنی‌سیُموس کم ماکسیم؟
                        </p>
                    </div>
                );
            case "بازخورد مشتری":
                return (
                    <div className="text-center text-gray-700">
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. دیستینکتیو ماکسیم کوئه کویا هاروم کنسکوئِنتور انده، اَتوک فوگیت مولیتیا هیک نولا، ویتای مودیاکوس. آکوساموس ایپسوم اُدیت پرفریندیس دلور ول ناتوس اِست؟</p>
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
                        className={`${activeTab === "توضیحات"
                                ? "text-green-500 border-b-2 border-green-500"
                                : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("توضیحات")}
                    >
                        توضیحات
                    </a>
                    <a
                        href="#"
                        className={`${activeTab === "اطلاعات اضافی"
                                ? "text-green-500 border-b-2 border-green-500"
                                : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("اطلاعات اضافی")}
                    >
                        اطلاعات اضافی
                    </a>
                    <a
                        href="#"
                        className={`${activeTab === "بازخورد مشتری"
                                ? "text-green-500 border-b-2 border-green-500"
                                : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("بازخورد مشتری")}
                    >
                        بازخورد مشتری
                    </a>
                </nav>
            </div>

            <main className="flex flex-grow items-center justify-center w-11/12 mt-8">
                <div className="flex-1">
                    {renderContent()}
                    <div className="mt-10 flex justify-around">
                        <div className="text-center mb-4">
                            <p className="text-green-500 text-2xl">٪۶۴ تخفیف</p>
                            <p className="text-gray-700">٪۶۴ از هزینه‌های خود را با ما ذخیره کنید</p>
                        </div>
                        <div className="text-center">
                            <p className="text-green-500 text-2xl">۱۰۰٪ ارگانیک</p>
                            <p className="text-gray-700">سبزیجات کاملاً ارگانیک</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div className="w-80 h-80 overflow-hidden border rounded-lg shadow-md">
                        <Image
                            src="https://tse2.mm.bing.net/th?id=OIP.qAVdXoirudGPl_lbhwSp1gHaE8&pid=Api&P=0&h=220"
                            alt="نمونه تصویر"
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
