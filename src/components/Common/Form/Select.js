import React, { useEffect, useState } from 'react'
import Form from './Form';
import { arrowDown } from '../Icons';
import { useOuterClick } from '../Hooks/useOutsideClick';

// options -> [{value: string, label: string, id: number|string}]
export const Select = ({ control, name, placeholder, options, defaultValue }) => {
    const innerRef = useOuterClick(ev => outsideClick());
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("")
    const [localDefault, setLocalDefault] = useState({value: null});

    useEffect(() => {
        if (!defaultValue) return
        setLocalDefault(defaultValue)
        setValue(defaultValue.label)
    }, [defaultValue])

    const onSelect = (onChangeValidation, option) => {
        onChangeValidation(option.value)
        setIsOpen(false);
        setValue(option.label)
    }

    const toggleOpen = () => {
        setIsOpen(!isOpen);

        const select_arrow = document.querySelector('.select-arrow');
        select_arrow.classList.toggle('selected_arrow')
    }

    function outsideClick () {
        if (!isOpen) return
        
        setIsOpen(false)
        const select_arrow = document.querySelector('.select-arrow');
        select_arrow.classList.remove('selected_arrow')
    }

    return (
        <Form.FormItem control={control} name={name} value={localDefault.value}
            render={
                ({ onChange, errorMsgComponent }) => {
                    return (
                        <>
                            <div ref={innerRef} className="select_container" onClick={toggleOpen}>
                                <input readOnly value={value} type="text" placeholder={placeholder} />
                                <div className="select-arrow_container">
                                    <div className="select-arrow_wrapper">
                                        <div className="select-arrow transition">
                                            <div className="select-arrow_icon">
                                                {arrowDown}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    isOpen &&
                                    <div className="select_options">
                                        {
                                            options.map((option, index) => {
                                                return (
                                                    <div className="select_options_item cursor-pointer transition"
                                                        key={index}
                                                        onClick={() => onSelect(onChange, option)}>
                                                        {option.label}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </div>
                            <div className="error-msg">
                                {errorMsgComponent()}
                            </div>
                        </>
                    )
                }
            } >
        </Form.FormItem>
    );
}