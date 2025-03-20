import { useNavigate, useParams } from "react-router-dom";
import Search from "../../components/search/Search";
import ProductDetail from "../../components/productdetail/ProductDetail";
import AboutSeller from "../../components/aboutseller/AboutSeller";
import BeASeller from "./../../components/beaseller/BeASeller";
import { useEffect } from "react";
import { useGetSimilarProducts, useGetSingleProduct } from "../../api/product";
import Loader from "../../components/loader/Loader";
import ProductsGrid from "../../components/productsGrid/ProductsGrid";
import { useGetSellerMostPurchasedProducts } from "../../api/seller";
import PageTitle from "../../utils/pageTitle";

export default function Product() {
  const { slug } = useParams();
  const { isLoading: isLoadingSimilarProducts, data: similarProducts } =
    useGetSimilarProducts(slug);

  const navigate = useNavigate();
  useEffect(() => {
    if (!slug || slug === "undefined") {
      navigate(-1);
      return;
    }
  }, []);

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

  if (isLoading) return <Loader />;

  return (
    <>
      <PageTitle
        title={product ? `Buy ${product?.name} on Agroxhub` : "Agroxhub"}
      />
      <Search />
      {product && <ProductDetail product={product} />}
      {product && <AboutSeller seller={product?.seller} />}
      <ProductsGrid
        header="More Products from Seller"
        isLoading={isLoadingSellerProducts}
        products={sellerProducts}
        moreLink={`/seller/${sellerId}/products`}
      />
      <ProductsGrid
        header="You may also like"
        isLoading={isLoadingSimilarProducts}
        products={similarProducts}
      />
      <BeASeller />
    </>
  );
}
