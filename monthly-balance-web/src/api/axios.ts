import axios from "axios";

const API_BASE_URL = "http://localhost:5093";

const apiDataService = axios.create({
  baseURL: API_BASE_URL,
});

// Interceptor para incluir o token JWT nas requisições
apiDataService.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para tratar erros de resposta
apiDataService.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na API:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiDataService;
