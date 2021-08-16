import axiosInstance from "./apiService";

export const getMembers = () => axiosInstance.get("/members");

export const postMembers = (membersData) =>
  axiosInstance.post("/members", {
    id: 0,
    name: membersData.name,
    image: membersData.image,
    description: membersData.description,
    facebookUrl: membersData.facebookUrl,
    linkedinUrl: membersData.linkedinUrl,
  });

export const putMembers = (id, membersData) =>
  axiosInstance.put(`/members/${id}`, {
    id: id,
    name: membersData.name,
    image: membersData.image,
    description: membersData.description,
    facebookUrl: membersData.facebookUrl,
    linkedinUrl: membersData.linkedinUrl,
  });

export const deleteMembers = (id) => axiosInstance.delete(`members/${id}`);
