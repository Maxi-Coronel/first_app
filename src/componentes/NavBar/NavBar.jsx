import logo from './Amway.svg'
import carrito from './carrito.svg'
//import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Header = (props) => {

    const categorias = [
        { id:'b', direccion:'/categoria/nutricion', texto:'NUTRICIÓN', img:'https://www.amway.com/medias/hmp-00-category-Nutrition.jpg?context=bWFzdGVyfHJvb3R8MzE5MDF8aW1hZ2UvanBlZ3xoZmMvaDcwLzkxODUyODYxMjc2NDYuanBnfDY4MmI1ZTZhMDRiNjM0MWI2Y2JhOTNkNDM2ZjJlZTk0NDRiYmJiMDE2NDc4NDhjMTk1MzRkZmZlMTViODk3ZTQ'},
        { id:'c', direccion:'/categoria/cuidadoPersonal', texto:'PERSONAL', img:'https://www.amway.com/medias/hmp-00-category-PersonalCare.jpg?context=bWFzdGVyfHJvb3R8MzQ5NDZ8aW1hZ2UvanBlZ3xoMWQvaGIzLzkxODUyODYzMjQyNTQuanBnfDljZWNkOWIyY2VhYzUxNjRiNTk5ZGMyMTE4OTE4NzBjZjQ4MGNiYjY5ZDMxMjg4OTI2Y2JiYzg2YmEyODFmMjk'},
        { id:'d', direccion:'/categoria/hogar', texto:'HOGAR', img:'https://www.amway.com/medias/hmp-00-category-Home.jpg?context=bWFzdGVyfHJvb3R8MzMwNDJ8aW1hZ2UvanBlZ3xoMTcvaDZkLzkxODUyODYzODk3OTAuanBnfGRkNGIwNGExYTM2ZmM0NDNhYzAyOGNhOGY2YmMwMTBlMzNmMTdmNGE2YTczZWU4MzY4NjZiYmUzYjJhZjc1ODQ'},
        { id:'e', direccion:'/categoria/belleza', texto:'BELLEZA', img:'https://www.amway.com/medias/hmp-00-category-Beauty.jpg?context=bWFzdGVyfHJvb3R8MzU1Nzd8aW1hZ2UvanBlZ3xoYmIvaDIwLzkxODUyODYyNTg3MTguanBnfDZiNzJmMzQ4MTUyNmVmY2I0NGFjMDAxNzY5MmQwMjRmOTdjNWRlN2JkYzVkMTg0MWQ4NDAzMzJkNzBiMWUzY2Y'},
    ]

    return (
        <>
        <header className='headerContainer'>
            <Link className='flex' to="/"><img className='tamanioLogo' src={logo} alt="logo" /></Link>
            <nav>
                <ul>
                    {categorias?.map((cat) => {
                        return (
                            <li className='flex' key={cat.id}><Link to={cat.direccion}>{cat.texto}</Link></li>
                        )
                    })}
                    <CartWidget cart={carrito}/>
                </ul>
            </nav>
        </header>
            <h2 className='frase'>{props.greeting}</h2>
        </>
    )
}

export default Header