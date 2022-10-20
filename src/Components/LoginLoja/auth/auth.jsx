import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import Login from "../Login";



let AuthContext = createContext(null)
export const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)

    useEffect(
        () => {
            let token = localStorage.getItem('Token')
            if(token) {
                axios({
                    method: "get",
                    url: "https://onlineshop-1.herokuapp.com/loja/login",
                    data:{token}
                }).then(
                    ({response}) => {
                        console.log(response)
                        if(response.user) setUser(response.user)
                    }
                ).catch(
                    () => {
                        localStorage.removeItem("Token")
                    }
                )
            }
            
        }, [setUser]
    )

    if (!user) return <Login/>
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider> 

}

export const useUser = () => useContext(AuthContext)