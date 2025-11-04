import { useState } from "react";
import type { CATEGORY_TYPE } from "../types";
import { useContextData } from "../StateProvider";
import CategoryInput from "./CategoryInput";

const Category = () => {
  const [category, setCategory] = useState<CATEGORY_TYPE>("bollywood");
  const [rangeValue, setRangeValue] = useState(10);

  const { dispatch } = useContextData()!;

  return (
    <>
      <div className="flex flex-col  gap-12  mt-10  ">
        <div className="">
          <p className="text-lg font-bold text-primary mb-1 ">
            Choose Category
          </p>
          <CategoryInput category={category} setCategory={setCategory} />
        </div>

        <div className="">
          <p className="mb-1">
            <label
              htmlFor="myRange"
              className="text-lg font-bold text-primary "
            >
              No of Questions:
            </label>
            <strong> {rangeValue}</strong>
          </p>

          <input
            type="range"
            id="myRange"
            min="5"
            max="100"
            value={rangeValue}
            onChange={(e) => setRangeValue(Number(e.target.value))}
            className="w-full  bg-primary"
          />
        </div>
      </div>
      {/* NEXT BUTTON */}
      <div className="mt-12  lg:mt-18 flex justify-center">
        <button
          className="flex items-center justify-center gap-3 "
          onClick={() =>
            dispatch({
              type: "SET_CATEGORY",
              payload: { category, size: rangeValue },
            })
          }
        >
          <span className="text-xl lg:text-2xl">Next </span>{" "}
          <span className="text-xl lg:text-2xl"> ▶</span>
        </button>
      </div>
    </>
  );
};

export default Category;
