import { useContext } from "react";
import { GradeContext } from "../context/GradeContext";
import { TotalGradeRow } from "./TotalGradeRow";

export const TotalGradesList = () => {
  const { gradesT } = useContext(GradeContext);

  return (
    <div className="table">
      <section className="table__header">
        <h3>Calculated Grades List</h3>
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Progress 1</th>
              <th>Progress 2</th>
              <th>Progress 3</th>
            </tr>
          </thead>
          <tbody>
            {gradesT.map(({ name, progress1, progress2, progress3 }) => (
              <TotalGradeRow
                key={name}
                name={name}
                progress1={progress1}
                progress2={progress2}
                progress3={progress3}
              />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};
