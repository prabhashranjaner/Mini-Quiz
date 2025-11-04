import { useEffect } from "react";
import { useContextData } from "../StateProvider";

const Timer = () => {
  const { state, dispatch } = useContextData()!;
  const { secondsRemaining } = state;

  const mints = Math.floor(secondsRemaining! / 60);
  const seconds = secondsRemaining! % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "TIMER" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="bg-gray-900 py-2 px-4 rounded-lg">
      {mints < 10 && "0"}
      {mints}: {seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
