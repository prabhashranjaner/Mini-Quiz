import { useContext } from "react";
import { StateContext } from "../StateProvider";

const WelcomeScreen = () => {
  const { state, dispatch } = useContext(StateContext)!;

  const quesCount = state.questions.length;
  return (
    <div>
      <h2 className="text-xl lg:text-4xl mb-2 font-bold sm:text-2xl md:text-3xl">
        Welcome to The Bollywood Quiz
      </h2>
      <p className="text-sm font-bold text-amber-600 lg:text-xl  md:text-lg mb-12">
        {quesCount} questions to test your bollywood mastery
      </p>

      <button onClick={() => dispatch({ type: "READY" })}>Let's Start</button>
    </div>
  );
};

export default WelcomeScreen;
