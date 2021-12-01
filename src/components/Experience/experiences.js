import music from '../../assets/portada_musica_web.jpg'
import parches from '../../assets/portada_parches_web.jpg'
import gastronomia from '../../assets/portada_gastronomia_web.jpg'
import espacio from '../../assets/portada_espacio_web.jpg'
import compra from '../../assets/compras_exp.jpg'

export const experiences = [
    {
        id: 1,
        title: "MÚSICA",
        description: "Una selección musical curada para generar un ambiente agradable para todos, en un espacio donde el consumo es un acto solidario.",
        image: music,
    },
    {
        id: 2,
        title: "PARCHES Y PUNTOS DE ENCUENTROS",
        description: "Tendremos un mobiliario muy cómodo y grandes spots instagrameables donde podrás reunirte con los tuyos a disfrutar la experiencia Vassar.",
        image: parches,
    },
    {
        id: 3,
        title: "ALMACENAMIENTO PARA COMPRAS",
        description: "Vassar es una feria para toda la familia. Hombres, mujeres, niños y jóvenes encontrarán experiencias y marcas con las que se sentirán identificados.",
        image: compra,
    },
    {
        id: 4,
        title: "GASTRONOMÍA",
        description: "En Vassar encontrarás una amplia oferta gastronómica dentro de nuestra zona de comidas. Además, dispondremos de un gran mercado en el que podrás comprar ingredientes frescos y exclusivos de nuestros emprendedores.",
        image: gastronomia,
    },
    // {
    //     id: 5,
    //     title: "CULTURA",
    //     description: "Morbi egestas vulputate rutrum. Integer consectetur, ante sed dapibus bibendum, metus ipsum feugiat odio, ut sodales ante quam sed dui. Duis fermentum bibendum mollis. Nullam dapibus interdum enim efficitur congue.",
    //     image: cultura,
    // },
    {
        id: 6,
        title: "ESPACIO PARA TODOS",
        description: "Porque queremos que disfrutes de la feria cómodamente, hemos dispuesto una serie de lockers para que guardes tus pertenencias de forma segura.",
        image: espacio,
    },
]