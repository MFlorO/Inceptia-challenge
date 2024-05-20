import axios from "axios";

const inceptiaApi = axios.create({
  baseURL: 'https://admindev.inceptia.ai/api/v1'
})

// Interceptor para añadir el token a cada solicitud
inceptiaApi.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Asumiendo que almacenas el token en localStorage
      if (token) {
        config.headers['Authorization'] = `JWT ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

export default inceptiaApi