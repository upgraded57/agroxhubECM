import { useNavigate, useParams } from "react-router-dom";
import Search from "../../components/search/Search";
import ProductDetail from "../../components/productdetail/ProductDetail";
import AboutSeller from "../../components/aboutseller/AboutSeller";
import BeASeller from "../../components/beaseller/BeASeller";
import { useEffect } from "react";
import { useGetSimilarProducts, useGetSingleProduct } from "../../api/product";
import ProductsGrid from "../../components/productsGrid/ProductsGrid";
import { useGetSellerMostPurchasedProducts } from "../../api/seller";
import PageTitle from "../../utils/pageTitle";
import LoadingProduct from "../../components/loader/LoadingProduct";
import ProductNotFound from "../../components/emptyStates/ProductNotFound";

export default function Product() {
  const navigate = useNavigate();
  const { slug } = useParams();

  if (!slug || slug === "undefined") {
    navigate(-1);
    return;
  }
  const { isLoading: isLoadingSimilarProducts, data: similarProducts } =
    useGetSimilarProducts(slug);

  const { isLoading, data: product } = useGetSingleProduct(slug);
  const sellerId = product ? product.sellerId : "";
  const {
    isLoading: isLoadingSellerProducts,
    data: sellerProducts,
    refetch,
  } = useGetSellerMostPurchasedProducts(sellerId);

  useEffect(() => {
    refetch();
  }, [sellerId]);

  // document.title = `Buy ${product.name} on Agroxhub`;

  return (
    <>
      <PageTitle
        title={product ? `Buy ${product?.name} on Agroxhub` : "Agroxhub"}
      />
      <Search />

      {isLoading ? (
        <LoadingProduct />
      ) : product ? (
        <ProductDetail product={product} />
      ) : (
        <ProductNotFound type="single" />
      )}
      {product && <AboutSeller seller={product?.seller} />}

      <ProductsGrid
        header="More Products from Seller"
        isLoading={isLoadingSellerProducts}
        products={sellerProducts ? sellerProducts : []}
        moreLink={`/seller/${sellerId}/products`}
      />

      <ProductsGrid
        header="You may also like"
        isLoading={isLoadingSimilarProducts}
        products={similarProducts ? similarProducts : []}
      />

      <BeASeller />
    </>
  );
}
