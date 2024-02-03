import axios from "axios";

const BASE_URL = "https://minicore-udla-gradesapp.onrender.com/grades";

export const findAll = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const calculate = async ({
  start1,
  start2,
  start3,
  end1,
  end2,
  end3,
}) => {
  try {
    const response = await axios.post(`${BASE_URL}/calculate`, {
      start1,
      start2,
      start3,
      end1,
      end2,
      end3,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
};
