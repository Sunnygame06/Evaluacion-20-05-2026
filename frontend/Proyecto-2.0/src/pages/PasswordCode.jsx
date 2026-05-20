import { useState } from "react"
import {Link, useNavigate,} from "react-router-dom"

import Input from "../components/Input"
import Button from "../components/Button"
import Card from "../components/Card"

function PasswordCode() {
    const [code, setCode] = useState("");

    const navigate = useNavigate();

    const verifyCode = async (e) => {
        e.preventDefault();

        if(code !== "123456"){
            alert("Codigo incorrecto")
        }else{
            alert("Cuenta verificada")

            navigate("/new-password")
        }
    }

    return(
        <div className="container">
            <Card>
                <form onSubmit={verifyCode}>
                    <h2>Verificar Codigo</h2>

                    <Input
                        type="text"
                        placeholder="Codigo"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />

                    <Button
                        type="submit"
                        text="Verificar"
                    />
                </form>
            </Card>
        </div>
    )
}

export default PasswordCode;