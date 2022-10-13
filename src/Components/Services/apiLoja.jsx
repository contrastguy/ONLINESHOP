// import React, { useEffect, useState } from "react"
import axios from "axios"


function ApiLojaLogin(LoginData) {


    console.log("Componente Construído")
    return axios({
        method: "post",
        url:'https://onlineshop-1.herokuapp.com/loja/login',
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

export {ApiLojaCadastro, ApiLojaLogin}