export default function ContactForm() {
  return (
    <div className="shadow-xl rounded-lg w-[984px] h-[507px] p-[50px]">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-2xl">سلام</p>
        <p className="font-normal text-sm text-[#808080]">
          سوالی درباره محصولات ارگانیک ما دارید یا به مشاوره برای خرید نیاز
          دارید؟ با ما در تماس باشید، خوشحال می‌شویم راهنمایی‌تان کنیم.
        </p>
      </div>

      <div className="flex flex-col gap-4 my-5">
        <div className="flex gap-5">
          <input
            type="email"
            placeholder="ایمیل "
            className="h-[49px] rounded-[6px] border border-gray-300 focus:border-green-500 focus:outline-none pr-3"
          />
          <input
            type=""
            placeholder="موضوع"
            className="h-[49px] rounded-[6px] border border-gray-300 focus:border-green-500 focus:outline-none pr-3"
          />
        </div>

        <input
          type="text"
          placeholder="نظرات خود را بنویسید"
          className="h-[100px] rounded-[6px] border border-gray-300 focus:border-green-500 focus:outline-none pr-3"
        />
      </div>
      <button className="w-[199px] h-[51px] rounded-[43px] bg-[#00B207] text-white font-semibold text-base">
        ارسال پیام
      </button>
    </div>
  );
}
