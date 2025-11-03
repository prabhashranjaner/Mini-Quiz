import { useContext } from "react";
import { StateContext } from "../StateProvider";

type PropType = {
  options: string[];
  correctAnswer: number;
};
const Options = ({ options, correctAnswer }: PropType) => {
  const { state, dispatch } = useContext(StateContext)!;
  const { answer } = state;

  const isAnswered = answer !== null;

  function handleClick(index: number) {
    console.log("clicked");
    dispatch({ type: "ANSWER", payload: index });
  }

  return (
    <>
      <div className="flex flex-col gap-3 my-8 items-center">
        {options.map((option, index) => {
          return (
            <button
              className={`w-sm  ${
                answer === index ? "border-amber-500!" : ""
              } disabled:bg-gray-800! ${
                isAnswered && correctAnswer === index ? "border-green-500!" : ""
              } `}
              onClick={() => handleClick(index)}
              disabled={isAnswered}
              key={option}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Options;
