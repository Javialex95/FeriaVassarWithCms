import { categorias } from "../components/CMS/Forms/Emprendimiento/categorias"

export const enableAnchorSmoothScroll = () => {
    const links = document.querySelectorAll('a.scrollTo')

    for (const link of links) {
        link.onclick = function clickHandler(e) {
            e.preventDefault()
            const href = this.getAttribute('href')
            if (!href) console.log("href element doesnt exists", href)
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
        }
    }
}

export const formatData = (data) => {
    const result = {...data}
    const jpgFields = ['galeria/0', 'galeria/1', 'galeria/2', 'galeria/3', 'galeria/4', 'imagenMenu'];
    const pngFields = ['logo'];
    const jpgFileFormat = {
        name: 'default.jpg',
        type: 'image/jpeg',
        size: 3000,
    };
    const pngFileFormat = {
        name: 'default.png',
        type: 'image/png',
        size: 3000,
    };

    jpgFields.forEach(jpgField => {
        if ( result[jpgField] ) {
            const temp = {...jpgFileFormat};
            temp.name = result[jpgField] ?? 'no hay archivo';
            result[jpgField] = temp;
        }
    });
    pngFields.forEach(pngField => {
        if ( result[pngField] ) {
            const temp = {...pngFileFormat};
            temp.name = result[pngField] ?? 'no hay archivo';
            result[pngField] = temp;
        }
    });

    if ( result.categoria ) {
        result.categoria = categorias.find(categ =>  categ.value == result.categoria );
        if (!result.categoria)
            throw 'Categoria no encontrada';
    } 

    return result
}