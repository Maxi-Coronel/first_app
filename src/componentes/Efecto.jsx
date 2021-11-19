import React, {useState, useEffect} from "react";

const Efecto = (props) => {

    const [number, setNumber] = useState(0)

    /* useEffect(() => {
        console.log('solo 1 vez');
    }, []);

    
    useEffect(() => {
        console.log('en cada renderizacion');
    });
    
    useEffect(() => {
        console.log('cuando cambia estado/prop');
    }, [number]); */

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
        <div className='contador'>
            <button className='boton' onClick={resta}>-</button>
            <p>{number}</p>
            <button className='boton' onClick={add}>+</button>
        </div>
    )
}

export default Efecto