export const GradeRow = ({ id, name, grade, date }) => {
  return (
    <tr>
      <td className="text-center">{id}</td>
      <td className="text-center">{name}</td>
      <td className="text-center">{grade}</td>
      <td className="text-center">{date}</td>
    </tr>
  );
};
