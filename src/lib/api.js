import axios from "axios";

// const BaseUrl = 'https://fullstack-urielnaiman.herokuapp.com';
const BaseUrl = 'http://localhost:5500';

function getAuthConfig(token) {
  return ({
    headers: {
      Authorization: 'Bearer ' + token,
    }
  });
}

export async function logIn(data) {
  const response = await axios.post(`${BaseUrl}/users/login`, { data, userId:"1" });
  return response.data;
}

export async function createUser(data) {
  const response = await axios.post(`${BaseUrl}/users/signup`,  { data, userId:"1" }); 
  return response.data.user;
}

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


// export async function deleteUser(userId) {
//   await axios.delete(`${BaseUrl}/todos/${userId}`);
// }