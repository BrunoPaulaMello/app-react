


    export const autentificacao = async (user)=>{
        if(user){
            let objConf = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(user),
            }
            const res = await fetch('http://localhost:5000/auth', objConf)
            .then((res)=>{return res.json()})
            .catch((error)=> {return error})

            let msg = res.msg

            if(msg != "autorizado"){
                localStorage.removeItem("user")
                window.location.href = "./login" 
                return "Recusado"
            }

            return "autorizado"
        }
        return "O parametro user é obrigatorio!"
    }