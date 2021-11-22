import React from "react";
import './Items.css'
import Efecto from "../Efecto";
import { Link } from 'react-router-dom'
import Button from '../Button'


const Item = ({item}) => {

    return (
        <div className='flex borderRad-5 tarjeta'>
            <div className='flex black presentacion' key={item.id}>
                <Link className='flex imgConteiner' to={`/product/${item.id}`}>
                    <img className='img' src={item.img} alt={item.titulo} />
                </Link>
                <h5>{item.titulo}</h5>
                <p>{item.precio}</p>
                <Efecto stock={item.stock}/>
                <Button id={item.id} texto='Agregar al carrito'/>
            </div>
        </div>
    )
}

export default Item;