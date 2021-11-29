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
            duration: 1,
        },
    }),
    hidden: {
        fontSize: '47.5px',
        opacity: 0.6,
        y: 15,
        transition: {
            duration: 1,
        },
    },
}

export const wordUpBreak2 = {
    visible: index => ({
        y: 0,
        opacity: 1,
        fontSize: '30px',
        transition: {
            duration: 1,
        },
    }),
    hidden: {
        fontSize: '27.5px',
        opacity: 0.6,
        y: 15,
        transition: {
            duration: 1,
        },
    },
}