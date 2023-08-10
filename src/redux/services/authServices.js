import axios from "axios";
import config from "../../../project.config.js";

const URL = `${config.ENDPOINT}/api/${config.API_VERSION}/user`;

const signup = async (data) => {
  const response = await axios.post(`${URL}/register`, data, {
    headers: {
      "Content-Type": "Application/json",
    },
  });

  return response.data;
};

const login = async (data) => {
  const response = await axios.post(`${URL}/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const userDetails = async (userId) => {
  const response = await axios.get(`${URL}/user/${userId}`);
  return response.data;
};

const authServices = {
  signup,
  login,
  userDetails,
};

export default authServices;
