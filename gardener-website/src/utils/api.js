import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Базовый URL для вашего сервера
});

export default API;
