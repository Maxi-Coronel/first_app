import Portada from './portada'

let presentacion = {
    color: `black`,
    width: `60%`,
    margin: `0 auto`,
    textAlign: `center`
}

const ItemListContainer = (props) => {
    return (
        <header>
            <Portada/>
            <h1 style={{...presentacion}}>{props.greeting}</h1>
        </header>
    )
}

export default ItemListContainer;