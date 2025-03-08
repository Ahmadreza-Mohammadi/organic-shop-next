function ProductsComponent() {
  const sortFilters = [
    { name: "جدیدترین", id: 1 },
    { name: "قدیمی ترین", id: 2 },
    { name: "ارزان ترین", id: 3 },
    { name: "گران ترین", id: 4 },
  ];
  return (
    <div className="flex justify-center">
      <div className="bg-red-400 mt-10 w-[1280px] p-4 flex justify-between">
        <div className="flex gap-2">
          <label>مرتب شده:</label>
          <select className="p-1 w-[130px]" name="" id="">
            {sortFilters.map((filter) => (
              <option key={filter.id} value="">
                {filter.name}
              </option>
            ))}
          </select>
        </div>
        <div>
            <span>موارد یافت شده:  ۱۲۳</span>
        </div>
      </div>
    </div>
  );
}

export default ProductsComponent;
