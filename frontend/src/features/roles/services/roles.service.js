import axios from "axios";
const path = process.env.MAIN_PATH;
export const postRoles = async () => {
  try {
    const response = await axios.post(`${path}/roles`, {
      name: "Administrador",
      description: "Rol con todos los permisos del sistema",
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
export const getRoles = async () => {
  try {
    const response = await axios.get(`${path}/roles`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getRoleById = async (id) => {
  try {
    const response = await axios.get(`${path}/roles/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const updateRole = async (id) => {
  try {
    const response = await axios.put(`${path}/roles/${id}`, {
      name: "Administrador Global",
      description: "Acceso completo al sistema",
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const deleteRole = async (id) => {
  try {
    const response = await axios.delete(`${path}/roles/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
