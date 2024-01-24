import { useContext, useEffect } from "react";
import { GradesList } from "../components/GradesList";
import { GradeContext } from "../context/GradeContext";

export const GradesPage = () => {
  const { grades, getGrades } = useContext(GradeContext);

  useEffect(() => {
    getGrades();
  }, []);
  return (
    <div className="container my-4">
      <h2>Grades App</h2>
      <div className="row">
        <div className="col">
          {grades.length === 0 ? (
            <div className="alert alert-warning">
              There are no grades to show!
            </div>
          ) : (
            <GradesList />
          )}
        </div>
      </div>
    </div>
  );
};
