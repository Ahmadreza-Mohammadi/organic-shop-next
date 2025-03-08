import FilterBar from "../filter-bar/filterBar";
import ProductsCard from "../products-card/productsCard";

function ProductsComponent() {
  return (
    <div className="flex flex-col items-center gap-5">
      <FilterBar />
      <ProductsCard />
    </div>
  );
}

export default ProductsComponent;
