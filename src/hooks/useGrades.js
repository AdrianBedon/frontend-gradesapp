import { useReducer } from "react";
import { gradesReducer } from "../reducers/gradesReducer";
import { calculate, findAll } from "../services/gradeService";

const initialGrades = [];

const initialFormatCalculateForm = {
  start1: "2023-01-01",
  start2: "2023-01-01",
  start3: "2023-01-01",
  end1: "2023-01-01",
  end2: "2023-01-01",
  end3: "2023-01-01",
  count1: 0,
  count2: 0,
  count3: 0,
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
