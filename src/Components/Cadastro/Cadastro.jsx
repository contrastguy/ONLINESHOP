import React,{ useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { api } from '../Services/api';
import { Link } from 'react-router-dom'
import './CSS/styles.css'


export default function Registro() {
const [nome,setNome] =  useState("")
const [sobrenome,setSobrenome] = useState("")
const [email,setEmail]  = useState("")
const [celular,setCelular] = useState()
const [senha,setSenha] = useState("")
const [confSenha,setConfSenha] = useState("")
const [CEP,setCep] = useState()
const [cidade,setCidade] = useState("")
const [logradouro,setLogradouro] = useState("")
const [rua,setRua] = useState("")
const [numero,setNumero] = useState()
const [check,setCheck] = useState(false)

 

const eventHandleCadastro = async () => { 
    // ApiCadastro({
    //     nome,sobrenome,email,celular,senha,confSenha,cidade,logradouro,rua,numero
    // }).then(
    //   (response) => { alert("Funcionou")}
    // ).catch((error)=>{console.log(error)})
    
    try {
        const url = "/usuario/cadastro"
        const res =  await api.post(url,{
            "nome":nome,
            "sobrenome":sobrenome,
            "email": email,
            "celular": celular,
            "senha":senha,
            "CEP":CEP,
            "cidade": cidade,
            "logradouro": logradouro,
            "rua":rua,
            "numero":numero
        })
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }


}

function verifyTerms() {
        if(!check){
            return alert("Você esqueceu de confirmar os termos e condições")
        }

}


  return (
    <div>
        <div className="login p-1 position-relative">
            
            <div className="bg-light cardLogCad m-auto mt-4 mb-4 col-5">
                <div className="d-flex justify-content-center">
                    <h1 className="title link-secondary mt-5">Cadastre-se</h1>  
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="mt-4 col-8 d-flex flex-column">  
                        <div className="">
                            <label for="Nome" className="col-6 "><strong>*</strong> Nome:</label>
                        </div>
                        <input type="text" name="Nome" id="nome" className="input-quest inputCad focus-0 text-black mt-2" value={nome} onChange={(e) => {
                            setNome(e.target.value)}
                        } />  
                        <div className=""> 
                            <label for="Sobrenome" className="mt-4 col-6"><strong>*</strong> Sobrenome:</label>
                        </div>
                        <input type="text" name="Sobrenome" id="sobrenome" className="input-quest inputCad focus-0 text-black mt-2" value={sobrenome} onChange={
                            (e) => {setSobrenome(e.target.value)}
                        }/>
                        <div className="">  
                            <label for="email" className="mt-4 col-6"><strong>*</strong> Email:</label>
                        </div>
                        <input type="email" name="email" className="input-quest inputCad focus-0 text-black mt-2" value={email} onChange={
                            (e) => {setEmail(e.target.value)}
                        }/>
                        <div>
                        <label for="Number" className="mt-4">Celular:</label>
                        </div>
                        <input type="tel" name="tel" className="input-quest focus-0 text-black mt-2" value={celular} onChange={
                            (e) => {setCelular(e.target.value)}
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
                        <label for="Cep" className="mt-3">CEP:</label>
                        </div>
                        <input type="text" name="cep" className="input-quest focus-0 text-black mt-2" value={CEP} onChange={
                            (e) => {setCep(e.target.value)
                                if(confSenha !== senha){alert("As senhas não se conferem")}}
                        }/>
                        <div>
                            <div className="d-flex flex-column">
                                <label for="Cidade" className="mt-4">Cidade:</label>
                                <input type="text" className="input-quest focus-0 text-black mt-2" value={cidade} onChange={
                                    (e) => {setCidade(e.target.value)}
                                }/>
                                <label for="Logradouro" className="mt-4">Logradouro:</label>
                                <input type="text" name="logradouro" className="input-quest focus-0 text-black mt-2" value={logradouro} onChange={
                                    (e) => {setLogradouro(e.target.value)}
                                }/>
                                
                                <div className="col-12 d-flex justify-content-between">
                                    <div className=" col-9 d-flex flex-column">
                                        <label for="Rua" className="mt-4 text-black">Rua:</label>
                                        <input type="text" name="Rua" className="input-quest focus-0 text-black mt-2" value={rua} onChange={
                                            (e) => {setRua(e.target.value)}
                                        }/>
                                    </div>
                                    <div className="col-2 d-flex flex-column">
                                        <label for="numeroCasa:" className="mt-4"> N°:</label>
                                        <input type="text" name="numero" className="input-quest focus-0 text-black mt-2" value={numero} onChange={
                                            (e) => {setNumero(e.target.value)}
                                        }/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5 d-flex justify-content-between">
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
                            eventHandleCadastro()
                            verifyTerms()
                        }

                    }>Continuar</button>
                </div>
                <p className="link-secondary text-center mt-2 pb-3">Já tem uma conta?
                    <Link className="LinkCadastro text-danger" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}
