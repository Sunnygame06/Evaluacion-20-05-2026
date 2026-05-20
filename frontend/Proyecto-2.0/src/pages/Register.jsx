import {useState} from "react";
import {Link, useNavigate,} from "react-router-dom"

import Input from "../components/Input"
import Button from "../components/Button"
import Card from "../components/Card"

function Register(){
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    const handleRegister = async (e) => {
        e.preventDefault()

        const user = {
            name,
            email,
            password,
        }
        console.log(user)

        alert("Datos ingresados")
        navigate("/")
    }

    return(
        <div className="container">
            <Card>
                <form onSubmit={handleRegister}>
                    <h2>Registro</h2>

                    <Input
                        type="text"
                        placeholder="Nombre"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder="Correo"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        text="Registrarse"
                    />
                </form>
            </Card>
        </div>
    )
}

export default Register;