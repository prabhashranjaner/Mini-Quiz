import { useContext } from "react";
import { StateContext } from "../StateProvider";
import Options from "./Options";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";

const Quiz = () => {
  const { state, dispatch } = useContext(StateContext)!;

  const { questions, index, answer } = state;
  const currentQuestion = questions[index];

  function handleNext() {
    if (index < 14) {
      dispatch({ type: "NEXT" });
    }
  }
  return (
    <div className="max-w-[95vw] p-4 ">
      <div className="mb-12">
        <ProgressBar />
      </div>
      <p className="text-md md:text-lg lg:text-2xl">
        {currentQuestion.question}
      </p>
      <Options
        options={currentQuestion.options}
        correctAnswer={currentQuestion.correctAnswer}
      />
      <div className="flex justify-between items-center">
        <Timer />
        {answer !== null && index < 14 && (
          <button className="" onClick={handleNext}>
            Next
          </button>
        )}
        {answer !== null && index === 14 && (
          <button className="" onClick={() => dispatch({ type: "FINISH" })}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
