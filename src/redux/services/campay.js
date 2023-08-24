import axios from "axios";
import config from "../../../project.config.js";

const URL = `${config.PAYMENT_ENDPOINT}/api/${config.API_VERSION}/mobile-money`;

const campayPayment = async (data) => {
  const response = await axios.post(`${URL}/mobile-money-payment`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const campayServices = {
  campayPayment,
};

export default campayServices;
