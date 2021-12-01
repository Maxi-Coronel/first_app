import React, {useState} from "react";
import Button from "./Button";

const ItemCount = (props) => {

    const [number, setNumber] = useState(0)

    const add = () => {
        if (number < props.stock) {
            setNumber(number +1)
        }
    };
    
    const substract = () => {
        if (number > 0) {
            setNumber(number -1)
        }
    };

    return(
        <div>
            <div className='flex borderRad-5 contador'>
                <button className='boton' onClick={substract}>-</button>
                <p>{number}</p>
                <button className='boton' onClick={add}>+</button>
            </div>
            <div className='flex'>
                <Button id={props.id} texto='Agregar al carrito' setN={setNumber} num={number} onAdd={props.onAdd} stock={props.stock} set={props.set} new={props.new}/>
            </div>
        </div>
    )
}

export default ItemCount