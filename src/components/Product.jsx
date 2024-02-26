import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[300px] p-3 mx-2 mb-2 border rounded-md relative "
    >
      <div className="text-xl rounded-full h-[40px] w-[20px]font-bold absolute top-0 right-0  bg-yellow-400  text-black p-2 m-1 ">
        {product?.price} <span className="text-sm">TL</span>{" "}
      </div>
      <img
        className="w-[100px] h-[100px] m-auto object-cover"
        src={product?.image}
        alt=""
      />
      <div className="text-center px-3 mt-3 text-xl font-bold">
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
