import Item from './Item'

const ItemList = ( {items, onAdd} ) => {

    return(
        <>
            {items?.map((item) => {
                return(
                <Item key={item.id} item={item} onAdd={onAdd} />
                )                    
            })}
        </>
    )
}

export default ItemList;