import './App.css'; //1 forma de implementar CSS en React
import Header from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/item/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

let colorApp = {
  height: `100vh`,
  backgrounCcolor: 'rgb(217, 255, 205)'
}

const App = () => {

  return(
    <BrowserRouter>
      <div style={{...colorApp}}>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        </Routes>
        <ItemListContainer greeting='Amway lleva a las personas a una nueva vida de entusiasmo, promesas, ganancias y esperanza...'/>
        {/* <div className='flex'><ItemCount/></div> */}
      </div>
    </BrowserRouter>
  )
}

export default App;