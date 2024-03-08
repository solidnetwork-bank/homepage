import axios from 'axios';

const apiStage = 'dev';

export default axios.create({
  baseURL: `https://api.solidnetwork.xyz/${apiStage}/`
});