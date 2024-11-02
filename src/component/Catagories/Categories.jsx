import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="my-24">
      <div className="my-10">
        <h1 className="text-5xl text-center font-bold p-4">
          Job Category List : {category.length}
        </h1>
        <p className="text-center text-base">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10">
        {category.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
