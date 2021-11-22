import {useState} from 'react'
import {productos} from './Items'
import ItemList from './ItemList'
import { useEffect } from 'react/cjs/react.development'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const { catId } = useParams();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);

        const traeProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        });
    
        traeProductos.then((res)=>{
            catId ? setItems(res.filter(item => item.categoria === catId)) : 
            setItems(res);
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(() => {
            setLoading(false)
        })
    }, [catId])

    return (loading ? <h1>CASI LISTO...</h1> :
        <>
        <div className='flex'>
            <ItemList items={items} />
        </div>
        </>
    )
}

export default ItemListContainer;