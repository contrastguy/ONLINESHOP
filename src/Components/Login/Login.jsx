import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Componente from './ProtectedComponent.jsx';
import { api } from '../Services/api.jsx';
import './CSS/styles.css'
// import { ApiLogin } from '../Services/apiLoja.jsx';
import { useNavigate } from "react-router-dom";






function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [temErro, setTemErro] = useState(false)
    


    const handleLogin = async () => {
        // ApiLogin({ email, senha }).then(
        //     (response) => {

        //         const dados = response.data
        //         if (dados) {
        //             localStorage.setItem('Token', JSON.stringify(dados.token))
        //             localStorage.setItem('Token', JSON.stringify(dados.usuario_id))
        //             window.location.reload()
        //         }
        //     }
        // ).catch(
        //     (error) => {
        //         console.log(error)
        //         if (error.response.status == 401) {
        //             setTemErro(true)
        //         }
        //     }
        // )

        try {
            const url = "/login"
            const res =  await api.post(url,{
                "email": email,
                "senha":senha
            })
            const login = [... res.data]
            localStorage.setItem("token", login[0])
            localStorage.setItem("usuario_id", login[1])
            
        } catch (error) {
            console.log(error)
        }



        
        return <Componente/>
        
    }

    

    


    const navigatePerfil = useNavigate("/perfil") 


    return (
        <>
            <div className="vh-100 position-relative">
                <div className="login d-flex">
                    <Componente/>
                    <div className="d-flex col-5 bg-light justify-content-center flex-column cardLogCad m-auto ">

                        <div className="d-flex justify-content-center align-content-center position-relative">
                            <h1 className="font title link-secondary mt-5">Login</h1>

                        </div>
                        <div className="d-flex justify-content-center">
                            <form className="d-flex  flex-column mt-4 mb-2 col-8">
                                <label for="email" className="font mb-2">Email:</label>
                                <input type="email" name="email" id="authEmail" className="input-quest focus-0 col-12 text-black mb-4" value={email} onChange={e => {
                                    setEmail(e.target.value)
                                    if (temErro != false) setTemErro(false)
                                }} />
                                <label for="password" className="font mb-2">Senha:</label>
                                <input type="password" name="password" id="authPassword" className="input-quest focus-0 mb-2 text-black" value={senha} onChange={e => setSenha(e.target.value)} />
                                <div className="ocult" id="erroLogin">
                                    <div className="d-flex justify-content-center align-content-center">

                                        {
                                            temErro && (<>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle m-1 text-danger" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                <p className="p-0 text-danger">Usuário ou senha incorreta</p>
                                            </>

                                            )
                                        }
                                    </div>
                                </div>
                                <a href="#" className="link-secondary text-center fw-bolder mt-2">Esqueceu sua senha?</a>
                            </form>
                        </div>
                        <div className="d-flex col-12 justify-content-center mt-4">
                            <button
                            id="login" 
                            className="font btn btn-danger col-6 register" 
                            onClick={ 
                                ()=>{navigatePerfil('/perfil')
                                    handleLogin()
                                }}>
                                    Continuar
                            </button>
                        </div>
                        <p className="link-secondary text-center mt-2 mb-4">
                            Não tem uma conta?
                            <Link className="LinkCadastro text-danger" to="/cadastro">
                                Cadastre-se
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Login