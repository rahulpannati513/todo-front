import axios from "axios";

// Using the environment variable or defaulting to proxy path for development
const BASE_REST_API_URL = import.meta.env.VITE_API_URL || "/api/todos";

export const getAllTodos = () => axios.get(BASE_REST_API_URL);
export const saveTodo = (todo) => axios.post(BASE_REST_API_URL, todo);
export const getTodo = (id) => axios.get(BASE_REST_API_URL + "/" + id);
export const updateTodo = (id, todo) =>
  axios.put(BASE_REST_API_URL + "/" + id, todo);
export const deleteTodo = (id) => axios.delete(BASE_REST_API_URL + "/" + id);
export const completeTodo = (id) =>
  axios.patch(BASE_REST_API_URL + "/" + id + "/complete");
export const inCompleteTodo = (id) =>
  axios.patch(BASE_REST_API_URL + "/" + id + "/in-complete");
