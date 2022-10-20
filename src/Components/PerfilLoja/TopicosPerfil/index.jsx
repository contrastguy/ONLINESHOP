import React, {useState, useEffect} from "react";
import "../styles.css";
import FotoPerfil from "./imagens/foto-perfil.jpg";
import { Nav } from "react-bootstrap";
import { NavLink as Navigator } from "react-router-dom";
import { api } from "../../Services/api";



function TopicosPerfilLoja() {
    localStorage.setItem("loja_id",2)
    const [dadosLoja, setDadosLoja] = useState([])


    const DadosLoja = async () => {
        try {
        const url = `/loja/${localStorage.getItem("loja_id")}`
        const res = await api.get(url)
        setDadosLoja(res.data);

        } catch (err) {
        console.log(err);
        }
    }

useEffect(()=>{
    DadosLoja()
},[])
    return(
        <div className="col-3 bg-light text-center pt-4 pb-4 mb-3 ps-2 pe-2 shadow-lg">
            <div className="pb-3">
                <img src={dadosLoja.url_imagem} alt="" className="fotoPerfil mb-3"/>
                <Nav.Link to="/perfil" as={Navigator}><h3 className="link-secondary cursor ">{dadosLoja.nome_fantasia}</h3></Nav.Link>
            </div>
            <Nav.Link to="/perfil-loja/meus-produtos" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Meus Produtos</button>
            </Nav.Link>
            <Nav.Link to="/perfil-loja/pagamentos" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Pagamento</button>
            </Nav.Link>
            <Nav.Link to="/perfil-loja/configuracoes" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Configurações</button>
            </Nav.Link>
            <Nav.Link to="/perfil-loja/ajuda" as={Navigator}>
                <button className="btn btn-danger col-12 shadow-lg radius-0">Ajuda</button>   
            </Nav.Link>            
        </div>    
    )
}

export default TopicosPerfilLoja;