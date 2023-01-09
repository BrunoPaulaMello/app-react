import { useState } from "react"
import "./singIn.css"



const SingIn = ()=>{

    const [data, setData] = useState({
        email: '',
        password: '',
        passAgain: ''
    })

    const [error,setError] = useState(false)
    const [blocked, setBlocked] = useState(false)


    async function handleLogin(e, data){
        e.preventDefault() 

        setError(false)

        function verEmail(email){
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
          }

        function verPass(pass, passAgain){
            let verificacoes = [/[A-Z]/,/[a-z]/,/[0-9]/,/[!|@|#|$|%|^|&|*|(|)|-|_]/]

            for(let i = 0; i<verificacoes.length;i++){
                if(verificacoes[i].test(pass)){
                    console.log('ok')
                } else {
                    return false
                }
            }
            if(passAgain === pass){
                return true
            }
            
            return false
        }

        if(verEmail(data.email) && verPass(data.password, data.passAgain)){

            setBlocked(true)

            let user = {
                email: data.email,
                password: data.password,
            }

            let objConf = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(user),
            }

            await fetch('http://localhost:5000/singIn', objConf)
            .then(()=>{
                console.log('oi')
            })
            .catch(()=>{
                console.log("hum")
            })
            .finally(
                setBlocked(false)
            )
        } else {
            setError(true)
        }


    

    }


    return(
        <div className='containerSingIn'>
            <form className='formSingIn'>
                <input 
                type="email" 
                className='inputSingIn'
                placeholder="Email" 
                required
                onChange={(e)=>{
                    setData({...data, email: e.target.value})
                }}/>

                <input 
                type="password" 
                className='inputSingIn'
                placeholder="Password"
                required
                onChange={(e)=>{
                    setData({...data, password: e.target.value})
                }}/>

                <input 
                type="password" 
                className='inputSingIn'
                placeholder="Repeat the password"
                required
                onChange={(e)=>{
                    setData({...data, passAgain: e.target.value})
                }}/>
                {error === true && <span className="error">User or password is not valid </span>}
                <button type="submit" className='buttonSingIn' disabled={blocked} onClick={(e)=>handleLogin(e, data)}>Sing In</button>
                <p id="createAccount-p">Do you have a account?<a id="createAccount-a" href='#'> Sing In now!</a></p>
            </form>
        </div>
    )
}

export default SingIn