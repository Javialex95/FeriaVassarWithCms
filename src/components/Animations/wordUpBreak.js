export const wordUpBreak = {
    visible: index => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: index * 0.15,
        },
    }),
    hidden: {
        opacity: 0.8,
        y: 15,
    },
}

export const wordUpBreak1 = {
    visible: index => ({
        y: 0,
        opacity: 1,
        fontSize: '50px',
        transition: {
            duration: 0.2,
        },
    }),
    hidden: {
        fontSize: '45px',
        opacity: 0.8,
        y: 15,
        transition: {
            duration: 0.2,
        },
    },
}

export const wordUpBreak2 = {
    visible: index => ({
        y: 0,
        opacity: 1,
        fontSize: '30px',
        transition: {
            duration: 0.2,
        },
    }),
    hidden: {
        fontSize: '25px',
        opacity: 0.8,
        y: 15,
        transition: {
            duration: 0.2,
        },
    },
}