import React from "react";
import './Items.css'
import Efecto from "../Efecto";
import { Link } from 'react-router-dom'


const Item = ({item}) => {

    return (
        <div className='tarjeta'>
            <div className='presentacion' key={item.id}>
                <Link className='imgConteiner' to={`/product/${item.id}`}>
                    <img className='img' src={item.img} alt={item.titulo} />
                </Link>
                <h5>{item.titulo}</h5>
                <p>{item.precio}</p>
                <Efecto stock={item.stock}/>
            </div>
            <button className='agregar'>Agregar al carrito</button>
        </div>
    )
}

export default Item;