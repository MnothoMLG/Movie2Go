import axios from 'axios';

console.log('Base url =====> ', process.env.BASE_URL);
const client = axios.create({
  //for all requests that require a user to be authenticated
  baseURL: process.env.BASE_URL,
});

export { client };
