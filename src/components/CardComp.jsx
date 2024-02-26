import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CardComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] border object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="w-[476px]">
        <div className="text-xl">{cart?.title} </div>
        <div className="line-clamp-1">{cart?.description} </div>
      </div>
      <div className="font-bold text-2xl">
        {cart?.price} TL ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white w-[150px] h-8 flex items-center rounded-md justify-center cursor-pointer"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CardComp;
