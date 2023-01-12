


    export default async function autenticacao(){

        let user = localStorage.getItem("user")
        
        let objConf = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: user,
        }
        
        const res = await fetch('http://localhost:5000/auth', objConf)
        .then(async(res)=>{return await res.json()})
        .catch((error)=> {return error})

        let msg = res.msg

        console.log(msg)

        if(msg !== "autorizado"){
            return false
        }

        return true
    }