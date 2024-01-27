import { useContext, useEffect, useState } from "react";
import { GradesList } from "../components/GradesList";
import { GradeContext } from "../context/GradeContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TotalGradesList } from "../components/TotalGradesList";

export const GradesPage = () => {
  const [startD1, setStartD1] = useState(new Date());
  const [endD1, setEndD1] = useState(new Date());
  const [startD2, setStartD2] = useState(new Date());
  const [endD2, setEndD2] = useState(new Date());
  const [startD3, setStartD3] = useState(new Date());
  const [endD3, setEndD3] = useState(new Date());
  const [countO1, setCountO1] = useState(0);
  const [countO2, setCountO2] = useState(0);
  const [countO3, setCountO3] = useState(0);

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

  useEffect(() => {
    getGrades();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const { start1, start2, start3, end1, end2, end3, count1, count2, count3 } =
      formatCalculateForm || {};

    const newFormatCalculateForm = {
      start1: startD1,
      start2: startD2,
      start3: startD3,
      end1: endD1,
      end2: endD2,
      end3: endD3,
      count1: countO1,
      count2: countO2,
      count3: countO3,
    };

    setFormatCalculateForm(newFormatCalculateForm);
    calculateGrades(formatCalculateForm);
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
              <DatePicker
                type="date"
                className="form-control"
                selected={startD1 || ""}
                wrapperClassName="datePicker"
                onChange={(date) => setStartD1(date)}
                dateFormat={"yyyy-MM-dd"}
              ></DatePicker>
              <span className="input-group-text ig-1">End 1st Progress</span>
              <DatePicker
                type="date"
                className="form-control"
                selected={endD1 || ""}
                wrapperClassName="datePicker"
                onChange={(date) => setEndD1(date)}
                dateFormat={"yyyy-MM-dd"}
              ></DatePicker>
              <span className="input-group-text ig-1">Grades Quantity</span>
              <input
                type="number"
                className="form-control"
                placeholder="0"
                min="0"
                value={countO1}
                onChange={(event) => setCountO1(event.target.value)}
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text ig-2">Start 2nd Progress</span>
              <DatePicker
                type="date"
                className="form-control"
                selected={startD2 || ""}
                wrapperClassName="datePicker"
                onChange={(date) => setStartD2(date)}
                dateFormat={"yyyy-MM-dd"}
              ></DatePicker>
              <span className="input-group-text ig-2">End 2nd Progress</span>
              <DatePicker
                type="date"
                className="form-control"
                selected={endD2 || ""}
                wrapperClassName="datePicker"
                onChange={(date) => setEndD2(date)}
                dateFormat={"yyyy-MM-dd"}
              ></DatePicker>
              <span className="input-group-text ig-2">Grades Quantity</span>
              <input
                type="number"
                className="form-control"
                placeholder="0"
                min="0"
                value={countO2}
                onChange={(event) => setCountO2(event.target.value)}
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text ig-3">Start 3rd Progress</span>
              <DatePicker
                type="date"
                className="form-control"
                selected={startD3 || ""}
                wrapperClassName="datePicker"
                onChange={(date) => setStartD3(date)}
                dateFormat={"yyyy-MM-dd"}
              ></DatePicker>
              <span className="input-group-text ig-3">End 3rd Progress</span>
              <DatePicker
                type="date"
                className="form-control"
                selected={endD3 || ""}
                wrapperClassName="datePicker"
                onChange={(date) => setEndD3(date)}
                dateFormat={"yyyy-MM-dd"}
              ></DatePicker>
              <span className="input-group-text ig-3">Grades Quantity</span>
              <input
                type="number"
                className="form-control"
                placeholder="0"
                min="0"
                value={countO3}
                onChange={(event) => setCountO3(event.target.value)}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary btn-custom">Calculate Grades</button>
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
