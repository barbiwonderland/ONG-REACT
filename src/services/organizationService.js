import axiosInstance from './apiService';

export const getOrganization = axiosInstance.get('/organization');

export const postOrganization = (organizationData = {
  id: 0,
  name: '',
  logo: '',
  short_description: '',
  long_description: '',
  welcome_text: '',
  address: '',
  phone: '',
  cellphone: '',
  created_at: '',
  updated_at: '',
  deleted_at: ''
}) => axiosInstance.post('/organization', organizationData);
