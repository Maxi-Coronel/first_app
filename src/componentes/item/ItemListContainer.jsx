import {useState} from 'react'
import {productos} from './Items'
import ItemList from './ItemList'

let presentacion = {
    color: `black`,
    width: `60%`,
    margin: `0 auto`,
    textAlign: `center`
}

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);    

    const traeProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    });

    traeProductos.then((res)=>{
        setItems(res);
    })
    .catch((error)=>{
        console.log(error);
    })

    return (
        <>
        <header>
            <h1 style={{...presentacion}}>{props.greeting}</h1>
        </header>
        <ItemList items={items} />
        </>
    )
}

export default ItemListContainer;