import { apiClient } from "../apiClient";

export const getSuperheros = () => apiClient.get(`/superheros`);
//export const getSuperhero = (superheroId) => apiClient.get(`/superheros/${superheroId}`);