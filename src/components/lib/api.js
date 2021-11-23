import axios from 'axios'

export const urlBase = "https://feriavassar.com/node_vassar";
export const urlBaseCMS = "https://feriavassar.herokuapp.com";

export const getPerfiles = async () => {
    const url = `${urlBase}/api/perfiles`;
    return await axios.get(url)
}

export const getPerfil = async (id) => {
    const url = `${urlBase}/api/perfiles/${id}`;
    return await axios.get(url)
}

export const searchPerfiles = async (search) => {
    const url = `${urlBase}/api/perfiles/search/${search}`;
    return await axios.get(url)
}

export const login = async (user) => {
   const url = `${urlBaseCMS}/api/perfiles/user`;
   return await axios.post(url, user)
}

export const updateProfile = async (data, id) => {
    const url = `${urlBaseCMS}/api/perfiles/user/edit/${id}`;
    return await axios.put(url, data)
 }

export const uploadImage = async (id, formData, tipo) => {
    const urlImagen = `${urlBaseCMS}/api/upload/${id}/${tipo}`;
    return await axios.put(urlImagen, formData)
}
