import React,{ useState } from 'react';
import { NavLink as Navigator, Link, useNavigate } from 'react-router-dom'
import {ApiLojaCadastro}   from '../Services/apiLoja';
import './CSS/styles.css'


export default function RegistroLoja() {
const [nome_fantasia,setNomeFantasia] =  useState("")
const [email,setEmail]  = useState("")
const [senha,setSenha] = useState("")
const [confSenha,setConfSenha] = useState("")
const [CNPJ,setCNPJ] = useState()
const [check,setCheck] = useState(false)

 

    function eventHandleCadastroLoja(){ 
        ApiLojaCadastro({
            nome_fantasia,email,senha,CNPJ
        }).then(
            (response) => {
                const dados = [...response.data]
                if (dados) {
                    localStorage.setItem("token", dados[0])
                    localStorage.setItem('loja_id', dados[1])
                    window.location.reload()
                }
            }
            
        ).catch((error)=>{console.log(error)})
    }


    function verifyTerms() {
            if(!check){
                return alert("Você esqueceu de confirmar os termos e condições")
            }

    }
    const navigatePerfilLoja = useNavigate("/perfil-loja")

  return (
    <div>
        <div className="login p-1 position-relative">
            
            <div className="bg-light cardLogCad m-auto mt-4 mb-4 col-5">
                <div className="d-flex justify-content-center">
                    <h1 className="title link-secondary mt-5">Cadastrar Loja</h1>  
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="mt-4 col-8 d-flex flex-column">  
                        <div className="">
                            <label for="Nome Fantasia" className="col-6 ">
                                <strong>*</strong> Nome Fantasia:</label>
                        </div>
                        <input type="text" name="Nome" id="nome" className="input-quest inputCad focus-0 text-black mt-2" value={nome_fantasia} onChange={(e) => {
                            setNomeFantasia(e.target.value)}
                        } /> 
                        <div className="">  
                            <label for="email" className="mt-4 col-6"><strong>*</strong> Email:</label>
                        </div>
                        <input type="email" name="email" className="input-quest inputCad focus-0 text-black mt-2" value={email} onChange={
                            (e) => {setEmail(e.target.value)}
                        }/>
                        <div className="">                             
                        <label for="password" className="mt-4 col-6"><strong>*</strong> Senha:</label>
                        </div>
                        <input type="password" name="password" className="input-quest inputCad focus-0 text-black mt-2" value={senha} onChange={
                            (e) => {setSenha(e.target.value)}
                        }/>
                        <div className=""> 
                            <label for="password" className="mt-4 col-6"><strong>*</strong> Confirme sua senha:</label>
                        </div>
                        <input type="password" name="confirmSenha" className="input-quest inputCad focus-0 text-black mt-2 mb-2" value={confSenha} onChange={
                            (e) => {
                               setConfSenha(e.target.value)
                            }
                        }/>
                        <div>
                        <label for="CNPJ" className="mt-3">CNPJ:</label>
                        </div>
                        <input type="text" name="CNPJ" className="input-quest focus-0 text-black mt-2" value={CNPJ} onChange={
                            (e) => {setCNPJ(e.target.value)
                                if(confSenha !== senha){alert("As senhas não se conferem")}}
                        }/>
                        <div className="pt-5 d-flex justify-content-start">
                            <div className="d-flex flex-column justify-content-center">
                                <input type="checkbox" name="termos" id="termos" className="div-check-inline div-check-input" value={check} onClick={
                                    () => {setCheck(true)
                                         }
                                }/>
                            </div>
                            <p className="link-secondary p-0 m-2">Li e concordo com os <a href="#" className="link-secondary"><strong>Termos de privacidade</strong></a></p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center col-12 mt-5">
                    <button className="btn btn-danger col-6 register" id="cadastro" onClick={
                        () => { 
                            navigatePerfilLoja('/perfil-loja')
                            eventHandleCadastroLoja()
                            verifyTerms()
                        }
                    }>Continuar</button>
                </div>
                <p className="link-secondary text-center mt-2 pb-3">Já tem uma conta?
                    <Link to="/login-loja" className="cursor LinkCadastro text-danger">Login</Link>
                </p>
            </div>
        </div>
    </div>
  )
}
