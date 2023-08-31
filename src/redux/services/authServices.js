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

const updateUser = async (data) => {
  const response = await axios.put(`${URL}/update/${data.id}`, data, {
    headers: {
      "Content-Type": "Application/json",
    },
  });

  return response.data;
};

const updatePassword = async (data) => {
  const response = await axios.put(`${URL}/update-password/${data.id}`, data, {
    headers: {
      "Content-Type": "Application/json",
    },
  });

  return response.data;
};

const forgotPassword = async (data) => {
  const response = await axios.post(`${URL}/forgot-password`, data, {
    headers: {
      "Content-Type": "Application/json",
    },
  });

  return response.data;
};

const resetPassword = async (data) => {
  const response = await axios.put(`${URL}/reset-password`, data, {
    headers: {
      "Content-Type": "Application/json",
    },
  });

  return response.data;
};

const planSubscription = async (data) => {
  const response = await axios.put(`${URL}/subscribe/${data.id}`, data, {
    headers: {
      "Content-Type": "Application/json",
    },
  });

  return response.data;
};

const deleteAccount = async (data) => {
  const response = await axios.delete(`${URL}/delete-user/${data.id}`, data, {
    headers: {
      "Content-Type": "Application/json",
    },
  });

  return response.data;
};

const authServices = {
  login,
  signup,
  updateUser,
  userDetails,
  deleteAccount,
  resetPassword,
  updatePassword,
  forgotPassword,
  planSubscription,
};

export default authServices;
