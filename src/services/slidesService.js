import axiosInstance from "./apiService";

export const slideList = async () => await axiosInstance.get("/slides");


export const newSlide = (
  slideData = {
    id: "",
    name: "",
    description: "",
    image: "",
    order: "",
    user_id: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
  }
) => {
  return axiosInstance.post("/slides", slideData);
};

export const getSingleSlide = (id) => {
  return axiosInstance.get(`/slides/${id}`);
};

export const updateSlide = (
  slideData = {
    id: "",
    name: "",
    description: "",
    image: "",
    order: "",
    user_id: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
  }
) => {
  return axiosInstance.put(`/slides/${slideData.id}`, slideData);
};

export const deleteSlide = (id) => {
  return axiosInstance.delete(`/slides/${id}`);
};
