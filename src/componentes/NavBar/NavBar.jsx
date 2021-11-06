import logo from '../../logo.svg'
import './NavBar.css'

let tamanioLogo = {
width: `110px`,
}

const Header = () => {
    return (
        <header className='headerContainer'>
            <img style={{...tamanioLogo}} src={logo} alt="logo" />
            <nav>
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Compras</a></li>
                <li><a href="#">Carrito</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header