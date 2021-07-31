import axios from 'axios';



export const key = 'a255528e48839f53974d89a451b6242e35517a19';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;


