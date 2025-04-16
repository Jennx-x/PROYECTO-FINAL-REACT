import axios from "axios";
const path = process.env.MAIN_PATH;

export const postProducts = async () => {
  try {
    const response = await axios.post(`${path}/products`, {
      name: "Producto 1",
      count: 10,
      price: 100.0,
      urlImage: "http://ejemplo.com/imagen1.jpg",
      categoryId: 1,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${path}/products`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${path}/products/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getProductByCategoryId = async (categoryId) => {
  try {
    const response = await axios.get(`${path}/products/category/${categoryId}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (id) => {
  try {
    const response = await axios.put(`${path}/products/${id}`, {
      name: "Producto 1 actualizado",
      count: 15,
      price: 120.0,
      urlImage: "http://ejemplo.com/imagen1_actualizada.jpg",
      categoryId: 1,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${path}/products/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
