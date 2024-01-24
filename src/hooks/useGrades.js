import { useReducer } from "react";
import { gradesReducer } from "../reducers/gradesReducer";
import { findAll } from "../services/gradeService";

const initialGrades = [];

export const useGrades = () => {
  const [grades, dispatch] = useReducer(gradesReducer, initialGrades);

  const getGrades = async () => {
    const result = await findAll();
    dispatch({
      type: "loadingGrades",
      payload: result.data,
    });
  };

  return {
    grades,
    getGrades,
  };
};
