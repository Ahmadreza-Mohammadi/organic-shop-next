import email from "@/assets/images/email.png";
import location from "@/assets/images/location.png";
import phone from "@/assets/images/phone.png";
import BorderGray from "@/components/shared/border/borderGray";
import { digitsEnToFa } from "@/utils/helper";
import Image from "next/image";

export default function AsideContact() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg shadow-xl w-[312px] h-[507px]">
      <div className="p-[24px] flex flex-col items-center gap-4">
        <Image
          src={location}
          alt="Location"
          className="w-[31.88px] h-[41.44px] mx-auto"
        />
        <p className="text-center">استان گیلان، رشت رشتیان چهار راه وحدت</p>
      </div>
      <BorderGray />
      <div className="p-[24px] flex flex-col items-center gap-4">
        <Image
          src={email}
          alt="email"
          className="w-[51px] h-[39.1px] mx-auto"
        />
        <div className="text-center">
          <p>organic.co@gmail.com</p>
          <p>organic.co.help@gmail.com</p>
        </div>
      </div>
      <BorderGray />
      <div className="p-[24px] flex flex-col items-center gap-4">
        <Image
          src={phone}
          alt="phone"
          className="w-[39.85px] h-[39.84px] mx-auto"
        />
        <div className="text-center">
          <p> {digitsEnToFa("3350-5288 (013)")}</p>
          <p>{digitsEnToFa("3350-6688 (013)")} </p>
        </div>
      </div>
    </div>
  );
}
