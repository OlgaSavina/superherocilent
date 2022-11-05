import { apiClient } from "../apiClient";

export const createSuperhero = (value) => apiClient.post('/superheros', value)