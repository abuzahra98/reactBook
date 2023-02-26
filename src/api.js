import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:443/'
  // baseURL: 'https://node-apis.herokuapp.com/'

});