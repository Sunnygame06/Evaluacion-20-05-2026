import {useState} from "react";
import {Link, useNavigate,} from "react-router-dom"

import Input from "../components/Input"
import Button from "../components/Button"
import Card from "../components/Card"

function Register(){
    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault()

        const user = {
            title,
            body
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
                        placeholder="Titulo"
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder="Body"
                        onChange={(e) => setBody(e.target.value)}
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