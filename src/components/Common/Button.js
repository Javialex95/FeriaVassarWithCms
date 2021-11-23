import React from 'react'
import { rightArrow, rightArrowLong } from './Icons';

export const Button = ({ children, lastWord, onClick, className}) => {

    const doClick = () => {
        if (onClick) onClick()
    }

    return (
        <div className={`primary-button ${className}`} onClick={doClick}>
            <div className="relative">
                <div className="primary-button_text">
                    {children} <b>{lastWord}</b>
                </div>
                <div className="primary-button_icon">
                    <div className="normal">
                        {rightArrow}
                    </div>
                    <div className="hover">
                        {rightArrowLong}
                    </div>
                </div>
            </div>
        </div>
    )
}
