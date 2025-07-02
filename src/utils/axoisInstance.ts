import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const sessionId = import.meta.env.VITE_SESSION_ID;
const accountId = import.meta.env.VITE_ACCOUNT_ID;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json;charset=utf8",
  },
});

api.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      api_key: apiKey,
      session_id: sessionId,
    };
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 4000) {
      alert("Session Expired. Please Log In Again");
    }
    return Promise.reject(error);
  }
);

export { api as default, accountId, sessionId };
