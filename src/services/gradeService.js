import axios from "axios";

const BASE_URL = "https://minicore-udla-gradesapp.onrender.com/grades";

export const findAll = async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
};
