import { sortFilters } from "@/components/constants/const";
import { digitsEnToFa } from "@/utils/helper";

function FilterBar() {
  return (
    <div className=" w-full p-6 flex justify-around shadow-md">
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
        <span>موارد یافت شده: {digitsEnToFa("123")}</span>
      </div>
    </div>
  );
}

export default FilterBar;
