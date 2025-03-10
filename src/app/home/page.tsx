import Banner from "@/components/home/banner";
import Categories from "@/components/home/categories";
import Feature from "@/components/home/feature";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";
import Products from "@/components/home/products";

function Home() {
  return (
    <>
         <Navbar />
      <Banner />
      <Feature />
      <Categories/>
      <Products/>
           <Footer />
    </>
  );
}

export default Home;
