import { apiClient } from "../apiClient";
import { getSuperheros } from "./getSuperheros";

export const deleteSuperhero = (superhero) => apiClient.delete(`/superheros/${superhero._id}`).then(getSuperheros);