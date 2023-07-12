import axios from "axios";
import config from "../../../project.config.js";

const API_URL = `${config.ENDPOINT}/api/${config.API_VERSION}/auth`;

const signup = async (data) => {
  const response = await axios.post(`${API_URL}/signup`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const authServices = {
  signup,
};

export default authServices;
