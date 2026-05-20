import {useState} from "react";
import {Link, useNavigate,} from "react-router-dom"

import Input from "../components/Input"
import Button from "../components/Button"
import Card from "../components/Card"

function Login(){
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const fakeUser = {
        email: "daniel@gmail.com",
        password: "1234",
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        if(email === fakeUser.email && password === fakeUser.password){
            alert("Inicio de sesion exitoso")
            navigate("/dashboard")
        }else{
            alert("Correo o contraseña incorrecta")
        }
    }

    return(
        <div className="container">
            <Card>
                <form onSubmit={handleLogin}>
                    <h2>Iniciar Sesión</h2>

                    <Input
                        type="email"
                        placeholder="Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        text="Ingresar"
                    />

                    <div className="links">
                        <Link to="/register">
                            Crear cuenta
                        </Link>

                        <Link to="/recovery">
                            Recuperar contraseña
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default Login;
