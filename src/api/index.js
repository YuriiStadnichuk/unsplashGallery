import axios from 'axios';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com/photos',
});

export const setToken = token => {
  unsplashApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete unsplashApi.defaults.headers.common['Authorization'];
};

export default unsplashApi;

