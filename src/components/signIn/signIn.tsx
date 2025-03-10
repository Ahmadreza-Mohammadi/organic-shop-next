import GreenInput from "../shared/inputs/greenInput";

export default function SignIn() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[520px] h-[371px] shadow-lg px-[24px]">
          <h1 className="font-semibold text-[32px] text-center pt-5 pb-4">
            ثبت نام
          </h1>
          <div className="flex flex-col gap-3">
            <GreenInput type="email" placeholder="ایمیل" />
            <GreenInput type="password" placeholder="رمز عبور" />
            <GreenInput type="password" placeholder=" تکرار رمز عبور" />
          </div>

          <div className="flex gap-2 items-center my-5">
            <input
              type="checkbox"
              id="rememberMe"
              className="form-checkbox text-green-500 focus:ring-green-500"
            />
            <label htmlFor="rememberMe" className="text-sm text-[#666666]">
              تمام قوانین تایید می کنم
            </label>
          </div>

          <button className="w-[472px] h-[45px] rounded-[43px] bg-[#00B207] text-white font-semibold text-base mb-5">
            ایجاد حساب
          </button>
          <div className="flex gap-2 justify-center items-center">
            <p className="text-[#666666] text-sm">قبلا ثبت نام کردید؟</p>
            <a> ورود</a>
          </div>
        </div>
      </div>
    </div>
  );
}
