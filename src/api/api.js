import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nataliya-backender.org.kg/',
});

export const register = async (payload) => {
  try {
    const response = await instance.post('users/register/', payload);
    return response;
  } catch (error) {
    console.log('Registration failed', error);
  }
};
export const login = async (payload) => {
  try {
    const response = await instance.post('users/login/', payload);
    // instance.head.auth = `Barrier ${response.data.tokens}`
    return response;
  } catch (error) {
    console.log('Login failed', error);
  }
};
export default instance;
