import axios from 'axios';

// os dados estão no banco de dados do heroku 

const api = axios.create({
    // baseURL: process.env.REACT_APP_URLAPI
    baseURL: 'https://onlineshop-1.herokuapp.com/'
    // baseURL: 'http://127.0.0.1:5000'
  });

  export { api }