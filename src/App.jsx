/*import Login from "./screens/Login/Login";

function App() {
  return (
    <Login />
  );
}*/
import './App.css'; //1 forma de implementar CSS en React
import Header from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/itemListContainer/itemListContainer'
import ItemCount from './componentes/ItemCounts/ItemCounts'

let colorApp = {
  height: `100vh`,
  backgrounCcolor: 'rgb(217, 255, 205)'
}

const App = () => {

  return(
    <div style={{...colorApp}}>
      <Header/>
      <ItemListContainer greeting='Amway lleva a las personas a una nueva vida de entusiasmo, promesas, ganancias y esperanza...'/>
      <ItemCount/>
    </div>
  )
}

export default App;
/* 

function Apps() {

  new Date()



  return (
    
  )

}

  
export default Apps;
 */
