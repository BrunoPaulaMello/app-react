import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({c})=>{

    const [user, setUser] = useState()

    useEffect(() =>{
        const userToken = localStorage.getItem("user_token")
        const usersStorage =localStorage.getItem("user_db")

        if(userToken && usersStorage){
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user)=> user.email === JSON.parce(userToken).email
            )

            if(hasUser) setUser(hasUser[0])
        }
    }, [])
    

    return <AuthContext.Provider>{c}</AuthContext.Provider>
}


