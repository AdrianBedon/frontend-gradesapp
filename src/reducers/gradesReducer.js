export const gradesReducer = (state = [], action) => {
  switch (action.type) {
    case "loadingGrades":
      return action.payload;
    default:
      return state;
  }
};
