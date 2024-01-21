import { GradesList } from "../components/GradesList";
import { useGrades } from "../hooks/useGrades";

export const GradesPage = () => {
  const { grades } = useGrades();
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
            <GradesList grades={grades} />
          )}
        </div>
      </div>
    </div>
  );
};
