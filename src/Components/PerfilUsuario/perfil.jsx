import React from "react";
import { Outlet } from "react-router-dom";
import TopicosPerfil from "./TopicosPerfil";
import RotasPerfil from "./Routes";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

function Perfil() {
    return(
        <div>
            
            <NavBar />
                <div className='d-flex'>
                    <TopicosPerfil />
                    <Outlet />
                </div>
            <Footer />
        </div>
    )
}

export default Perfil;