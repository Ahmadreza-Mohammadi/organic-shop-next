import Subscription from "../subscription/subscription";

function Footer() {
  return (
    <>
      <Subscription />
      <div className="bg-[#1A1A1A] text-white w-full p-8 flex flex-wrap justify-around">
        <div className="w-full md:w-1/5 flex flex-col gap-8 mb-5">
          <h1 className="font-bold text-2xl">ارگانیک شاپ</h1>
          <p className="text-lg">
            ما به شما محصولات ارگانیک با بهترین کیفیت و خدمات عرضه می‌کنیم که با
            دقت و توجه انتخاب شده‌اند. تیم ما متعهد به ارائه مواد غذایی سالم و
            طبیعی است.
          </p>
          <span className="border-b-2 border-green-600 w-28">۸۸۷۷۸۸۹۸ - ۰۲۱</span>
        </div>
        <div className="w-full md:w-1/5 flex flex-col gap-20 mb-5">
          <h2 className="font-bold text-xl">لینک‌های مفید</h2>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-lg hover:text-green-500">درباره ما</a></li>
            <li><a href="#" className="text-lg hover:text-green-500">تماس با ما</a></li>
            <li><a href="#" className="text-lg hover:text-green-500">حریم خصوصی</a></li>
            <li><a href="#" className="text-lg hover:text-green-500">شرایط استفاده</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 flex flex-col gap-20 mb-5">
          <h2 className="font-bold text-xl">دسته‌بندی‌ها</h2>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-lg hover:text-green-500">محصولات تازه</a></li>
            <li><a href="#" className="text-lg hover:text-green-500">محصولات خشک</a></li>
            <li><a href="#" className="text-lg hover:text-green-500">مواد پروتئینی</a></li>
            <li><a href="#" className="text-lg hover:text-green-500">نوشیدنی‌ها</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 flex flex-col gap-20 mb-5">
          <h2 className="font-bold text-xl">اخبار و رویدادها</h2>
          <ul>
            <li><a href="#" className="text-lg hover:text-green-500">آخرین اخبار</a></li>
            <li><a href="#" className="text-lg hover:text-green-500">رویدادهای آینده</a></li>
            <li><a href="#" className="text-lg hover:text-green-500">وبلاگ</a></li>
            <li><a href="#" className="text-lg hover:text-green-500">گزارشات سالانه</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-[#1A1A1A] w-full text-white text-center py-3 font-bold ">
        <p className="text-lg">© ۱۴۰۳ ارگانیک شاپ. تمام حقوق محفوظ است.</p>
      </div>
    </>
  );
}

export default Footer;