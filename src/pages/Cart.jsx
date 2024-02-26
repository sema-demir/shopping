import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CardComp from "../components/CardComp";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  console.log(carts, totalAmount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CardComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-xl">
            TOPLAM TUTAR:
            <span className="font-bold text-xl ml-2"> {totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div>Kartınız Boş...</div>
      )}
    </div>
  );
};

export default Cart;
