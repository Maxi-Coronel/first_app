import React from "react";
import './Items.css';
import ItemCount from "../ItemCount";

const ItemDetail = ( {items} ) => {

    return (
            <div className='flex detail'>
                <div className='pad-5'>
                    <img className='imgDetail' src={items.img} alt={items.titulo} />
                </div>
                <div className='pad-5'>
                    <h2>{items.titulo}</h2>
                    <p>{items.precio}</p>
                    <h4>{items.tituloDescripcion}</h4>
                    <p>{items.descripcion}</p>
                    <ItemCount stock={items.stock} id={items.id}/>
                </div>
            </div>
    )
}

export default ItemDetail;