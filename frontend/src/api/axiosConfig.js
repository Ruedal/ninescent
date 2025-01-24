import axios from 'axios';

// Axios 기본 설정
const instance = axios.create({
  baseURL: 'http://localhost:8080/api/items', // 백엔드 API 기본 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
