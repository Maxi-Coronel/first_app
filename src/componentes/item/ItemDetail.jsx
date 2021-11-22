import React from "react";
import './Items.css';

const ItemDetail = ( {items} ) => {

    console.log(items);

    return (
            <div className='detail'>
                <div className='divDetail'>
                    <img className='imgDetail' src={items.img} alt={items.titulo} />
                </div>
                <div>
                    <h2>{items.titulo}</h2>
                    <p>{items.precio}</p>
                    <h4>{items.tituloDescripcion}</h4>
                    <p>{items.descripcion}</p>
                </div>
            </div>
    )
}

export default ItemDetail;