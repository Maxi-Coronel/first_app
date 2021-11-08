import portada from './negocio.jpg'

let tamanioPortada = {
    width: '100%'
}

const Portada = () => {
    return(
      <img style={{...tamanioPortada}} src={portada} alt="portada" />
    )
}

 export default Portada