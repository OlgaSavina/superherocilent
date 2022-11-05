import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'http://localhost:4444',
    timeout: 10000
  });