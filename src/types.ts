import type { Dispatch } from "react";

export type STATE_TYPE = {
  questions: QUES_TYPE[];
  status: STATUS_TYPE;
  index: number;
  answer: null | number;
  points: number;
  highestPoints: number;
  secondsRemaining: null | number;
};

export type STATUS_TYPE = "loading" | "error" | "ready" | "active" | "finished";

export type QUES_TYPE = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  points: number;
};

export type ACTION_TYPE =
  | { type: "SET_QUESTIONS"; payload: QUES_TYPE[] }
  | { type: "ERROR" }
  | { type: "READY" }
  | { type: "NEXT" }
  | { type: "ANSWER"; payload: number }
  | { type: "FINISH" }
  | { type: "RESTART" }
  | { type: "TIMER" };

export interface CONTEXT_TYPE {
  state: STATE_TYPE;
  dispatch: Dispatch<ACTION_TYPE>;
}
