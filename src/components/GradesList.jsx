import { useContext } from "react";
import { GradeRow } from "./GradeRow";
import { GradeContext } from "../context/GradeContext";

export const GradesList = () => {
  const { grades } = useContext(GradeContext);
  return (
    <>
      <p>Listado de Calificaciones</p>
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Name</th>
              <th className="text-center">Grade</th>
              <th className="text-center">Grade Date</th>
            </tr>
          </thead>
          <tbody>
            {grades.map(({ id, grade, date, name }) => (
              <GradeRow
                key={id}
                id={id}
                name={name}
                grade={grade}
                date={date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
