import aboutimage1 from "@/assets/images/about/about1.png";
import aboutimage2 from "@/assets/images/about/about2.png";
import aboutimage3 from "@/assets/images/about/about3.png";
import backgroundImage from "@/assets/images/about/aboutBg2.png";
import arrowIcone from "@/assets/svgs/arrow.png";
import boxIcone from "@/assets/svgs/box.png";
import checkIcone from "@/assets/svgs/Check.png";
import leaficone from "@/assets/svgs/leaf.png";
import paymentIcone from "@/assets/svgs/payment.png";
import shippingIcone from "@/assets/svgs/shipping.png";
import starIcone from "@/assets/svgs/star.png";
import supportIcone from "@/assets/svgs/support.png";

import Image from "next/image";

export default function AboutCo() {
  return (
    <div>
      <div className="flex gap-[50px] py-[80px] px-[300px] ">
        <Image
          src={aboutimage1}
          alt="about"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-[32px]">
          <h2 className="font-semibold text-[40px]">
            فروشگاه ۱۰۰% معتبر
            <br /> محصولات ارگانیک
          </h2>
          <p className="font-normal text-[18px] text-[#666666]">
            مرکز عرضه محصولات ارگانیک با بهترین کیفیت و خدمات. ما به شما محصولات
            ارگانیک را ارائه می‌دهیم که با دقت و توجه انتخاب شده‌اند. تیم ما
            متعهد به ارائه مواد غذایی سالم و طبیعی است. شما می‌توانید با اعتماد
            کامل از محصولات ما استفاده کنید و از تجربه خریدی خوشایند بهره‌مند
            شوید.
          </p>
        </div>
      </div>
      <div>
        <div className="flex pr-[300px] ">
          <div className="flex flex-col gap-[32px]">
            <h2 className="font-semibold text-[40px]">
              فروشگاه ۱۰۰% معتبر
              <br /> محصولات ارگانیک
            </h2>
            <p className="font-normal text-[18px] text-[#666666]">
              ما به شما محصولات ارگانیک با بهترین کیفیت و خدمات عرضه می‌کنیم که
              با دقت و توجه انتخاب شده‌اند. تیم ما متعهد به ارائه مواد غذایی
              سالم و طبیعی است. شما می‌توانید با اعتماد کامل از محصولات ما
              استفاده کنید و از تجربه خریدی خوشایند بهره‌مند شوید.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-4 items-center">
                <Image src={supportIcone} alt="about" width={60} height={200} />
                <div>
                  <p className="font-medium text-[18px]">پشتیبانی عالی ۲۴/۷</p>
                  <p className="font-normal text-[14px] text-[#808080]">
                    دسترسی آنی به تماس
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Image src={leaficone} alt="about" width={60} height={200} />
                <div>
                  <p className="font-medium text-[18px]">۱۰۰% غذای ارگانیک</p>
                  <p className="font-normal text-[14px] text-[#808080]">
                    100% غذای سالم و تازه
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Image src={paymentIcone} alt="about" width={60} height={200} />
                <div>
                  <p className="font-medium text-[18px]">بازخورد مشتریان </p>
                  <p className="font-normal text-[14px] text-[#808080]">
                    مشتریان راضی ما
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Image src={starIcone} alt="about" width={60} height={200} />
                <div>
                  <p className="font-medium text-[18px]">پرداخت ۱۰۰% امن </p>
                  <p className="font-normal text-[14px] text-[#808080]">
                    اطمینان پول ایمن
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Image src={boxIcone} alt="about" width={60} height={200} />
                <div>
                  <p className="font-medium text-[18px]">۱۰۰% غذای ارگانیک</p>
                  <p className="font-normal text-[14px] text-[#808080]">
                    ۱۰۰% غذای سالم و تازه
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Image
                  src={shippingIcone}
                  alt="about"
                  width={60}
                  height={200}
                />
                <div>
                  <p className="font-medium text-[18px]">حمل‌ونقل رایگان</p>
                  <p className="font-normal text-[14px] text-[#808080]">
                    حمل‌ونقل رایگان با تخفیف
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="inset-0 z-0"
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: -1,
            }}
          >
            <Image
              src={aboutimage2}
              alt="about"
              width={2000}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[50px] px-[300px]  py-[80px] ">
        <Image
          src={aboutimage3}
          alt="about"
          width={500}
          height={300}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-[32px]">
          <h2 className="font-semibold text-[40px]">
            ما تحویل می‌دهیم،
            <br /> شما لذت می‌برید!
          </h2>
          <p className="font-normal text-[18px] text-[#666666]">
            اتصال راحت به شما این امکان را می‌دهد که تجربه خریدی بی‌دغدغه داشته
            باشید. تمامی مراحل جای‌گذاری محصولات با دقت انجام می‌شود و فرآیند
            تحویل به‌صورت ساده و سریع پیش می رود.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Image
                src={checkIcone}
                alt="about"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="font-normal text-[14px] text-[#666666]">
                در دل سختی‌ها پیش می‌رویم.
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src={checkIcone}
                alt="about"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="font-normal text-[14px] text-[#666666]">
                به سمت آینده پیش می‌رویم، با زمان و نیازهای شما همگام می‌شویم.
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src={checkIcone}
                alt="about"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="font-normal text-[14px] text-[#666666]">
                ما در تلاشیم تا بهترین و نوآورانه‌ترین راه‌حل‌ها را برای شما
                ارائه دهیم.
              </p>
            </div>
          </div>
          <button className="w-[199px] h-[51px] rounded-[43px] bg-[#00B207] text-white font-semibold text-base flex items-center justify-center gap-3">
            <Image src={arrowIcone} alt="about" width={15} height={15} />
            خرید کنید
          </button>
        </div>
      </div>
    </div>
  );
}
