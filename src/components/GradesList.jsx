import { useContext } from "react";
import { GradeRow } from "./GradeRow";
import { GradeContext } from "../context/GradeContext";

export const GradesList = () => {
  const { grades } = useContext(GradeContext);
  return (
    <main className="table">
      <section className="table__header">
        <h3>Grades List</h3>
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Grade Date</th>
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
      </section>
    </main>
  );
};
