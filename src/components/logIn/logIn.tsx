"use client";
import { setInLocalStorage } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { userLogin } from "../services/api/login.api";
import GreenInput from "../shared/inputs/greenInput";
export default function LogIn() {
  const [error, setError] = useState("");
  const router = useRouter();
  const loginHandler = async (e: any) => {
    e.preventDefault();
    const { email, password } = e.target;
    setError("");

    try {
      const res = await userLogin({
        email: email.value,
        password: password.value,
      });
      setInLocalStorage("accessToken", res.accessToken);
      router.replace("/");
    } catch (err) {
      setError("Login failed.");
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form onSubmit={loginHandler}>
        <div className="w-[520px] h-[371px] shadow-lg px-[24px]">
          <h1 className="font-semibold text-[32px] text-center pt-5 pb-4">
            ورود
          </h1>
          <div className="flex flex-col gap-3">
            <GreenInput type="email" name="email" placeholder="ایمیل" />
            <GreenInput
              type="password"
              name="password"
              placeholder="رمز عبور"
            />
          </div>
          <div className="flex justify-between my-5">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="form-checkbox text-green-500 focus:ring-green-500"
              />
              <label htmlFor="rememberMe" className="text-sm text-[#666666]">
                به خاطر بسپار
              </label>
            </div>
            <p className="text-sm text-[#666666]">
              رمز عبور خود را فراموش کردید؟
            </p>
          </div>
          <button
            type="submit"
            className="w-[472px] h-[45px] rounded-[43px] bg-[#00B207] text-white font-semibold text-base mb-5"
          >
            ورود
          </button>
          <div className="flex gap-2 justify-center items-center">
            <p className="text-[#666666] text-sm">هنوز حسابی ندارید؟َ</p>
            <a>ثبت نام</a>
          </div>
        </div>
      </form>
    </div>
  );
}
