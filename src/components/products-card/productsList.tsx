"use client";

import { ACCESS_TOKEN, API_KEY, BASE_URL } from "@/api/url";
import { add, remove } from "@/redux/reducers/productReducer";
import { formatPrice } from "@/utils/helper";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

function ProductsList() {
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.product);
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState<any>([]);
  const productsPerPage = 9;
  const offset = currentPage * productsPerPage;

  const currentProducts = products.slice(offset, offset + productsPerPage);
  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageClick = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    async function getProductsList() {
      const response = await axios.get(`${BASE_URL}/api/records/products`, {
        headers: { api_key: API_KEY, Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      const result = await response.data;
      const productsList = await result.records;
      setProducts(productsList);
    }
    getProductsList();
  }, [ProductsList]);

  async function filterCategoriesHandler(category) {
    const res = await axios.get(
      `${BASE_URL}/api/records/products/?searchKey=category&searchValue=${category}`,
      {
        headers: { api_key: API_KEY, Authorization: `Bearer ${ACCESS_TOKEN}` },
      }
    );
    console.log(res);
  }

  return (
    <div className="w-full p-6 flex flex-col items-center">
      <div className="w-full flex justify-center flex-wrap gap-8">
        {currentProducts.length === 0 ? (
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
        ) : (
          currentProducts.map((product: any) => {
            const foundedProduct = productData.find(
              (item: any) => item.id === product.id
            );
            return (
              <div
                key={product.id}
                className="w-1/4 border-2 border-green-300 bg-white h-[540px] p-4 flex shadow-2xl cursor-pointer rounded-md transition-transform transform hover:scale-105"
              >
                <div className="w-full p-4 flex flex-col justify-between shadow-md">
                  <div className="h-full flex justify-center items-center">
                    <img className="h-44" src={product.img} alt="" />
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
                      {foundedProduct ? (
                        <div className="flex gap-3 border border-gray-400 p-1 rounded-xl">
                          <button onClick={() => dispatch(add(product))}>
                            +
                          </button>
                          <p>{foundedProduct.count}</p>
                          <button onClick={() => dispatch(remove(product))}>
                            -
                          </button>
                        </div>
                      ) : (
                        <div className="border border-green-700 p-1 flex items-center gap-1 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
                          <button
                            onClick={() => dispatch(add(product))}
                            className="text-xs"
                          >
                            افزودن به سبد
                          </button>
                          <img
                            className="h-6"
                            src="https://www.svgrepo.com/show/313120/cart.svg"
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
        {}
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
