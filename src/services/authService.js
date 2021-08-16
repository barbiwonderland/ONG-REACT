import axiosIntance from "./apiService";

export const login = (email, password) =>
  axiosIntance.post("/login", { email, password });

export const register = (
  personData = {
    name: "",
    surname: "",
    email: "",
    password: "",
  }
) => axiosIntance.post("/register", personData);
