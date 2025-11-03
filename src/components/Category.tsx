import { useContext, useState } from "react";
import type { CATEGORY_TYPE, OPTION_TYPE } from "../types";
import { StateContext } from "../StateProvider";

const options: OPTION_TYPE[] = [
  { value: "bollywood", label: "Bollywood " },
  { value: "cricket", label: "Cricket" },
  { value: "current_affairs", label: "Current Affairs" },
  { value: "geography", label: "Indian Geography" },
  { value: "history", label: "Indian History" },
  { value: "mythology", label: "Indian Mythology & Epics" },
  { value: "politics", label: "Indian Politics" },
  { value: "science", label: "Science & Technology" },
  { value: "kids", label: "Kids Zone" },
];
const Category = () => {
  const [category, setCategory] = useState<CATEGORY_TYPE>("bollywood");
  const [rangeValue, setRangeValue] = useState(10);
  const { dispatch } = useContext(StateContext)!;

  return (
    <>
      <div className="flex flex-col  gap-12  mt-10  ">
        <div className="">
          <p className="text-lg font-bold text-primary mb-1 ">
            Choose Category
          </p>
          <select
            value={category!}
            onChange={(e) => setCategory(e.target.value as CATEGORY_TYPE)}
            className="p-2 bg-primary rounded-full font-bold w-full md:w-70"
          >
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value!}>
                  {option.label}
                </option>
              );
            })}
          </select>
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
            min="0"
            max="100"
            value={rangeValue}
            onChange={(e) => setRangeValue(Number(e.target.value))}
            className="w-full  bg-primary"
          />
        </div>
      </div>
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
