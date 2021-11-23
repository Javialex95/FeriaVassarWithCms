export const wordUpBreak = {
    visible: index => ({
        y: 0,
        fontWeight: 500,
        transition: {
            delay: index * 0.15,
        },
    }),
    hidden: {
        y: 15,
    },

}