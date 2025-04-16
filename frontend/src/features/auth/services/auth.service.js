import axios from "axios";
const path = process.env.MAIN_PATH;

export const login = () => {
  try {
    const response = axios.get(`${path}/login`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
