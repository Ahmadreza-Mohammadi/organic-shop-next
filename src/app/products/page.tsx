import LayoutComponent from "@/components/layout/layout";
import ProductsList from "@/components/products-card/productsList";

function ProductsComponent() {
  return (
    <div className="flex flex-col items-center">
      <LayoutComponent>
        <ProductsList />
      </LayoutComponent>
    </div>
  );
}

export default ProductsComponent;
