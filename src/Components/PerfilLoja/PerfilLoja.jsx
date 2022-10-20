import React from "react";
import { Outlet } from "react-router-dom";
import TopicosPerfilLoja from "./TopicosPerfil/index";
import RotasPerfil from "./Routes";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

function PerfilLoja() {
    return(
        <div>
            <NavBar />
                <div className='d-flex'>
                    <TopicosPerfilLoja />
                    <Outlet />
                </div>
            <Footer />
        </div>
    )
}

export default PerfilLoja;