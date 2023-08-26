import axios from "axios";
import config from "../../../project.config.js";

const URL = `${config.ENDPOINT}/api/${config.API_VERSION}/push-notification`;

const saveToken = async (data) => {
  const response = await axios.post(`${URL}/saveToken`, data, {
    headers: {
      "Content-Type": "Application/json",
    },
  });
  return response.data;
};

const premiumServices = {
  saveToken,
};

export default premiumServices;
