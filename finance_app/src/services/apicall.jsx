import axios from "axios";

// Set up a base URL for your API
const API_BASE_URL = "http://localhost:8001";

// Create a reusable Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiCall = async (method, url, data = null, headers = {}) => {
  try {

    const response = await axiosInstance({
      method,
      url,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("API call error:",error.response ? error.response.data : error.message);
    throw error;
  }
};



export default apiCall