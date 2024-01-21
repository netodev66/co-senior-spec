import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://kza9qtbptc.execute-api.us-east-1.amazonaws.com/dev/',
});
