import { useState } from "react"
import {Link, useNavigate,} from "react-router-dom"

import Card from "../components/Card"

function Dashboard(){
    return(
        <div className="container">
            <Card>
                <h2>Dashboard</h2>

                <Link to="/">
                    Salir
                </Link>
            </Card>
        </div>
    )
}

export default Dashboard;