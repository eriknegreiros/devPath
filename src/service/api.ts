import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api-devpath.herokuapp.com',
    timeout: 20000,
  });

  
