import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { wordUpBreak } from '../Animations/wordUpBreak';

export const WordUp = ({ text, isActive }) => {
    const [words, setWords] = useState([]);

    useEffect(() => {
        setWords([text])
    }, [text])

    return (
        <div className="wordUp">
            {
                words.map((word, index) => {
                    return (
                        <motion.div className="wordUp_word" key={index}
                        variants={wordUpBreak}
                        custom={index}
                        initial="hidden"
                        animate={isActive ? "visible" : "hidden"}
                        dangerouslySetInnerHTML={{ __html: word}}
                            >
                        </motion.div>
                    )
                })
            }
        </div>
    )
}
