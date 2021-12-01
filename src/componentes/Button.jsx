import React from "react";

const Button = (props) => {

    return(
        <>
            <button disabled={props.num == 0} className='borderRad-5 agregar' id={props.id} onClick={()=>props.onAdd(props.num)}>{props.texto}</button>
        </>
    )
}

export default Button