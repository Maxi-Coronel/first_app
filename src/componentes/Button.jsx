import React from "react";
import { useState } from "react";

const Button = (props) => {

    const [agrega, setAgrega] = useState()

    const clik = () => {
        setAgrega(props.num)
        console.log(`se agrego al carrito ${agrega}`)
    }


    return(
        <>
            <button className='borderRad-5 agregar' id={props.id} onClick={clik}>{props.texto}</button>
        </>
    )
}

export default Button