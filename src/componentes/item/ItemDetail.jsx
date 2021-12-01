import React from "react";
import './Items.css';
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ( {items, onAdd, irCart} ) => {

    return (
        <div className='flex detail'>
            <div className='pad-5 conteinerImg'>
                <img className='imgDetail' src={items.img} alt={items.titulo} />
            </div>
            <div className='pad-5'>
                <h2>{items.titulo}</h2>
                <p>{items.precio}</p>
                <h4>{items.tituloDescripcion}</h4>
                <p>{items.descripcion}</p>
                <p>Cantidad disponible: {items.stock}</p>
                {irCart ? <Link to="/cart">Terminar compra</Link>
                        : <ItemCount stock={items.stock} id={items.id} onAdd={onAdd}/>}
                
                
            </div>
        </div>
    )
}

export default ItemDetail;