import type { ACTION_TYPE, STATE_TYPE, STATUS_TYPE } from "./types";

export const initialState: STATE_TYPE = {
  questions: [],
  status: "welcome",
  index: 0,
  answer: null,
  points: 0,
  highestPoints: 0,
  secondsRemaining: null,
  category: null,
};

const SEC_PER_QUESTION = 30;

export function reducer(state: STATE_TYPE, action: ACTION_TYPE) {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload };

    case "RESET_CATEGORY":
      return { ...state, category: null, status: "welcome" as STATUS_TYPE };
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        status: "ready" as STATUS_TYPE,
      };

    case "ERROR":
      return { ...state, status: "error" as STATUS_TYPE };

    case "READY":
      return {
        ...state,
        status: "active" as STATUS_TYPE,
        secondsRemaining: state.questions.length * SEC_PER_QUESTION,
      };

    case "NEXT":
      return { ...state, index: state.index + 1, answer: null };

    case "ANSWER": {
      const currentQuestion = state.questions[state.index];
      const newPoints =
        currentQuestion.correctAnswer === action.payload
          ? state.points + currentQuestion.points
          : state.points;
      return { ...state, answer: action.payload, points: newPoints };
    }

    case "FINISH":
      return {
        ...state,
        status: "finished" as STATUS_TYPE,
        highestPoints:
          state.points > state.highestPoints
            ? state.points
            : state.highestPoints,
      };

    case "RESTART":
      return {
        ...initialState,
        answer: null,
        status: "welcome" as STATUS_TYPE,
        points: 0,
        index: 0,
        highestPoints: state.highestPoints,
      };

    case "TIMER":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining! - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      return state;
  }
}
