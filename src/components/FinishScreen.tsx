import { useContextData } from "../StateProvider";
import type { QUES_TYPE } from "../types";

const FinishScreen = () => {
  const { state, dispatch } = useContextData()!;

  const { questions, points, highestPoints } = state;

  const maxPoints = questions.reduce(
    (acc: number, current: QUES_TYPE) => acc + current.points,
    0
  );

  const percent = Math.ceil((points / maxPoints) * 100);

  return (
    <div className="lg:mt-20">
      <p className="text-lg py-4 bg-primary rounded-full md:max-w-xl mx-auto">
        You scored <strong>{points}</strong> out of {maxPoints} ({percent}%)
      </p>
      <p className="mt-3">🏆 (Hightest Score {highestPoints}) 🏆</p>

      <button
        className="mt-12 lg:text-2xl"
        onClick={() => dispatch({ type: "RESTART" })}
      >
        <span>Restart 👍🏼</span>
      </button>
    </div>
  );
};

export default FinishScreen;
