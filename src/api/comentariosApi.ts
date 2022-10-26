import axios from 'axios';

const comentariosApi = axios.create({
  baseURL: '/api'
})

export default comentariosApi;