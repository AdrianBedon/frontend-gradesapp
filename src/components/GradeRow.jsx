export const GradeRow = ({ id, name, grade, date }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{grade}</td>
      <td>{date}</td>
    </tr>
  );
};
