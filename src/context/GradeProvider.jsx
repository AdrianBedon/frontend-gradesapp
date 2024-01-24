import { useGrades } from "../hooks/useGrades";
import { GradeContext } from "./GradeContext";

export const GradeProvider = ({ children }) => {
  const { grades, getGrades } = useGrades();
  return (
    <GradeContext.Provider value={{ grades, getGrades }}>
      {children}
    </GradeContext.Provider>
  );
};
