import {useState} from 'react'
import {productos} from './Items'
import ItemDetail from './ItemDetail'
import { useEffect } from 'react/cjs/react.development'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    
    const { prodId } = useParams()

    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(false);

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    });
    
    useEffect(() => {
        setLoading(true)
        getItem.then((res)=>{
            prodId ? setItems(res.find(item => item.id === prodId)) : 
            setItems(res);
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return (loading ? <h1>CASI LISTO...</h1> :
        <>
        <div className='flex'>
            <ItemDetail items={items} />
        </div>
        </>
    )
}

export default ItemDetailContainer