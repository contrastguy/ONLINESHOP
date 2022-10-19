import React from "react";
import { useState, useEffect } from "react";
import "../styles.css";
import { api } from "../../Services/api";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'




function DadosPerfil(){
    const navigateConf = useNavigate("/perfil/configuracoes");
    
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
},[])
    return(
        <div className="col-9 pb-2 overflow-auto altura">
            <div className=" d-flex justify-content-center align-content-center m-5 border-bottom">
                <h1 className="pb-3 link-secondary">Bem vindo, {`${dadosUsuario.nome}  ${dadosUsuario.sobrenome}`}</h1>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <div className="col-11 overflow-auto">
                    <h5 className="link-secondary">{`${dadosUsuario.nome}`} </h5>
                    <p className="border-bottom"><input type="text" placeholder="Nome" className="input_dados_perfil" disabled/></p>
                    <h5 className="link-secondary">{`${dadosUsuario.sobrenome}`}</h5>
                    <p className="border-bottom"><input type="text" value="Sobrenome" className="input_dados_perfil" disabled/></p>
                    <h5 className="link-secondary">Celular</h5>
                    <p className="border-bottom"><input type="text"className="input_dados_perfil" disabled/><Button variant="primary" className="align-items-center" onClick={() => navigateConf("/perfil/configuracoes")}>Cadastrar celular</Button>{' '}
                    </p>
                    <h5 className="link-secondary">Endereço</h5>
                    <p className="border-bottom"><input type="text" className="input_dados_perfil" disabled/><Button variant="primary" className="align-items-center" onClick={() => navigateConf("/perfil/configuracoes")}>Cadastrar endereço</Button>{' '}
                    </p> 
                    <h5 className="link-secondary">CEP</h5>
                    <p className="border-bottom"><input type="text" className="input_dados_perfil" disabled/></p> 
                    <div className="d-flex flex-column">
                        <div className="col-9">
                            <h5 className="link-secondary">Cidade</h5>
                            <p className="border-bottom"><input type="text" className="input_dados_perfil" disabled/></p>
                        </div>
                        <div className="col-9">
                            <h5 className="link-secondary">Rua</h5>
                            <p className="border-bottom"><input type="text"className="input_dados_perfil" disabled/></p>
                        </div>
                        <div className="col-9">
                            <h5 className="link-secondary">Número</h5>
                            <p className="border-bottom"><input type="text"className="input_dados_perfil" disabled/></p>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-end pt-3">
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default DadosPerfil;