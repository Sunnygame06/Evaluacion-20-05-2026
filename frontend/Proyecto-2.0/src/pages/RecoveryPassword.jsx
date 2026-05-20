import { useState } from "react"
import {Link, useNavigate,} from "react-router-dom"

import Input from "../components/Input"
import Button from "../components/Button"
import Card from "../components/Card"

function RecoveryPassword() {
    const navigate = useNavigate();

    const[email, setEmail] = useState("");

    const handleRecovery = async (e) => {
        if(email === "admin@gmail.com"){
            alert("Codigo enviado")
            navigate("/password-code")
        }else{
            alert("Correo incorrecto")
        }
    }

    return(
        <div className="container">
            <Card>
                <form onSubmit={handleRecovery}>
                    <h2>Recuperar Contraseña</h2>

                    <Input
                        type="email"
                        placeholder="Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Button
                        type="submit"
                        text="Enviar Codigo"
                    />
                </form>
            </Card>
        </div>
    )
}

export default RecoveryPassword;