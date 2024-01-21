import { useReducer } from "react";
import { gradesReducer } from "../reducers/gradesReducer";

const initialGrades = [];

export const useGrades = () => {
  const [grades, dispatch] = useReducer(gradesReducer, initialGrades);

  return {
    grades,
  };
};
