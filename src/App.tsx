import { useContext, useEffect } from "react";
import { StateContext } from "./StateProvider";
import "./App.css";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Quiz from "./components/Quiz";
import FinishScreen from "./components/FinishScreen";
import Category from "./components/Category";

function App() {
  const { dispatch, state } = useContext(StateContext)!;

  const { status, category } = state;
  //mini-quiz-backend-1.onrender.com/questions
  // ! JSON_SERVER
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(
          `https://mini-quiz-backend-1.onrender.com/${category}`
        );
        const data = await res.json();
        dispatch({ type: "SET_QUESTIONS", payload: data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "ERROR" });
      }
    }
    if (category) fetchQuestions();
  }, [dispatch, category]);
  return (
    <div className="max-w-[90vw] mx-auto md:w-[70vw] lg:w-[50vw]">
      <Header />
      <div className="mt-8">
        {status === "welcome" && <Category />}
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
