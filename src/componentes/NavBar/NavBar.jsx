import logo from './Amway.svg'
import carrito from './carrito.svg'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

let tamanioLogo = {
    width: `110px`,
    margin: `0 30px`
}

const Header = (props) => {
    return (
        <header className='headerContainer'>
            <a className='flex' href="#"><img style={{...tamanioLogo}} src={logo} alt="logo" /></a>
            <nav>
                <ul>
                <li className='flex'><a href="#">Home</a></li>
                <li className='flex'><a href="#">Nutricion</a></li>
                <li className='flex'><a href="#">Hogar</a></li>
                <li className='flex'><a href="#">Belleza</a></li>
                <li className='flex'><a href="#">Cuidado Personal</a></li>
                <CartWidget cart={carrito}/>
                </ul>
            </nav>
        </header>
    )
}

export default Header