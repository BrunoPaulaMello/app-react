import { useState } from "react"
 

const NewMsg = ()=>{

    const [messageType, setMessageType] = useState("text")
    /*

        -autenticacao e autorizacao ()
        -DB config (x)
        -Server config ()
        -Images and other file types

    */
    return(
        <>
            <form method="post">
                <label htmlFor="message">Nova mensagem</label>
                <input type={messageType} name="message" id="message"/>
                <label htmlFor="messageType">Tipo de mensagem</label>

                <select name="messageType" id="messageType" onChange={(e)=>{
                    if(e.target.value === "text"){
                    setMessageType("text")
                    } else {
                        setMessageType("file")
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