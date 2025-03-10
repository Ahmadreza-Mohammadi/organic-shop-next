"use client";
import rating from "@/assets/svgs/Rating.png";
import vector from "@/assets/svgs/Vector (1).png";
import ArrowLeft from "@/components/shared/buttons/arrows/arrowLeft";
import ArrowRight from "@/components/shared/buttons/arrows/arrowRight";
import { userReviews } from "@/constants/const";
import Image from "next/image";
import { useRef } from "react";

export default function CustomerReviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  return (
    <div className="relative px-[300px] mt-[130px]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-semibold text-[48px]">نظرات کاربران</h2>
        <div className="flex gap-8">
          <button onClick={scrollRight}>
            <ArrowRight />
          </button>
          <button onClick={scrollLeft}>
            <ArrowLeft />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="scroll-container flex gap-6 overflow-x-hidden snap-x snap-mandatory"
      >
        {userReviews.map((review, index) => (
          <div
            key={index}
            className="snap-center flex flex-col p-5 w-[424px] h-[254px] shadow-lg shrink-0 bg-white rounded-lg mb-8"
          >
            <div className="flex flex-col gap-8">
              <Image src={vector} alt="vector" width={32} height={26} />
              <p className="font-normal text-sm text-[#4D4D4D]">
                {review.review}
              </p>
            </div>
            <div className="flex justify-between mt-8 items-center">
              <div className="flex items-center gap-2">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />

                <div className="flex flex-col">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
              <div className="pl-5">
                <Image
                  src={rating}
                  alt="rating"
                  width={80}
                  height={80}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
