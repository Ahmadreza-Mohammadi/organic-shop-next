import Banner from "@/components/home/banner";
import Categories from "@/components/home/categories";
import Feature from "@/components/home/feature";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";
import Products from "@/components/home/products";
import Bannar2 from "@/components/home/bannar2";
import Bannar3 from "@/components/home/bannar3";

function Home() {
  return (
    <>
         <Navbar />
      <Banner />
      <Feature />
      <Categories/>
      <Products/>
      <Bannar2/>
      <Bannar3/>
           <Footer />
    </>
  );
}

export default Home;
