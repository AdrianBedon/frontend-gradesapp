import { useEffect, useState } from "react";

export const TotalGradeRow = ({ name, progress1, progress2, progress3 }) => {
  const [originalProgress3, setOriginalProgress3] = useState(progress3);
  const [calculatedProgress3, setCalculatedProgress3] = useState(progress3);
  const [showCalculateButton, setShowCalculateButton] = useState(
    calculatedProgress3 === 0
  );

  const onClick = (event) => {
    event.preventDefault();

    const newProgress3 = 6 - progress1 - progress2;

    setCalculatedProgress3(newProgress3);
    setShowCalculateButton(false);
  };

  const onReset = (event) => {
    event.preventDefault();

    setCalculatedProgress3(originalProgress3);
    setShowCalculateButton(originalProgress3 === 0);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{progress1}</td>
      <td>{progress2}</td>
      <td>{calculatedProgress3}</td>
      {progress3 === 0 ? (
        <td>
          {showCalculateButton ? (
            <button className="btn btn-primary btn-custom-calculate" onClick={onClick}>
              Progress 3
            </button>
          ) : (
            <button className="btn btn-primary btn-custom-reset" onClick={onReset}>Reset Progress 3</button>
          )}
        </td>
      ) : (<td></td>)}
    </tr>
  );
};
