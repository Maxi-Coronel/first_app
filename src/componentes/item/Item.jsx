import React, {useState} from "react";
import './Items.css'
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount";


const Item = ({item, onAdd}) => {
    const [nuevoStock, setNuevoStock] = useState(item.stock)

    return (
        <div className='flex borderRad-5 tarjeta'>
            <div className='flex black presentacion' key={item.id}>
                <Link className='flex imgConteiner' to={`/product/${item.id}`}>
                    <img className='img' src={item.img} alt={item.titulo} />
                </Link>
                <h5>{item.titulo}</h5>
                <p>{item.precio}</p>
                <ItemCount stock={item.stock} id={item.id} set={setNuevoStock} new={nuevoStock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default Item;