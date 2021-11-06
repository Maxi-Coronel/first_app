import Input from "../../componentes/input/input";

const Login = ( ) => {
    return(
        <section>
            <form>
                <h1>customer login</h1>
                <Input tipos='text' vista='email'/>
                <Input tipos='password' vista='contraseña'/>
                <button type='submit'></button>
            </form>
        </section>
    )
}

export default Login;