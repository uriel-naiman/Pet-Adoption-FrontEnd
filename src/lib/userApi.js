import axios from "axios";
import { getAuthConfig } from "../context/auth";

// const BaseUrl = 'https://fullstack-urielnaiman.herokuapp.com';
const BaseUrl = 'http://localhost:5500';



export async function logIn(data) {
  const response = await axios.post(`${BaseUrl}/users/login`, { data, userId:"1" });
  return response.data;
}

export async function createUser(data) {
  const response = await axios.post(`${BaseUrl}/users/signup`,  { data, userId:"1" }); 
  return response.data.user;
}

export async function updateUser(data, userId, token) {
    const response = await axios.put(`${BaseUrl}/users/${userId}`, 
                                                { data, userId }, 
                                            getAuthConfig(token));
    return response.data;
}

export async function getUsers(token) {
  const response = await axios.get(`${BaseUrl}/users`, getAuthConfig(token));
  return response.data.users;
}

