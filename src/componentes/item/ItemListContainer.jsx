import {useState} from 'react'
import {productos} from './Items'
import ItemList from './ItemList'
import { useEffect } from 'react/cjs/react.development'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const { catId } = useParams();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);


    const onAdd = (cantidad) => {
        console.log({...items, cantidad: cantidad});
    }
    
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

    return (loading 
        ? <div className='flex divCargando'><h1>CASI LISTO...</h1><img className='cargando' src="https://th.bing.com/th/id/R.7500668d515374c0dd15a7ed1e8bdbd8?rik=KPncNUUV2lQfng&pid=ImgRaw&r=0" alt="cargando" /></div>
        : <>
            <div className='flex-wrap'>
                <ItemList items={items} onAdd={onAdd} />
            </div>
          </>
    )
}

export default ItemListContainer;