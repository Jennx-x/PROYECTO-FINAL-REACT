import axios from "axios";
const path = process.env.MAIN_PATH;

export const postUsers = async () => {
  try {
    const response = await axios.post(`${path}/users`, {
      fullName: "Ariana Lucia Rohenes",
      email: "ariana@example.com",
      password: "123456",
      roleId: 1,
      companyId: 1,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
export const getUsers = async () => {
  try {
    const response = await axios.get(`${path}/users`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${path}/users/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id) => {
  try {
    const response = await axios.put(`${path}/users/${id}`, {
      fullName: "Ariana Lucia Rohenes Actualizada",
      email: "ariana_updated@example.com",
      roleId: 2,
      companyId: 1,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${path}/users/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
