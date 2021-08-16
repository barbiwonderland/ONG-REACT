import axiosInstance from ".apiService";

export const listUsers = () => axiosInstance.get('/users');

export const createUser = user => axiosInstance.post('/users', user);

export const editUser = user => axiosInstance.put(`/users/${user.id}`, user);

export const deleteUser = id => axiosInstance.delete(`/users/${id}`);