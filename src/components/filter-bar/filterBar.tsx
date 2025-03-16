"use client";

import { ACCESS_TOKEN, API_KEY, BASE_URL } from "@/api/url";
import { categoriesFilters } from "@/components/constants/const";
import { digitsEnToFa } from "@/utils/helper";
import axios from "axios";

function FilterBar({ setProducts }:any) {
  async function filterCategoriesHandler(category: string) {
    const res = await axios.get(
      `${BASE_URL}/api/records/products/?searchKey=category&searchValue=${category}`,
      {
        headers: { api_key: API_KEY, Authorization: `Bearer ${ACCESS_TOKEN}` },
      }
    );
    setProducts(res.data.records);
  }

  return (
    <div className="w-full p-6 flex justify-around shadow-md">
      <div className="flex items-center gap-2 shadow">
        <label>مرتب شده:</label>
        <select
          onChange={(e) => filterCategoriesHandler(e.target.value)}
          className="p-1 w-[130px]"
          name=""
          id=""
        >
          <option value="" disabled selected>
            انتخاب کنید
          </option>
          {categoriesFilters.map((filter) => (
            <option
              className="outline-none"
              key={filter.id}
              value={filter.name}
            >
              {filter.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center">
        <span>موارد یافت شده: {digitsEnToFa("123")}</span>
      </div>
    </div>
  );
}

export default FilterBar;
