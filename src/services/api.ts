import axios from 'axios'
import apiUrl from './apiUrl'

const api = axios.create({
    baseURL: apiUrl, 
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const Login = async (username: string, password: string) => {
    
    const data = {
        email: username,
        password: password
    }
    return api.post('/api/login', data)
    .then(response => response.data)
    .catch(error => {
        console.error('Login error', error);
        throw error;
    })
}


export const getConversation = async () => {
  return api.get('/api/conversations')
  .then(response => response.data)
  .catch(error => {
    console.error('Get Conversations Error', error);
    throw error;
  })
}