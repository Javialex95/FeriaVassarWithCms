import React from 'react'
import Form from './Form';

export const Input = ({ control, name, placeholder, type, defaultValue, ...props }) => {

    return (
        <Form.FormItem control={control} name={name} value={defaultValue}
            render={
                ({ onChange, errorMsgComponent }) => {
                    return (
                        <>
                            {
                                (type === 'textarea') ?
                                    <textarea defaultValue={defaultValue} cols="30" rows="5" placeholder={placeholder} {...props}
                                        onChange={(e) => { onChange(e.target.value) }}>
                                    </textarea>
                                    :
                                    <input defaultValue={defaultValue} type="text" placeholder={placeholder} {...props}
                                        onChange={(e) => { onChange(e.target.value) }} />
                            }
                            <div className="error-msg">
                                {errorMsgComponent()}
                            </div>
                        </>

                    );
                }
            } >
        </Form.FormItem>
    );
}