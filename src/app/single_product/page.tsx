import TopSingle from "@/components/single-product/single-first";
import MidleSingle from "@/components/single-product/single-second";
import BottomSingle from "@/components/single-product/single-third";
import React, { useState } from "react";
function SingleProduct() {
  return (
    <main className="bg-white flex flex-col justify-center">
      <TopSingle />
      <MidleSingle />
      <BottomSingle/>
    </main>
  );
};
export default SingleProduct;
