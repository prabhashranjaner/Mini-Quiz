import { useContext } from "react";
import { StateContext } from "../StateProvider";

const WelcomeScreen = () => {
  const { state, dispatch } = useContext(StateContext)!;

  const quesCount = state.questions.length;
  return (
    <div>
      <h2 className="text-2xl md:text-4xl mb-2">
        Welcome to The Javascript Quiz
      </h2>
      <p className="text-sm md:text-lg mb-12">
        {quesCount} questions to test your Javascript mastery
      </p>

      <button onClick={() => dispatch({ type: "READY" })}>Let's Start</button>
    </div>
  );
};

export default WelcomeScreen;
