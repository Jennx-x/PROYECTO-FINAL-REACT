import axios from "axios";
const path = process.env.MAIN_PATH;

export const postCompanies = async () => {
  try {
    const response = await axios.post(`${path}/companies`, {
      name: "Tech Solutions S.A.S.",
      nit: "900123456-7",
      address: "Cra 12 #45-67",
      phone: "3216549870",
      email: "contacto@techsolutions.com",
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getCompanies = async () => {
  try {
    const response = await axios.get(`${path}/companies`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getCompanyById = async (id) => {
  try {
    const response = await axios.get(`${path}/companies/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const updateCompany = async (id) => {
  try {
    const response = await axios.put(`${path}/companies/${id}`, {
      name: "Tech Solutions Internacional",
      address: "Av. Siempre Viva #123",
      phone: "3123456789",
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const deleteCompany = async (id) => {
  try {
    const response = await axios.delete(`${path}/companies/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
