import React, {useState} from "react";
import Button from "./Button";

const ItemCount = (props) => {

    const [number, setNumber] = useState(0)

    const add = () => {
        if (number < props.stock) {
            setNumber(number +1)
        }
    };
    
    const resta = () => {
        if (number > 0) {
            setNumber(number -1)
        }
    };

    return(
        <div>
            <div className='flex borderRad-5 contador'>
                <button className='boton' onClick={resta}>-</button>
                <p>{number}</p>
                <button className='boton' onClick={add}>+</button>
            </div>
            <Button id={props.id} texto='Agregar al carrito' num={number}/>
        </div>
    )
}

export default ItemCount