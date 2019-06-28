import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://recipes-2aca0.firebaseio.com/'
});

export default instance;