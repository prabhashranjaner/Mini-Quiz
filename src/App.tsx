import { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";
import { StateContext } from "./StateProvider";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Quiz from "./components/Quiz";
import FinishScreen from "./components/FinishScreen";

function App() {
  const { dispatch, state } = useContext(StateContext)!;

  const { status } = state;

  // ! JSON_SERVER
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(
          "https://mini-quiz-backend-1.onrender.com/questions"
        );
        const data = await res.json();
        dispatch({ type: "SET_QUESTIONS", payload: data.questions });
      } catch (error) {
        console.log(error);
        dispatch({ type: "ERROR" });
      }
    }

    fetchQuestions();
  }, [dispatch]);
  return (
    <div className="max-w-[90vw] mx-auto">
      <Header />
      <div className="mt-12">
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && <WelcomeScreen />}
        {status === "active" && <Quiz />}
        {status === "finished" && <FinishScreen />}
      </div>
    </div>
  );
}

export default App;
