import { apiClient } from "../apiClient";

export const getSuperheros = () => apiClient.get(`/superheros`);
