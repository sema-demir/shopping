import { useState } from "react";
import Category from "../components/Category";
import Products from "../components/Products";
import SliderComp from "../components/SliderComp";
import Sorting from "../components/Sorting";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
