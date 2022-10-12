import react, { useEffect, useState } from "react"
import axios from "axios"




const Teste = (props) => {
    const [dados, setDados] = useState([])


    useEffect(() => {

        console.log("Componente construído")
        axios({
            method: "get",
            url: "http://localhost:5000/usuarios",
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
        url: "http://localhost:5000/login",
        data: loginData,
        headers: { "Access-Control-Allow-Origin": "*" }
    })




}

function ApiCadastro(data){
    return axios({
        method:"post",
        url:"http://localhost:5000/usuario/cadastro",
        data:data,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}


function CadastroProdutosMulher(data){
    return axios({
        method:"post",
        url:"http://localhost:5000/produto/cadastro",
        data:data,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}



function ProdutosMulher(){
    return axios({
        method: "get",
        url: "http://localhost:5000/produtos",
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}

function CadastroVenda(data){
    return axios({
        method:"post",
        url:"http://localhost:5000/venda/cadastro",
        data:data,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}

function DeleteVenda(data){
    return axios({
        method:"delete",
        url:"http://localhost:5000/venda/",
        params:data,
        headers: { "Access-Control-Allow-Origin": "*" ,
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": "86400",
        "Access-Content-Type":"*"
         },
          
    })
}

export {Teste,ApiLogin,ApiCadastro,CadastroProdutosMulher,ProdutosMulher,DeleteVenda,CadastroVenda}