import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categorias = ['One Punch','Samurai X','Dragon Ball'];
    const [categorias, setCategorias] = useState(['One Punch']);
    // const handleAdd = () => {
    //     //categorias.push('demo'); no se debe hacer esto
    //     // setCategorias([...categorias, 'demo']);
    //     setCategorias(['demo',...categorias]);
    // }
    return ( <
        >
        <
        h2 > GifExpertApp < /h2> <
        AddCategory setCategorias = { setCategorias }
        /> <
        hr / > { /* <button onClick = { handleAdd}>Agregar</button> */ } <
        ol > {
            categorias.map((category, i) => {
                // return <li key = {category}> {category} </li>
                return <GifGrid
                key = { category }
                category = { category }
                />
            })
        } <
        /ol> {
            /* {
                            categorias
                        } */
        } <
        />
    )
}