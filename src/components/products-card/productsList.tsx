"use client";

import { products } from "@/components/constants/const";
import { formatPrice } from "@/utils/helper";
import axios from "axios";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import ReactPaginate from "react-paginate";

function ProductsList() {
  async function addProductsToApi() {
    axios.post(
      "https://67c2066e61d8935867e52eab.mockapi.io/products",
      JSON.stringify(products),
      { headers: { "content-type": "application/json" } }
    );
  }
  // addProductsToApi();

  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 9;
  const offset = currentPage * productsPerPage;

  const currentProducts = products.slice(offset, offset + productsPerPage);
  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageClick = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  return (
    <div className="w-full p-6 flex flex-col items-center">
      <div className="w-full flex justify-center flex-wrap gap-8">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="w-1/4 border-2 border-green-300 bg-white h-[540px] p-4 flex shadow-2xl cursor-pointer rounded-md transition-transform transform hover:scale-105"
          >
            <div className="w-full p-4 flex flex-col justify-between shadow-md">
              <div className="h-full flex justify-center items-center">
                <img
                  className="h-60"
                  src={product.img || "https://www.svgrepo.com/show/484874/orange-part-2.svg"}
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4">
                  <span className="text-green-500 text-2xl">
                    {product.name}
                  </span>
                  <span className="font-bold">
                    {formatPrice(product.price)} تومان
                  </span>
                  <span className="flex">
                    {[...Array(5)].map((_, i) =>
                      i < product.stars ? (
                        <FaStar key={i} className="text-yellow-500" />
                      ) : (
                        <FaRegStar key={i} className="text-gray-300" />
                      )
                    )}
                  </span>
                </div>
                <div className="h-full flex items-end">
                  <div className="border border-green-700 p-1 flex items-center gap-1 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
                    <span className="text-xs">افزودن به سبد</span>
                    <img
                      className="h-6"
                      src="https://www.svgrepo.com/show/313120/cart.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"صفحه قبل"}
        nextLabel={"صفحه بعد"}
        breakLabel={"تا"}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className="flex gap-1 bg-green-600 mt-6 p-1 rounded-md font-bold text-white"
      />
    </div>
  );
}

export default ProductsList;
