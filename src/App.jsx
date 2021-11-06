/*import Login from "./screens/Login/Login";

function App() {
  return (
    <Login />
  );
}*/

import './App.css'; //1 forma de implementar CSS en React
import logo from './logo.svg';
import Header from './componentes/NavBar/NavBar'

let colorApp = {
  height: `100vh`,
  backgroundColor: `black`,
}

const App = () => {
  return(
    <div style={{...colorApp}}>
      <Header/>
    </div>
  )
}
  
export default App;