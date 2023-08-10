import axios from "axios";
import config from "../../../project.config.js";

const URL = `${config.ENDPOINT}/api/${config.API_VERSION}/sub-plan`;

const allPlans = async () => {
  const response = await axios.get(`${URL}/plans`);
  return response.data;
};

const premiumServices = {
  allPlans,
};

export default premiumServices;
