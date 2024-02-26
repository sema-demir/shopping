import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="flex gap-10 my-10">
      {/* sol taraf */}
      <img
        className="w-[400px] h-[400px] object-cover "
        src={productDetail?.image}
        alt=""
      />
      {/* sag taraf */}
      <div className="">
        <div className="text-4xl font-bold ">{productDetail?.title}</div>
        <div className="my-2">{productDetail?.description}</div>
        <div className="my-2 text-xl text-red-700">
          Rating :{productDetail?.rating?.rate}{" "}
        </div>
        <div className="my-2 text-xl text-red-700">
          Count :{productDetail?.rating?.count}{" "}
        </div>
        <div className="text-3xl font-bold">
          {productDetail?.price} <span className="text-sm">TL</span>{" "}
        </div>
        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="text-5xl">
            -
          </div>
          <input
            className="w-12 text-center text-4xl font-bold"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border w-[200px] cursor-pointer text-xl rounded-md bg-yellow-500 h-8 flex items-center justify-center"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
