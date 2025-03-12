"use client";
import { teamMembers } from "@/components/constants/const";
import ArrowLeft from "@/components/shared/buttons/arrows/arrowLeft";
import ArrowRight from "@/components/shared/buttons/arrows/arrowRight";

import Image from "next/image";

export default function Team() {
  const scrollLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.parentElement
      ?.querySelector(".scroll-container")
      ?.scrollBy({ left: -280, behavior: "smooth" });
  };

  const scrollRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.parentElement
      ?.querySelector(".scroll-container")
      ?.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <div className="relative px-[100px] mt-[50px]">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="font-semibold text-[36px]">تیم فوق‌العاده ما</h2>{" "}
        <p className="font-normal text-[14px] text-[#666666] text-center w-[600px]">
          پیشرفت و موفقیت با همکاری یک تیم متعهد و حرفه‌ای شکل می‌گیرد. ما با
          تخصص و تلاش بی‌وقفه در کنار شما هستیم تا بهترین خدمات را ارائه دهیم.
        </p>
      </div>
      <div className="relative mt-8 flex justify-center">
        <button
          onClick={scrollLeft}
          className="absolute left-10 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-10"
        >
          <ArrowRight />
        </button>

        <div className="scroll-container flex gap-6 overflow-hidden scroll-smooth w-[850px] p-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col text-center shadow-lg shrink-0 w-[260px] h-[300px] rounded-lg bg-white overflow-hidden"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={260}
                height={180}
                className="w-full"
              />
              <div className="flex flex-col gap-1 p-3">
                <p className="font-semibold text-lg">{member.name}</p>
                <p className="text-sm text-gray-500">{member.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
