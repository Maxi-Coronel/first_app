import React from "react";
import './ItemCount.css'
import Efecto from "../Efecto";


const Item = (item) => {

    return (
        <div className='tarjeta'>
            <div className='presentacion'>
                <h2>{item.item.titulo}</h2>
                <img className='img' src={item.item.img} alt={item.item.titulo} />
                <h3>{item.item.precio}</h3>
                <Efecto stock={item.item.stock}/>
            </div>
            <button className='agregar'>Agregar al carrito</button>
        </div>
    )
}

export default Item;