import React from "react";

const Button = (props) => {

    return(
        <>
            <button className='borderRad-5 agregar' id={props.id}>{props.texto}</button>
        </>
    )
}

export default Button