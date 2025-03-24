import { useParams } from "react-router-dom";
import { category } from "./data";
import { PreviewCard } from "./cards";
import ErrorBoundary from "./boundaryError";

export default function ViewProduct() {
  const { id } = useParams();

  let selectedProduct = null;

  category.forEach((categoriesData) => {
    const product = categoriesData.items.find((item) => item.id == id);
    selectedProduct = product ? product : selectedProduct;
  });
  return (
    <>
      /
      <ErrorBoundary>
        <PreviewCard
          pImg={selectedProduct.img}
          pPrice={selectedProduct.price}
          pName={selectedProduct.name}
        />
      </ErrorBoundary>
    </>
  );
}
