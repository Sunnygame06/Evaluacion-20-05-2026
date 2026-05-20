import { useState } from "react"
import {Link, useNavigate,} from "react-router-dom"

import Input from "../components/Input"
import Button from "../components/Button"
import Card from "../components/Card"

function NewPassword() {
    const navigate = useNavigate()

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(newPassword !== confirmPassword){
            alert("Las contraseñas no coinciden")
        }else{
            alert("Contraseña actualizada")
            navigate("/")
        }
    }

    return(
        <div className="container">
            <Card>
                <form onSubmit={handleSubmit}>
                    <h2>Nueva Contraseña</h2>

                    <Input 
                        type="password"
                        placeholder="Nueva Contraseña"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <Input 
                        type="password"
                        placeholder="Confirmar Contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <Button 
                        type="submit"
                        text="Cambiar Contraseña"
                    />
                </form>
            </Card>
        </div>
    )
}

export default NewPassword;