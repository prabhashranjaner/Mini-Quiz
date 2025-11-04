import { useContextData } from "../StateProvider";

const WelcomeScreen = () => {
  const { state, dispatch } = useContextData()!;

  const { category } = state;

  const quesCount = state.questions.length;
  return (
    <div className="mt-24">
      <h2 className="text-xl lg:text-4xl mb-2 font-bold sm:text-2xl md:text-3xl">
        Welcome to The {category} Quiz
      </h2>
      <div className="text-sm font-bold  lg:text-xl  md:text-lg mb-12 mt-6 ">
        <span className="bg-primary p-2 rounded-lg">
          Total Questions: {quesCount}
        </span>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center">
        <button onClick={() => dispatch({ type: "RESET_CATEGORY" })}>
          {" "}
          ◀ Change Category{" "}
        </button>
        <button onClick={() => dispatch({ type: "READY" })}>
          Let's Start ▶
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
