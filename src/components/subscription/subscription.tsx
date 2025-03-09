import { socialMediaArr } from "../constants/const";

function Subscription() {
  return (
    <div className="flex justify-around bg-gray-100 w-full p-10">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl">عضو ارگانیک کلاب شوید</h1>
        <p className="text-green-700 text-xl font-semibold">
          با عضویت در باشگاه ارگانیک شاپ از تخفیف های آغار و پایان هر فصل
          برخوردار شوید.
        </p>
      </div>

      <div className=" w-[600px] flex items-center justify-around">
        <div className="flex p-4 gap-2 w-72 justify-between rounded-l-2xl shadow-lg">
          <div className="w-full ">
            <input
              className="bg-gray-100 outline-none"
              placeholder="ایمیل خود را وارد کنید..."
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="text-green-300 cursor-pointer">عضویت</div>
        </div>
        <div className="flex items-center gap-4">
          {socialMediaArr.map((social) => (
            <img
              className="h-11"
              src={social.img}
              alt={social.name}
              key={social.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subscription;
