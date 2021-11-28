import React from "react";

const Button = (props) => {

    const clik = () => {
        if (props.num <= props.stock && props.num > 0) {
            console.log(`se agrego al carrito ${props.num}`);
            props.setN(0);
        }
    }

    return(
        <>
            <button className='borderRad-5 agregar' id={props.id} onClick={clik}>{props.texto}</button>
        </>
    )
}

export default Button