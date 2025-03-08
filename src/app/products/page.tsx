import FilterBar from "@/components/filter-bar/filterBar";
import ProductsList from "@/components/products-card/productsCard";


function ProductsComponent() {
  return (
    <div className="flex flex-col items-center gap-5">
      <FilterBar />
      <ProductsList />
    </div>
  );
}

export default ProductsComponent;
