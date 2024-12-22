import axios from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[]
  }

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '69d6931e7d1c4ff9ba481cd5b563f1b4'
    }
})