import * as Yup from 'yup';

const requiredTxt = "ESTE CAMPO ES REQUERIDO";
const invalidFile = "ARCHIVO INVALIDO";
const invalidFormat = "FORMATO INVALIDO";
const heavyFile = "ARCHIVO MUY PESADO";

const isImage = string => !!string.match(/^image\//);
const isFormat = (string, format) => (string.match(/\.[0-9A-Za-z-_]+$/)[0] ?? '').toLowerCase() === format.toLowerCase();

// eslint-disable-next-line no-unused-vars
const brandImageValidation = Yup.mixed()

    .required(requiredTxt)
    .test("fileType", invalidFile, (file) => {

        if (!file) return false;
        if (!file.type) return false;
        return !!isImage(file.type)

    }
    )
    .test("fileFormat", invalidFormat, (file) => {
        if (!file) return false;
        if (!file.name) return false;

        return !!isFormat(file.name, '.jpg');
    }
    )
    .test("fileSize", heavyFile, (file) => {
        if (!file) return false;
        if (!file.type) return false;
        if (!file.size) return false;

        if (isImage(file.type)) {
            return file.size <= 512_000;
        } else {
            return false
        }

    }
    );

    

const brandOptionalImageValidation = Yup.mixed()
    .test("fileType", invalidFile, (file) => {
        if (!file) return true;
        if (!file.type) return true;
        return isImage(file.type)
    }
    )
    .test("fileFormat", invalidFormat, (file) => {
        if (!file) return true;
        if (!file.name) return true;
        return !!isFormat(file.name, '.jpg');
    }
    )
    .test("fileSize", heavyFile, (file) => {
        if (!file) return true;
        if (!file.type) return true;
        if (!file.size) return true;

        if (isImage(file.type)) {
            return file.size <= 512_000;
        } else {
            return false
        }

    }
    );

export const emprenSchema = Yup.object().shape({
    nombre: Yup.string().required(requiredTxt).nullable(),
    categoria: Yup.string().required(requiredTxt).nullable(),
    descripcion: Yup.string().required(requiredTxt).nullable(),
    urlWeb: Yup.string().required(requiredTxt).nullable(),
    urlInsta: Yup.string().required(requiredTxt).nullable(),
    'galeriaImg1': brandOptionalImageValidation,
    'galeriaImg2': brandOptionalImageValidation,
    'galeriaImg3': brandOptionalImageValidation,
    'galeriaImg4': brandOptionalImageValidation,
    'galeriaImg5': brandOptionalImageValidation,

    imagenMenu: Yup.mixed()

        .test("fileType", invalidFile, (file) => {
            if (!file) return true;
            if (!file.type) return true;
            return isImage(file.type)
        }
        )
        .test("fileFormat", invalidFormat, (file) => {
            if (!file) return true;
            if (!file.name) return true;
            return !!isFormat(file.name, '.jpg');
        }
        )
        .test("fileSize", heavyFile, (file) => {
            if (!file) return true;
            if (!file.type) return true;
            if (!file.size) return true;

            if (isImage(file.type)) {
                return file.size <= 307_200;
            } else {
                return false
            }

        }
        ),
    logo: Yup.mixed()
        .required(requiredTxt)
        .test("fileType", invalidFile, (file) => {
            if (!file) return true;
            if (!file.type) return true;
            return !!isImage(file.type)
        }
        )
        .test("fileFormat", invalidFormat, (file) => {
            if (!file) return true;
            if (!file.name) return true;
            return !!isFormat(file.name, '.png');
        }
        )
        .test("fileSize", heavyFile, (file) => {
            if (!file) return true;
            if (!file.type) return true;
            if (!file.size) return true;

            if (isImage(file.type)) {
                return file.size <= 307_200;
            } else {
                return false
            }

        }
        ),
});