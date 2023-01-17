import axios from './axiosClient';

export const fetchSpeciesAPICall = (payload: { page: number }) => {
  const { page } = payload;
  return axios.get(`species/?page=${page}`);
};
