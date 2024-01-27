import { useGrades } from "../hooks/useGrades";
import { GradeContext } from "./GradeContext";

export const GradeProvider = ({ children }) => {
  const {
    grades,
    gradesT,
    initialFormatCalculateForm,
    getGrades,
    calculateGrades,
  } = useGrades();
  return (
    <GradeContext.Provider
      value={{
        grades,
        gradesT,
        initialFormatCalculateForm,
        getGrades,
        calculateGrades,
      }}
    >
      {children}
    </GradeContext.Provider>
  );
};
