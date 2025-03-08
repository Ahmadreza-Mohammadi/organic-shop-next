import { FaStar, FaRegStar } from "react-icons/fa";

function ProductsComponent() {
  const sortFilters = [
    { name: "جدیدترین", id: 1 },
    { name: "قدیمی ترین", id: 2 },
    { name: "ارزان ترین", id: 3 },
    { name: "گران ترین", id: 4 },
  ];

  const products = [
    { name: "سیب", price: 95000, stars: 4, id: 1 },
    { name: "روغن گیاهی", price: 230000, stars: 5, id: 2 },
    { name: "عسل طبیعی", price: 650000, stars: 4, id: 3 },
    { name: "فلفل دلمه", price: 80000, stars: 4, id: 4 },
    { name: "ذرت", price: 75000, stars: 3, id: 5 },
    { name: "آب هویج", price: 90000, stars: 5, id: 6 },
  ];

  const formatPrice = (price: any) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="flex flex-col items-center gap-5">
      {/* search bar */}
      <div className="mt-10 w-full p-4 flex justify-around shadow-md">
        <div className="flex items-center gap-2 shadow">
          <label>مرتب شده:</label>
          <select className="p-1 w-[130px]" name="" id="">
            {sortFilters.map((filter) => (
              <option className="outline-none" key={filter.id} value="">
                {filter.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <span>موارد یافت شده: ۱۲۳</span>
        </div>
      </div>

      {/* products */}
      <div className="w-full p-6 flex justify-center flex-wrap gap-8 bg-green-100">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-1/4 bg-white h-[540px] p-4 flex shadow-2xl rounded-md transition-transform transform hover:scale-105"
          >
            <div className="w-full p-4 flex flex-col justify-between shadow-md">
              <div className="h-full flex justify-center items-center">
                <img
                  className="h-44"
                  src="https://www.svgrepo.com/show/484874/orange-part-2.svg"
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
                    <span className="text-xs">افزودن به</span>
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
    </div>
  );
}

export default ProductsComponent;
