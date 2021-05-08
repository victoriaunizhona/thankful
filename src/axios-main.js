import axios from 'axios';

const  instance = axios.create({baseURL: 'https://thankful-17ff4-default-rtdb.firebaseio.com/'});

export default instance;
