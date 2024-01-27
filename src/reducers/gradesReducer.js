export const gradesReducer = (state = [], action) => {
  switch (action.type) {
    case "calculate":
      return action.payload;
    case "loadingGrades":
      return action.payload;
    default:
      return state;
  }
};
