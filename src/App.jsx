import Header from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/item/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
        {/* <Route path='/' element={<Home/>}></Route> */}
        </Routes>
        <ItemListContainer greeting='Amway lleva a las personas a una nueva vida de entusiasmo, promesas, ganancias y esperanza...'/>
      </div>
    </BrowserRouter>
  )
}

export default App;