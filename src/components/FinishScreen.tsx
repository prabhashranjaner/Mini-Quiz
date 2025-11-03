import { useContext } from "react";
import { StateContext } from "../StateProvider";
import type { QUES_TYPE } from "../types";

const FinishScreen = () => {
  const { state, dispatch } = useContext(StateContext)!;

  const { questions, points, highestPoints } = state;

  const maxPoints = questions.reduce(
    (acc: number, current: QUES_TYPE) => acc + current.points,
    0
  );

  const percent = Math.ceil((points / maxPoints) * 100);

  return (
    <div>
      <p className="text-lg py-4 bg-primary rounded-full">
        You scored <strong>{points}</strong> out of {maxPoints} ({percent}%)
      </p>
      <p className="mt-3">(Hightest Score {highestPoints})</p>

      <button className="mt-12" onClick={() => dispatch({ type: "RESTART" })}>
        Restart{" "}
      </button>
    </div>
  );
};

export default FinishScreen;
