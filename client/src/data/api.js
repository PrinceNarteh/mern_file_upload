import axios from "axios";

const baseURL = "http://localhost:4000/api";

export const singleFileUpload = async (data) => {
  try {
    await axios.post(`${baseURL}/single-upload`, data);
  } catch (error) {
    throw error;
  }
};

export const multipleFileUpload = async (data) => {
  try {
    await axios.post(`${baseURL}/multiple-upload`, data);
  } catch (error) {
    throw error;
  }
};
