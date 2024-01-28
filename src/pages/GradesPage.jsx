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
    formatCalculateForm;

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
    <>
      <header>
        <h1>Grades App</h1>
      </header>
      <main>
        {grades.length === 0 ? (
          <div className="alert alert-warning">
            There are no grades to show!
          </div>
        ) : (
          <GradesList />
        )}
        <form onSubmit={onSubmit}>
          <div className="cards">
            <article className="card">
              <div className="card__content">
                <h2 className="card__title">Progress 1</h2>
                <div className="input__wrapper">
                  <input
                    id="start1"
                    type="text"
                    placeholder="Start Date"
                    name="start1"
                    required
                    className="input__field"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    value={start1}
                    onChange={onInputChange}
                  />
                  <label htmlFor="start1" className="input__label">
                    Start Date
                  </label>
                </div>
                <div className="input__wrapper">
                  <input
                    id="end1"
                    type="text"
                    placeholder="End Date"
                    name="end1"
                    required
                    className="input__field"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    value={end1}
                    onChange={onInputChange}
                  />
                  <label htmlFor="end1" className="input__label">
                    End Date
                  </label>
                </div>
                <div className="input__wrapper">
                  <input
                    id="count1"
                    type="text"
                    placeholder="Grades Quantity"
                    name="count1"
                    required
                    className="input__field"
                    onFocus={(e) => (e.target.type = "number")}
                    onBlur={(e) => (e.target.type = "text")}
                    value={count1}
                    onChange={onInputChange}
                  />
                  <label htmlFor="count1" className="input__label">
                    Grades Quantity
                  </label>
                </div>
              </div>
            </article>
            <article className="card">
              <div className="card__content">
                <h2 className="card__title">Progress 2</h2>
                <div className="input__wrapper">
                  <input
                    id="start2"
                    type="text"
                    placeholder="Start Date"
                    name="start2"
                    required
                    className="input__field"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    value={start2}
                    onChange={onInputChange}
                  />
                  <label htmlFor="start2" className="input__label">
                    Start Date
                  </label>
                </div>
                <div className="input__wrapper">
                  <input
                    id="end2"
                    type="text"
                    placeholder="End Date"
                    name="end2"
                    required
                    className="input__field"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    value={end2}
                    onChange={onInputChange}
                  />
                  <label htmlFor="end2" className="input__label">
                    End Date
                  </label>
                </div>
                <div className="input__wrapper">
                  <input
                    id="count2"
                    type="text"
                    placeholder="Grades Quantity"
                    name="count2"
                    required
                    className="input__field"
                    onFocus={(e) => (e.target.type = "number")}
                    onBlur={(e) => (e.target.type = "text")}
                    value={count2}
                    onChange={onInputChange}
                  />
                  <label htmlFor="count2" className="input__label">
                    Grades Quantity
                  </label>
                </div>
              </div>
            </article>
            <article className="card">
              <div className="card__content">
                <h2 className="card__title">Progress 3</h2>
                <div className="input__wrapper">
                  <input
                    id="start3"
                    type="text"
                    placeholder="Start Date"
                    name="start3"
                    required
                    className="input__field"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    value={start3}
                    onChange={onInputChange}
                  />
                  <label htmlFor="start3" className="input__label">
                    Start Date
                  </label>
                </div>
                <div className="input__wrapper">
                  <input
                    id="end3"
                    type="text"
                    placeholder="End Date"
                    name="end3"
                    required
                    className="input__field"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    value={end3}
                    onChange={onInputChange}
                  />
                  <label htmlFor="end3" className="input__label">
                    End Date
                  </label>
                </div>
                <div className="input__wrapper">
                  <input
                    id="count3"
                    type="text"
                    placeholder="Grades Quantity"
                    name="count3"
                    required
                    className="input__field"
                    onFocus={(e) => (e.target.type = "number")}
                    onBlur={(e) => (e.target.type = "text")}
                    value={count3}
                    onChange={onInputChange}
                  />
                  <label htmlFor="count3" className="input__label">
                    Grades Quantity
                  </label>
                </div>
              </div>
            </article>
          </div>
          <div className="center">
            <button type="submit" className="btn btn-primary btn-custom">
              Calculate Grades
            </button>
          </div>
        </form>
        <p></p>
        {gradesT.length === 0 ? (
          <div className="alert alert-warning">
            There are no grades to show!
          </div>
        ) : (
          <TotalGradesList />
        )}
      </main>
    </>
  );
};
