import React from "react";
import './Items.css';

const ItemDetail = ( {items} ) => {

    return (
            <div className='flex detail'>
                <div className='pad-5'>
                    <img className='imgDetail' src={items.img} alt={items.titulo} />
                </div>
                <div className='pad-5'>
                    <h2 className>{items.titulo}</h2>
                    <p>{items.precio}</p>
                    <h4>{items.tituloDescripcion}</h4>
                    <p>{items.descripcion}</p>
                </div>
            </div>
    )
}

export default ItemDetail;