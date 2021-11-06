import './input.css'

const Input = (props) => {
    return (
        <input className='input-class' type={props.tipos} placeholder={props.vista}/>
    )
}

export default Input;