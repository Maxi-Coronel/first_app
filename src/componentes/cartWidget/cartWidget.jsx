import carrito from './carrito.svg'

let tamanioCarrito = {
    width: `50px`,
}

const CartWidget = (props) => {
    return(
        <li className='flex'><a href="#"><img style={{...tamanioCarrito}} src={carrito} alt="carrito" /></a></li>
    )
}

export default CartWidget