import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../Button';
import Form from './Form';

export const FileUpload = ({ control, name, onSelect, defaultValue, setErrorFile, required, opcional }) => {
    const inputRef = useRef(null)
    const [filename, setFilename] = useState(null);

    useEffect(() => {
        if (!defaultValue) return

        setFilename(defaultValue ?? 'no hay archivo');
    }, [defaultValue])

    const triggerSelectFile = () => {
        inputRef.current.click()
    }

    const saveImage = (onChange, value) => {
        setFilename(value ? value.name : 'no hay archivo');

        if (!value) return
        if (onSelect) {
            onSelect(value)
        }

        onChange(value)
        // console.log("Fichero elegido", value)
    }

    return (
        <>
            <Form.FormItem control={control} name={name} value={defaultValue}
                render={
                    ({ onChange, errorMsgComponent }) => {
                        return (
                            <>
                                {/* <button type="button" onClick={triggerSelectFile} className="opacity-hover cursor-pointer file-btn">
                                </button> */}

                                <Button hoverDirection="left" className="inline mx-auto" onClick={triggerSelectFile}>
                                    <span>
                                        <span className="light">subir</span>
                                        <strong>archivo</strong>
                                        {required &&
                                            <strong>*</strong>
                                        }

                                        {opcional &&
                                            <span className="light"> (opcional)</span>

                                        }
                                    </span>
                                </Button>

                                <div className="">
                                    <span>{filename}</span>
                                </div>

                                <input
                                    style={{ display: 'none' }}
                                    ref={inputRef} type="file" accept=".png, .jpg, .jpeg, .mp4, .mov"
                                    onChange={(e) => saveImage(onChange, e.target.files[0])} />

                                <div className="file-btn_error-msg">

                                    {errorMsgComponent()}
                                </div>
                            </>
                        )
                    }
                } >
            </Form.FormItem>
        </>
    )
}