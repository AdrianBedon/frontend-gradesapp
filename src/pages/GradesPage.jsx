import { useContext, useEffect, useState } from "react";
import { GradesList } from "../components/GradesList";
import { GradeContext } from "../context/GradeContext";
import { TotalGradesList } from "../components/TotalGradesList";

export const GradesPage = () => {
  const {
    grades,
    gradesT,
    initialFormatCalculateForm,
    getGrades,
    calculateGrades,
  } = useContext(GradeContext);

  const [formatCalculateForm, setFormatCalculateForm] = useState(
    initialFormatCalculateForm
  );

  const { start1, start2, start3, end1, end2, end3, count1, count2, count3 } =
    formatCalculateForm || {};

  useEffect(() => {
    getGrades();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    calculateGrades(formatCalculateForm);
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormatCalculateForm({
      ...formatCalculateForm,
      [name]: value,
    });
  };

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
          <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text ig-1">Start 1st Progress</span>
              <input
                type="date"
                id="start1"
                name="start1"
                className="form-control"
                value={start1}
                onChange={onInputChange}
              ></input>
              <span className="input-group-text ig-1">End 1st Progress</span>
              <input
                id="end1"
                name="end1"
                type="date"
                className="form-control"
                value={end1}
                onChange={onInputChange}
              ></input>
              <span className="input-group-text ig-1">Grades Quantity</span>
              <input
                name="count1"
                type="number"
                className="form-control"
                placeholder="0"
                min="0"
                value={count1}
                onChange={onInputChange}
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text ig-2">Start 2nd Progress</span>
              <input
                id="start2"
                name="start2"
                type="date"
                className="form-control"
                value={start2}
                onChange={onInputChange}
              ></input>
              <span className="input-group-text ig-2">End 2nd Progress</span>
              <input
                id="end2"
                name="end2"
                type="date"
                className="form-control"
                value={end2}
                onChange={onInputChange}
              ></input>
              <span className="input-group-text ig-2">Grades Quantity</span>
              <input
                type="number"
                name="count2"
                className="form-control"
                placeholder="0"
                min="0"
                value={count2}
                onChange={onInputChange}
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text ig-3">Start 3rd Progress</span>
              <input
                id="start3"
                name="start3"
                type="date"
                className="form-control"
                value={start3}
                onChange={onInputChange}
              ></input>
              <span className="input-group-text ig-3">End 3rd Progress</span>
              <input
                id="end3"
                name="end3"
                type="date"
                className="form-control"
                value={end3}
                onChange={onInputChange}
              ></input>
              <span className="input-group-text ig-3">Grades Quantity</span>
              <input
                type="number"
                name="count3"
                className="form-control"
                placeholder="0"
                min="0"
                value={count3}
                onChange={onInputChange}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary btn-custom">
              Calculate Grades
            </button>
          </form>
          <p></p>
          {gradesT.length === 0 ? (
            <div className="alert alert-warning">
              There are no grades to show!
            </div>
          ) : (
            <TotalGradesList />
          )}
        </div>
      </div>
    </div>
  );
};
