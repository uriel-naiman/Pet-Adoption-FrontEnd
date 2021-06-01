import axios from "axios";
import { getAuthConfig } from "../context/auth";

// const BaseUrl = 'https://fullstack-urielnaiman.herokuapp.com';
const BaseUrl = 'http://localhost:5500';


export async function createPet(data, userId, token) {
    const response = await axios.post(`${BaseUrl}/pets`,  { data, userId }, getAuthConfig(token)); 
    return response.data;
    }
    
    export async function uploadPetImage(id, formData, token) {
      const response = await axios.put(`${BaseUrl}/pets/picture_url/${id}`,  formData, 
      {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
        }
    }); 
      return response.data;
      }
    
    export async function updatePet(data, userId, token, petId) {
      const response = await axios.put(`${BaseUrl}/pets/${petId}`,  { data, userId }, getAuthConfig(token)); 
      console.log(response);
      return response.data;
      }

      export async function getPets(token) {
        const response = await axios.get(`${BaseUrl}/pets`, getAuthConfig(token));
        return response.data;
      }
      
      export async function getPetsByType(data) {
        const response = await axios.post(`${BaseUrl}/pets/basic`, { data });
        return response.data;
      }
      
      export async function getPetsByUserId(userId, token) {
        const response = await axios.get(`${BaseUrl}/pets/user/${userId}`, getAuthConfig(token));
        return response.data;
      }
      
      export async function getSavedPetsByUserId(userId, token) {
        const response = await axios.get(`${BaseUrl}/pets/user/${userId}/saved`, getAuthConfig(token));
        return response.data;
      }
      
      export async function getIsPetSaved(userId, petId, token) {
        const response = await axios.get(`${BaseUrl}/pets/${petId}/user/${userId}`, getAuthConfig(token));
        return response.data;
      }
      
      export async function savePet(userId, petId, token) {
        const data = {};
        const response = await axios.post(`${BaseUrl}/pets/${petId}/user/${userId}`, {data} , getAuthConfig(token));
        return response.data;
      }
      
      export async function unSavePet(userId, petId, token) {
        const response = await axios.delete(`${BaseUrl}/pets/${petId}/user/${userId}`, getAuthConfig(token));
        return response.data;
      }
      
      export async function returnPet(userId, petId, token) {
        const data = {};
        const response = await axios.put(`${BaseUrl}/pets/${petId}/user/${userId}/return`, {data} , getAuthConfig(token));
        return response.data;
      }
      
      export async function fosterPet(userId, petId, token) {
        const data = {};
        const response = await axios.put(`${BaseUrl}/pets/${petId}/user/${userId}/foster`, {data} ,getAuthConfig(token));
        return response.data;
      }
      
      export async function adoptPet(userId, petId, token) {
        const data = {};
        const response = await axios.put(`${BaseUrl}/pets/${petId}/user/${userId}/adopt`, {data} ,getAuthConfig(token));
        return response.data;
      }
      
      export async function deletePet(userId, petId, token) {
        const response = await axios.delete(`${BaseUrl}/pets/${petId}/user/${userId}/delete`,getAuthConfig(token));
        return response.data;
      }
      