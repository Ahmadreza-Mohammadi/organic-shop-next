import Image from "next/image";

import shopping from "@/assets/images/feature/shopping.png"

export default function Feature() {
  return (
    <div className="bg-slate-50 rounded-xl shadow-lg mt-10 flex flex-row justify-around m-5 p-5">
<div className='flex flex-row gap-2'>
<Image
src={shopping}
alt="bannargreen"
width={40}
height={27}
/>
<div className='flex flex-col'>
    <h3 className='text-xl'>ارسال رایگان</h3>
    <p className='text-[12px] '>ارسال رایگان برای تمام سفارشات شما</p>
</div>
</div>
<div className='flex flex-row gap-2'>
<Image
src={shopping}
alt="bannargreen"
width={40}
height={27}
/>
<div className='flex flex-col'>
    <h3 className='text-xl'>پشتیبانی مشتری</h3>
    <p className='text-[12px] '> دسترسی فوری به پشتیبانی</p>
</div>
</div>
<div className='flex flex-row gap-2'>
<Image
src={shopping}
alt="bannargreen"
width={40}
height={27}
/>
<div className='flex flex-col'>
    <h3 className='text-xl'>ارسال رایگان</h3>
    <p className='text-[12px] '>ارسال رایگان برای تمام سفارشات شما</p>
</div>
</div>
<div className='flex flex-row gap-2'>
<Image
src={shopping}
alt="bannargreen"
width={40}
height={27}
/>
<div className='flex flex-col'>
    <h3 className='text-xl'>ارسال رایگان</h3>
    <p className='text-[12px] '>ارسال رایگان برای تمام سفارشات شما</p>
</div>
</div>
    </div>
  )
}

