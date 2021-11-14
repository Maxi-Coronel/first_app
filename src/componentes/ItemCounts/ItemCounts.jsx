import './ItemCount.css'
import {Fragment, useState} from 'react'
import Loc from './LOC.png'

const productos = [
    {
        titulo: 'Loc',
        precio: '$1823',
        stock: '8'
    },
    {
        titulo: 'Dish drops',
        precio: '$1823',
        stock: '5'
    },
    {
        titulo: 'Pasta dental glister',
        precio: '$760',
        stock: '10'
    }
]


const ItemCount = () => {
    const [number, setNumber] = useState(1);
    let stock = 8;
  
    const suma = () => {
      if (number < stock){
        setNumber(number + 1)
      }else{
          alert('no hay mas stock')
      }
    }
  
    const resta = () => {
      if (number > 1) {
        setNumber(number - 1)
      }
    }


    return(
        <Fragment>
            {
                productos.map((producto) => {
                    return(
                        <div className='tarjeta'>
                            <div className='presentacion'>
                                <h3>{producto.titulo}</h3>
                                <img src={Loc} alt="LOC" />
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