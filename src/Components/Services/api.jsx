import React, { useEffect, useState } from "react"
import axios from "axios"




const Teste = (props) => {
    const [dados, setDados] = useState([])


    useEffect(() => {

        console.log("Componente construído")
        axios({
            method: "get",
            url: process.env.REACT_APP_URLAPI,
            headers: { "Access-Control-Allow-Origin": "*" }
        })
            .then(
                (Response) => {
                    const dado = console.log(Response.data)
                    setDados(dado)
                }

            )

            .catch(
                (error) => { console.log(error) }
            )


        return () => {
            console.log("Componente destruído")
        }
    }, [])


    return (
        <div>
            <h1>Usuários</h1>

        </div>
    )
}

function ApiLogin(loginData) {


    console.log("Componente Construído")
    return axios({
        method: "post",
        // url: "http://localhost:5000/login",
        url: process.env.REACT_APP_LOGIN,
        data: loginData,
        headers: { "Access-Control-Allow-Origin": "*" }
    })




}

function ApiCadastro(data){
    return axios({
        method:"post",
        // url:"http://localhost:5000/usuario/cadastro",
        url: process.env.REACT_APP_CADASTRO_USUARIO,
        data:data,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}


function CadastroProdutosMulher(data){
    return axios({
        method:"post",
        // url:"http://localhost:5000/produto/cadastro",
        url:process.env.REACT_APP_CADASTRO_PRODUTO,
        data:data,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}



function ProdutosMulher(){
    return axios({
        method: "get",
        // url: "http://localhost:5000/produtos",
        url:process.env.REACT_APP_PRODUTOS,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}

function CadastroVenda(data){
    return axios({
        method:"post",
        // url:"http://localhost:5000/venda/cadastro",
        url:process.env.REACT_APP_CADASTRO_VENDA,
        data:data,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}



export {Teste,ApiLogin,ApiCadastro,CadastroProdutosMulher,ProdutosMulher,CadastroVenda}