import Header from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/item/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './componentes/item/ItemDetailContainer'
import './componentes/item/Items.css';

const App = () => {

  return(
    <BrowserRouter>
      <Header greeting='Amway lleva a las personas a una nueva vida de entusiasmo, promesas, ganancias y esperanza...'/>
      <div className='colorApp'>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:catId' element={<ItemListContainer/>}/>
          <Route path='/product/:prodId' element={<ItemDetailContainer/>}/>


        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;