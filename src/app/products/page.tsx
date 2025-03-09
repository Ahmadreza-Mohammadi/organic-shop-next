import FilterBar from "@/components/filter-bar/filterBar";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import ProductsList from "@/components/products-card/productsList";
import Subscription from "@/components/subscription/subscription";

function ProductsComponent() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <FilterBar />
      <ProductsList />
      <Subscription />
      <Footer />
    </div>
  );
}

export default ProductsComponent;
