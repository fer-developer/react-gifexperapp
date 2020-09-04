import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs(category);
    // useEffect ( () => {
    //     getGifs(category)
    //             .then( imgs => setImages(imgs));
    // },[ category]);


    // getGifs();
    return ( <
        >
        <
        h3 > { category } < /h3>  { loading ? 'Cargando.....' : 'Datos cargados' } <
        div className = "card-grid" >
        <
        ol >

        {
            images.map(item => {
                return ( < GifGridItem key = { item.id } {...item }
                    />
                )
            })
        } <
        /ol> <
        /div>

        <
        />
    )
}

{
    /* <h2>{count}</h2>
                    <button onClick= {() => setCount(count + 1)}>Test</button> */
}

{
    /* {
                            images.map( ({id, title}) => {
                                //console.log(title);
                                return (<li key = {id}> {title } </li>);
                                //  <li key = {id}> {title } </li>
                            }) img = {item}
                        } */
}