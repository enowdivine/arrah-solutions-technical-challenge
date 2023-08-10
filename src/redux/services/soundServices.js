import axios from "axios";
import config from "../../../project.config.js";

const URL = `${config.ENDPOINT}/api/${config.API_VERSION}/sound`;

const sounds = async () => {
  const response = await axios.get(`${URL}/read`);
  return response.data;
};

const authServices = {
  sounds,
};

export default authServices;
