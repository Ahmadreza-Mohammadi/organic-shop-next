"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, API_KEY, ACCESS_TOKEN } from "@/api/url";
import { useRouter } from "next/navigation";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path);
  };
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`${BASE_URL}/api/records/products`, {
          headers: {
            api_key: API_KEY,
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        });
        setProducts(response.data.records);
      } catch (error) {
        console.error("خطا در دریافت محصولات:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="m-6 mt-10">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold">محصولات محبوب</h2>
        <button className="text-[#00B207]" onClick={() => handleNavigation("/products")}>مشاهده همه</button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <div className="pl">
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__text text-black font-bold text-2xl">
              صبر کنید...
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-5 mt-10 gap-5">
          {products.slice(0, 10).map((product: any) => (
            <div
              key={product.id}
              className="flex flex-col justify-center items-center border-2 border-gray-300 w-[230px] h-[280px] rounded-lg  
                     hover:border-2 hover:border-[#00B207] hover:shadow-lg hover:scale-105 hover:font-bold 
                     transition-all duration-300 ease-in-out"
            >
              <img
                className="h-[180px] w-[150px]"
                src={product.img}
                alt={product.name}
              />
              <h3 className="text-center">{product.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;



