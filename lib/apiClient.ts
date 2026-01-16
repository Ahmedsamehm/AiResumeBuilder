import axios from "axios";

export const apiClient = axios.create({
  baseURL: "/api/resumes",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// Add interceptors once here
apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    // Handle 401, 500, etc. globally
    return Promise.reject(error);
  }
);
