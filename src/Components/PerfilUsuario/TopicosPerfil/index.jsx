import React from "react";
import "../styles.css";
import FotoPerfil from "./imagens/foto-perfil.jpg";
import { Nav } from "react-bootstrap";
import { NavLink as Navigator } from "react-router-dom";
import { api } from "../../Services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";





function TopicosPerfil() {
    localStorage.getItem("usuario_id")
    const [dadosUsuario, setDadosUsuario] = useState([])

    const DadosUsuario = async () => {
        try {
        const url = `/usuario/${localStorage.getItem("usuario_id")}`
        const res = await api.get(url)
        setDadosUsuario(res.data);

        } catch (err) {
        console.log(err);
        }
    }



useEffect(()=>{
    DadosUsuario()
    
})

    return(
        <div className="col-3 bg-light text-center pt-4 pb-4 mb-3 ps-2 pe-2 shadow-lg">
            <div className="pb-3">
                <img src={dadosUsuario.url_imagem} alt="" className="fotoPerfil mb-3"/>
                <p>Adicionar foto de Perfil</p>
                <Nav.Link to="/perfil" as={Navigator}><h3 className="link-secondary cursor ">{`${dadosUsuario.nome}  ${dadosUsuario.sobrenome}`}</h3></Nav.Link>
            </div>
            <Nav.Link to="/perfil/minhas-compras" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Minhas Compras</button>
            </Nav.Link>
            <Nav.Link to="/perfil/favoritos" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Favoritos</button>
            </Nav.Link>
            <Nav.Link to="/perfil/pagamentos" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Pagamento</button>
            </Nav.Link>
            <Nav.Link to="/perfil/configuracoes" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Configurações</button>
            </Nav.Link>
            <Nav.Link to="/perfil/ajuda" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Ajuda</button>   
            </Nav.Link>            
        </div>    
    )
}

export default TopicosPerfil;