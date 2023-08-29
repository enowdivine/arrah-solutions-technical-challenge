import axios from "axios";
import config from "../../../project.config.js";

const URL = `${config.ENDPOINT}/api/${config.API_VERSION}/sound`;

const sounds = async () => {
  const response = await axios.get(`${URL}/read`);
  return response.data;
};

const findSounds = async (data) => {
  const response = await axios.get(`${URL}/search/${data}`);
  return response.data;
};

const authServices = {
  sounds,
  findSounds,
};

export default authServices;
