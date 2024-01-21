import { GradeRow } from "./GradeRow";

export const GradesList = ({ grades }) => {
  return (
    <>
      <p>Listado de Calificaciones</p>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>ID</tr>
            <tr>Name</tr>
            <tr>Grade</tr>
            <tr>Grade Date</tr>
          </thead>
          <tbody>
            <GradeRow key={id} id={id} name={name} grade={grade} date={date} />
          </tbody>
        </table>
      </div>
    </>
  );
};
