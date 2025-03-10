import Banner from "@/components/home/banner";
import Feature from "@/components/home/feature";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

function Home() {
  return (
    <>
         <Navbar />
      <Banner />
      <Feature />
           <Footer />
    </>
  );
}

export default Home;
