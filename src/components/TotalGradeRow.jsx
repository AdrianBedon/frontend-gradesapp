export const TotalGradeRow = ({ name, progress1, progress2, progress3 }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{progress1}</td>
      <td>{progress2}</td>
      <td>{progress3}</td>
    </tr>
  );
};
