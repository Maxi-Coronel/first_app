

let tamanioCarrito = {
    width: `50px`,
}

const CartWidget = (props) => {
    return(
        <li className='flex'><a href="#"><img style={{...tamanioCarrito}} src={props.cart} alt="carrito" /></a></li>
    )
}

export default CartWidget