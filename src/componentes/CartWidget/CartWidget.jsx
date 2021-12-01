import { Link } from "react-router-dom"


let tamanioCarrito = {
    width: `50px`,
}

const CartWidget = (props) => {
    return(
        <li className='flex'><Link to="/cart"><img style={{...tamanioCarrito}} src={props.cart} alt="carrito" /></Link></li>
    )
}

export default CartWidget