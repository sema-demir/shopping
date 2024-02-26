import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/productSlice";
import DetailComp from "../components/DetailComp";
import Loading from "../components/Loading";

const Detail = () => {
  //detaylar sayfasına yönlendir
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );
  //ürün detaylarını id' ye göre  almak için istek attım
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  console.log(productDetail, "productDetail");
  return (
    //ÜRÜNLERİN DETAYI gelmediyse loading bas detayı varsa ürün detayını bas
    <div>
      {productDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
