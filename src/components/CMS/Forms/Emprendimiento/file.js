import { uploadImage } from "../../../lib/api";

export const generateForm = (imgName) => {

    const formData = new FormData();
    formData.append(
        'archivo',
        imgName,
        imgName.name
    );

    return formData

}


export const imagesValidator = async (userId, imgFile, imgName) => {

    console.log(imgFile)

    if (typeof imgFile !== 'string') {
        const resultado = await uploadImage(userId, generateForm(imgFile), imgName);
        console.log(resultado)
        if (resultado.status === 200) {
            return true
        } 
    }

    return false
}