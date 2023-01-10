import { autentificacao } from "../auth"


const Perfil = async()=>{

    let userData = {email: "bma142536@gmail.com", token: "0c1cb4a0018da26d27aaa61743b8d3c2b351dd658e419d8adc1c2573af57efc0"}
    
    localStorage.setItem("user", JSON.stringify(userData))

    let user = localStorage.getItem("user")
    console.log(await autentificacao(user))

    return (
        <>
            oi
        </>
    )
}

export default Perfil