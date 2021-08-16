import axiosInstance from "./apiService";

const ACTIVITIES_PATH = "/activities";

export const listActivities = () => axiosInstance.get(ACTIVITIES_PATH);
export const SearchActivities = (search)=>axiosInstance.get(`/activities?name=${search}`)
export const getActivitie = (id) => axiosInstance.get(`${ACTIVITIES_PATH}/${id}`);

export const createActivity = (activityData) => axiosInstance.post(ACTIVITIES_PATH, activityData);

export const editActivity = ({ id, name, description, image }) => axiosInstance.put(
  `${ACTIVITIES_PATH}/${id}`,
  { name, description, image }
);

export const deleteActivity = (id) => axiosInstance.delete(
  `${ACTIVITIES_PATH}/${id}`
);