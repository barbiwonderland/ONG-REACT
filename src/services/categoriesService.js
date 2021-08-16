import axiosInstance from "./apiService";

export const listCategories = () => {
  return axiosInstance.get("/categories");
};

export const createCategory = (category) =>
  axiosInstance.post("/categories", {
    name: category._name,
    description: category.description,
  });

export const editCategories = (id, category) =>
  axiosInstance.put(`/categories/${id}`, {
    name: category._name,
    description: category.description,
  });

export const deleteCategories = (id) =>
  axiosInstance.delete(`/categories/${id}`);
