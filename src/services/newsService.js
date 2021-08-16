import axiosInstance from "./apiService";

export const getNews = () => axiosInstance.get("/news");

export const getSingleNew = (id) => {
  return axiosInstance.get(`/news/${id}`);
};
export const createNews = (news) => axiosInstance.post("/news", news);

export const editNews = (news) => axiosInstance.put("/news/" + news.id, news);

export const deleteNews = (news) => axiosInstance.delete("/news/" + news.id);
