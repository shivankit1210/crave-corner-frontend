import axios from "axios";

const API_URL = "https://restaurantadmin.onrender.com/api/admin"; //backend URL

export const loginAdmin = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials, {
      withCredentials: true,  // This is necessary for sending tokens/cookies with requests
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
