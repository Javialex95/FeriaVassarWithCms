import React, { useEffect, useImperativeHandle, useState } from 'react'
import { useController, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const FormItem = (props) => {
    const { name, control, value, render } = props;
    const [defaultValueSetted, setDefaultValueSetted] = useState(false);

    const controller = useController({
        name: name,
        control: control,
        defaultValue: value,
    });

    useEffect(() => {
        if (!props) return
        if (!props.value) return
        if (defaultValueSetted) return
        
        controller.field.onChange(props.value);
        setDefaultValueSetted(true);
    }, [props]);
    
    
    const onChange = (value) => {
        controller.field.onChange(value);
    }

    const errorMsgComponent = (message) => {
        return (
            <>
                {
                    controller.fieldState.error && (
                        <span className="">
                            {
                                message ?
                                    message :
                                    controller.fieldState.error.message
                            }
                        </span>
                    )
                }
            </>
        );
    }

    return (
        <>
            {render({ onChange, errorMsgComponent })}
        </>
    )
}


const FormContainer = React.forwardRef((props, ref) => {
    const { onSubmit, render, validationSchema, onErrors } = props;
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });

    async function __onSubmit(data) {
        if (onSubmit) onSubmit(data);
    };

    useImperativeHandle(ref, () => ({
        getErrors: () => errors
     }));

    useEffect(() => {
        if (onErrors) onErrors(errors)
    }, [errors, onErrors])

    function __doSubmit(e) {
        e.preventDefault()
        handleSubmit(__onSubmit)();
    }

    return (
        <form onSubmit={__doSubmit}>
            {render({ control })}
        </form>
    )
})

FormContainer.FormItem = FormItem;

export default (FormContainer);