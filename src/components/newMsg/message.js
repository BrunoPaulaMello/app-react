import { useState } from "react"
 

const NewMsg = ()=>{

    const [data, setData] = useState({
        type: "text",
        message: "",
    })

    const user = {
        id: 1,
    }
    /*

        -autenticacao e autorizacao ()
        -DB config (x)
        -Server config (x)
        -Images and other file types ()

    */


        async function handleSubmit(){

            let message = {
            id: user.id,
            details: data.type,
            contents: data.message,
            }

            let objConf = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(message),
            }
            
            const res = await fetch('http://localhost:5000/message', objConf)
            .then((res)=>{
                return res.json()
            })
            .catch(()=>{
                console.log("hum")
            })
            console.log(res)
            
        }

    return(
        <>
            <form onSubmit={()=> handleSubmit()}>

                <label htmlFor="message">Nova mensagem</label>
                <input type={data.type} name="message" id="message" onChange={(e)=> setData({...data, message: e.target.value})}/>
                <label htmlFor="messageType">Tipo de mensagem</label>

                <select name="messageType" id="messageType" onChange={(e)=>{
                    if(e.target.value === "text"){
                        setData({...data, type: "text"})
                    } else {
                        setData({...data, type: "file"})
                    }
                }}>
                    <option value="text">Texto</option>
                    <option value="image">Imagem</option>
                    <option value="video">Vídeo</option>
                </select>
                
                <button>Enviar</button>
            </form>
        </>
    )
}

export default NewMsg