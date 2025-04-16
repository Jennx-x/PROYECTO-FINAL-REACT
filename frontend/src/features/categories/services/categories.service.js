import axios from "axios";
const path = process.env.MAIN_PATH;

export const postCategories = async () => {
  try {
    const response = await axios.post(`${path}/categories`, {
      name: "Electrónica",
      description: "Categoría para productos electrónicos",
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${path}/categories`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${path}/categories/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const updateCategory = async (id) => {
  try {
    const response = await axios.put(`${path}/categories/${id}`, {
      name: "Electrónica Actualizada",
      description: "Categoría para productos electrónicos actualizada",
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${path}/categories/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
