import { useState, useEffect } from 'react';

function useForm(callback, validate, setErrors, fields, errors) {
    const [values, setValues] = useState(fields);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        let name = ''
        let value = ''
        if (e.target.type === 'checkbox') {
            name = e.target.name
            value = e.target.checked ? 1 : 0
        } else {
            name = e.target.name
            value = e.target.value
        }
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback(values);
            }
        },
        [errors]
    );

    return { handleChange, handleSubmit, values };
};

export default useForm;