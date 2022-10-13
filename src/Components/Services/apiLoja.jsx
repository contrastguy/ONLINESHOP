// import React, { useEffect, useState } from "react"
import axios from "axios"


function ApiLojaLogin(data) {


    console.log("Componente Construído")
    const url = "/loja/login"
    return axios({
        method: "post",
        url: `${process.env.REACT_APP_URL_API}${url}`,
        data: data,
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