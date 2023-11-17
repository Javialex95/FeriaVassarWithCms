import axios from "axios";

// Este es de AWS pero está inactivo
export const urlBase = "https://feriavassar.com/node_vassar";

// Para el strapi
export const urlStrapi = "https://feria-vassar.herokuapp.com";

// Api de heroku para el cms
export const urlBaseCMS = "https://feria-vassa-cms.herokuapp.com";

export const getPerfiles = async () => {
  const url = `${urlBaseCMS}/api/perfiles`;
  return await axios.get(url);
};

export const getPerfil = async (id) => {
  const url = `${urlBaseCMS}/api/perfiles/${id}`;
  return await axios.get(url);
};

export const searchPerfiles = async (search) => {
  const url = `${urlBaseCMS}/api/perfiles/search/${search}`;
  return await axios.get(url);
};

export const login = async (user) => {
  const url = `${urlBaseCMS}/api/perfiles/user`;
  return await axios.post(url, user);
};

export const updateProfile = async (data, id) => {
  const url = `${urlBaseCMS}/api/perfiles/user/edit/${id}`;
  return await axios.put(url, data);
};

export const uploadImage = async (id, formData, tipo) => {
  const urlImagen = `${urlBaseCMS}/api/upload/${id}/${tipo}`;
  return await axios.put(urlImagen, formData);
};

export const getPosts = async () => {
  const url = `${urlStrapi}/blogs`;
  return await axios.get(url);
};

export const getPost = async (id) => {
  const url = `${urlStrapi}/blogs/${id}`;
  return await axios.get(url);
};

// admin
export const addEmpren = async (user) => {
  const url = `${urlBaseCMS}/api/perfiles/save-perfil`;
  return await axios.post(url, user);
};

export const addBulkEmpren = async (formData) => {
  const url = `${urlBaseCMS}/api/upload-bulk`;
  return await axios.put(url, formData);
};

export const deleteEmpren = async (id) => {
  const url = `${urlBaseCMS}/api/perfiles/delete-perfil/${id}`;
  return await axios.delete(url);
};

// Pages
export const getGaleria = async () => {
  const url = `${urlStrapi}/galeria`;
  return await axios.get(url);
};

export const getExperiencia = async () => {
  const url = `${urlStrapi}/experiencia`;
  return await axios.get(url);
};

export const getFaqs = async () => {
  const url = `${urlStrapi}/faqs`;
  return await axios.get(url);
};

export const getPatrocinadores = async () => {
  const url = `${urlStrapi}/patrocinadores`;
  return await axios.get(url);
};

export const getEsVassar = async () => {
  const url = `${urlStrapi}/es-vassar`;
  return await axios.get(url);
};

export const getHome = async () => {
  const url = `${urlStrapi}/home`;
  return await axios.get(url);
};
