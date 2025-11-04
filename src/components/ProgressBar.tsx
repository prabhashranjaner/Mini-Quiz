import { useContextData } from "../StateProvider";
import type { QUES_TYPE } from "../types";

const ProgressBar = () => {
  const { state } = useContextData()!;

  const { index, questions, points, answer } = state;

  const maxPoints = questions.reduce(
    (acc: number, current: QUES_TYPE) => acc + current.points,
    0
  );

  return (
    <>
      <progress
        className="w-full rounded-full bg-gray-600"
        value={index + Number(answer !== null)}
        max={questions.length}
      />
      <div className="flex items-center justify-between">
        <p>
          Question <strong>{index + 1}</strong>/{questions.length}
        </p>
        <p>
          <strong>{points}</strong>/{maxPoints} points
        </p>
      </div>
    </>
  );
};

export default ProgressBar;
