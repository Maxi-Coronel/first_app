import logo from './Amway.svg'
import carrito from './carrito.svg'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

let tamanioLogo = {
    width: `110px`,
    margin: `0 30px`
}

const Header = (props) => {
    return (
        <header className='headerContainer'>
            <Link className='flex' to="#"><img style={{...tamanioLogo}} src={logo} alt="logo" /></Link>
            <nav>
                <ul>
                <li className='flex'><Link to="/">Home</Link></li>
                <li className='flex'><Link to="/nutricion">Nutricion</Link></li>
                <li className='flex'><Link to="/hogar">Hogar</Link></li>
                <li className='flex'><Link to="belleza">Belleza</Link></li>
                <li className='flex'><Link to="cuidadopersonal">Cuidado Personal</Link></li>
                <CartWidget cart={carrito}/>
                </ul>
            </nav>
        </header>
    )
}

export default Header