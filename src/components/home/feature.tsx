import Image from "next/image";

import shopping from "@/assets/images/feature/shopping.png"
import headphones from "@/assets/images/feature/headphones.png"
import shoppingBag from "@/assets/images/feature/shoppingBag.png"
import packages from "@/assets/images/feature/package.png"


export default function Feature() {
  return (
    <div className="bg-slate-50 rounded-xl shadow-lg mt-10 flex flex-row justify-around m-5 p-5">
<div className='flex flex-row gap-2'>
<Image
src={shopping}
alt="bannargreen"
width={40}
height={40}
/>
<div className='flex flex-col'>
    <h3 className='text-xl'>ارسال رایگان</h3>
    <p className='text-[12px] '>ارسال رایگان برای تمام سفارشات شما</p>
</div>
</div>
<div className='flex flex-row gap-2'>
<Image
src={headphones}
alt="bannargreen"
width={40}
height={40}
/>
<div className='flex flex-col'>
    <h3 className='text-xl'>پشتیبانی مشتری</h3>
    <p className='text-[12px] '> دسترسی فوری به پشتیبانی</p>
</div>
</div>
<div className='flex flex-row gap-2'>
<Image
src={shoppingBag}
alt="bannargreen"
width={40}
height={40}
/>
<div className='flex flex-col'>
    <h3 className='text-xl'>پرداخت 100% ایمن </h3>
    <p className='text-[12px] '>  ما اطمینان حاصل می کنیم که پول شما پس انداز می شود</p>
</div>
</div>
<div className='flex flex-row gap-2'>
<Image
src={packages}
alt="bannargreen"
width={40}
height={40}
/>
<div className='flex flex-col'>
    <h3 className='text-xl'>ضمانت بازگشت وجه</h3>
    <p className='text-[12px] '> 30 روز ضمانت بازگشت وجه</p>
</div>
</div>
    </div>
  )
}

