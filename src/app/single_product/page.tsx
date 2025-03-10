import TopSingle from "@/components/single-product/single-first";
import MidleSingle from "@/components/single-product/single-second";
import React, { useState } from "react";
function SingleProduct() {
  return (
    <main className="bg-white flex flex-col justify-center">
      <TopSingle />
      <MidleSingle />
    </main>
  );
};
export default SingleProduct;
