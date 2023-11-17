import * as Yup from 'yup';

const requiredTxt = "ESTE CAMPO ES REQUERIDO";
const invalidEmailTxt = "INGRESE UN USUARIO";

// Aqui van lo que se coloque como 'name' del input, si el input
// Tiene un name de 'email' se coloca como la key del objeto del schema
export const loginSchema = Yup.object().shape({
    user: Yup.string().required(invalidEmailTxt).nullable(),
    password: Yup.string().required(requiredTxt).nullable(),
});