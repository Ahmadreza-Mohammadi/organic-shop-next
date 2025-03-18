"use client";

import { useSearchParams } from "next/navigation";
import axios from "axios";
import { ACCESS_TOKEN, API_KEY, BASE_URL } from "@/api/url";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import TopSingle from "@/components/single-product/single-first";
import MidleSingle from "@/components/single-product/single-second";
import BottomSingle from "@/components/single-product/single-third";

interface Product {
  id: number;
  name: string;
  price: number;
  stars: number;
  category: string;
  description?: string;
}

const SingleProduct = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await axios.get(`${BASE_URL}/api/records/products`, {
          headers: { api_key: API_KEY, Authorization: `Bearer ${ACCESS_TOKEN}` },
        });
        const fetchedProduct = response.data.records.find((p: Product) => p.id.toString() === productId);
        setProduct(fetchedProduct);
        setRelatedProducts(response.data.records.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    if (productId) fetchAllProducts();
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>محصول مورد نظر یافت نشد!</h1>
      </div>
    );
  }

  return (
    <main className="bg-white flex flex-col justify-center">
      <Navbar />
      <TopSingle product={product} />
      <MidleSingle product={product} />
      <BottomSingle relatedProducts={relatedProducts} />
      <Footer />
    </main>
  );
};

export default SingleProduct;
