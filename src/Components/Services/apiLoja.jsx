// import React, { useEffect, useState } from "react"
import axios from "axios"



function ApiLojaLogin(LoginData) {

    return axios({
        method: "post",
        url:'https://onlineshop-1.herokuapp.com/loja/login',
        data: LoginData,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}
function ApiLogin(LoginData) {

    return axios({
        method: "post",
        url:'https://onlineshop-1.herokuapp.com/usuario/login',
        data: LoginData,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}


function ApiLojaCadastro(data){
    return axios({
        method:"post",
        url: process.env.REACT_APP_CADASTRO_LOJA,
        data:data,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}

function ApiProdutoCadastro(data){
    return axios({
        method:"post",
        url: 'https://onlineshop-1.herokuapp.com/produto/cadastro',
        data:data,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}

function GeneroProduto(data){
    return axios({
        method:"get",
        url:'https://onlineshop-1.herokuapp.com/generos',
        data:data,
    headers:{ "Access-Control-Allow-Origin":"*" }
    })
} 

function CategoriaProduto(data){
    return axios({
        method:"get",
        url:'https://onlineshop-1.herokuapp.com/categorias',
        data:data,
    headers:{ "Access-Control-Allow-Origin":"*" }
    })
} 

function EstiloProduto(data){
    return axios({
        method:"get",
        url:'https://onlineshop-1.herokuapp.com/estilos',
        data:data,
    headers:{ "Access-Control-Allow-Origin":"*" }
    })
}

function SecaoProduto(data){
    return axios({
        method:"get",
        url:'https://onlineshop-1.herokuapp.com/secoes',
        data:data,
    headers:{ "Access-Control-Allow-Origin":"*" }
    })
} 

function ProdutoId(id){
    return axios({
        method:"get",
        url:`https://onlineshop-1.herokuapp.com/produto/${id}`,
        headers:{ "Access-Control-Allow-Origin":"*" }
    })
}

function ApiEnderecoCadastro(data){
    return axios({
        method:"post",
        url: 'https://onlineshop-1.herokuapp.com/usuario-endereco/cadastro',
        data:data,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}
function ApiEnderecoLojaCadastro(data){
    return axios({
        method:"post",
        url: 'https://onlineshop-1.herokuapp.com/loja-endereco/cadastro',
        data:data,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}

function ApiContatoCadastro(data){
    return axios({
        method:"post",
        url: 'https://onlineshop-1.herokuapp.com/usuario-contato/cadastro',
        data:data,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}

function ApiContatoLojaCadastro(data){
    return axios({
        method:"post",
        url: 'https://onlineshop-1.herokuapp.com/loja-contato/cadastro',
        data:data,
        headers: { "Access-Control-Allow-Origin": "*" }
    })
}

export {ApiLojaCadastro, ApiLojaLogin, ApiProdutoCadastro, GeneroProduto, CategoriaProduto, EstiloProduto, SecaoProduto, ProdutoId, ApiEnderecoCadastro, ApiContatoCadastro,ApiEnderecoLojaCadastro, ApiContatoLojaCadastro, ApiLogin}