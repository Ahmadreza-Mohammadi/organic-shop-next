import Image from "next/image";

import discountBannar from "@/assets/images/baner/Discount Bannar.png";

export default function Bannar3() {
  return (
    <div className="relative w-full flex justify-center items-center  ">
      <Image
        src={discountBannar}
        alt="bannarBag"
        width={423}
        height={288}
        className="rounded-lg object-cover w-[1300px] "
      />

      <p className="absolute right-44 top-1/4  flex flex-col  gap-5 items-center justify-center text-white text-xl font-bold ">
        فروش تا <span className="bg-orange-500 p-2 rounded-lg">30%تخفیف</span>
        <span className="text-sm">ارسال رایگان برای تمام سفارشات شما</span>
      </p>
    </div>
  );
}
