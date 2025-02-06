import axios from "axios";
const API_URL = process.env.BACKEND_URL;
export const getCsrf = async () => {
  try {
    const response = await fetch(`${API_URL}/v2/csrf_token`);
    if (!response.ok) {
      throw new Error("Failed to fetch CSRF token");
    }
    const data = await response.json();
    return data.csrf_token;
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
    throw error;
  }
};

