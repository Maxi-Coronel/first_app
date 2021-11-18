import './ItemCount.css'
import {Fragment, useState} from 'react'
import {productos} from './Items'

const ItemCount = () => {
    
    const [number, setNumber] = useState(1);
    let stock = 8;
    const suma = () => {
      number < stock && setNumber(number + 1)
    }
  
    const resta = () => {
      number > 1 && setNumber(number - 1)
    }

    return(
        <Fragment>
            {
                productos.map((producto) => {
                    return(
                        <div className='tarjeta'>
                            <div className='presentacion'>
                                <h3>{producto.titulo}</h3>
                                <img className='img' src={producto.img} alt="LOC" />
                            </div>
                            <div className='contador'>
                                <button className='boton' onClick={resta}> - </button>
                                <h3>{number}</h3>
                                <button className='boton' onClick={suma}> + </button>
                            </div>
                            <button className='agregar'>Agregar al carrito</button>
                        </div>
                    )
                })
                
            }
        </Fragment>
    )
}

export default ItemCount;