import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('Hola Mundo');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault(); /// bloquea el envio del form el comportamiento por defecto
        if (inputValue.trim().length > 2) {
            setCategorias(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    };
    return ( <
        form onSubmit = { handleSubmit } > { /* <h2>Add category</h2> */ } { /* <h1> { inputValue }</h1> */ } <
        input type = "text"
        value = { inputValue }
        onChange = { handleInputChange }
        /> < /
        form >
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}