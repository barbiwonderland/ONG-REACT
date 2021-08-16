import axiosIntance from "./apiService";

const CONTACTS_URL = "/contacts";

export const postMessage = (messageData) =>
  axiosIntance.post(CONTACTS_URL, messageData);
