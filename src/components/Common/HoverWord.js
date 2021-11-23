import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from 'react'
import { useHover } from './Hooks/useHover'

export const HoverWord = ({ hover, children, className }) => {
    const [ref, isHover] = useHover();

    useEffect(() => {

    }, [isHover])

    return (
        <span className={className} ref={ref}>
            <span className="word-hover_word">
                {children}
            </span>
            <AnimatePresence>
                {
                    isHover &&
                    <motion.span
                        animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
                        {hover}
                    </motion.span>
                }
            </AnimatePresence>
        </span>
    )
}
