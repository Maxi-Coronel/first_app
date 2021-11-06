import logo from '../../logo.svg'
import './NavBar.css'

let tamanioLogo = {
width: `100px`,
} //2 forma de implementar CSS en React

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