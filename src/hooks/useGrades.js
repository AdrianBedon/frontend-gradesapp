import { useReducer } from "react";
import { gradesReducer } from "../reducers/gradesReducer";
import { calculate, findAll } from "../services/gradeService";

const initialGrades = [];

const initialFormatCalculateForm = {
  start1: "",
  start2: "",
  start3: "",
  end1: "",
  end2: "",
  end3: "",
};

export const useGrades = () => {
  const [grades, dispatch] = useReducer(gradesReducer, initialGrades);
  const [gradesT, dispatchT] = useReducer(gradesReducer, initialGrades);

  const getGrades = async () => {
    const result = await findAll();
    dispatch({
      type: "loadingGrades",
      payload: result.data,
    });
  };

  const calculateGrades = async (formatCalculate) => {
    const result1 = await calculate(formatCalculate);
    dispatchT({
      type: "calculate",
      payload: result1.data,
    });
  };

  return {
    grades,
    gradesT,
    initialFormatCalculateForm,
    getGrades,
    calculateGrades,
  };
};
