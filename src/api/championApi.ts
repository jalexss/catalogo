import axios from 'axios';

const championApi = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn'
})

export default championApi;