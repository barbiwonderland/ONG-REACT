import axiosIntance from "./apiService";

export const getAboutUs = () => axiosIntance.get("/organization");
