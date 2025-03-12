"use client"

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import TopSingle from "@/components/single-product/single-first";
import MidleSingle from "@/components/single-product/single-second";
import BottomSingle from "@/components/single-product/single-third";
function SingleProduct() {
  return (
    <main className="bg-white flex flex-col justify-center">
      <Navbar />
      <TopSingle />
      <MidleSingle />
      <BottomSingle/>
    </main>
  );
};
export default SingleProduct;
