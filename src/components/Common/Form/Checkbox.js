import React from 'react'
import Form from './Form';

export const Checkbox = ({ control, name, children, className, ...props }) => {
    const doChange = (event, notifyForm) => {
        const value = event.target.checked
        notifyForm(value)
    }

    return (
        <Form.FormItem control={control} name={name}
            render={
                ({ onChange, errorMsgComponent }) => {
                    return (
                        <div className="checkbox">
                            <div className={className}>
                                <input id="checkbox" type="checkbox" onChange={val => doChange(val, onChange)} />
                                <span className="checkmark"></span>

                                <label htmlFor="checkbox">
                                    {children}
                                </label>
                            </div>
                            <div className="error-msg">
                                {errorMsgComponent()}
                            </div>
                        </div>

                    );
                }
            } >
        </Form.FormItem>
    )
}
