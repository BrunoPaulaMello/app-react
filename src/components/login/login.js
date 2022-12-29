import {useState} from 'react'
import "./login.css"

const Login = ()=>{

    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [error,setError] = useState(false)
    const [blocked, setBlocked] = useState(false)

    async function handleLogin(e){
        e.preventDefault() 

        setError(false)

        function verEmail(){
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
          }

        function verPass(){
            let verificacoes = [/[A-Z]/,/[a-z]/,/[0-9]/,/[!|@|#|$|%|^|&|*|(|)|-|_]/]

            for(let i = 0; i<verificacoes.length;i++){
                if(verificacoes[i].test(password)){
                    console.log('ok')
                } else {
                    return false
                }
            }
            
            return true
        }

        if(verEmail() && verPass()){

            setBlocked(true)

            let user = {
                email: email,
                password: password,
            }

            let objConf = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(user),
            }

            await fetch('http://localhost:5000/login', objConf)
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

    return (
        <form>
            <input 
            type="email" 
            placeholder="Email" 
            required
            onChange={(e)=>{
                setEmail(e.target.value)
            }}/>

            <input 
            type="password" 
            placeholder="Password"
            required
            onChange={(e)=>{
                setPass(e.target.value)
            }}
            />
            {error === true && <span className="error">User or password is not valid </span>}
            <button type="submit" disabled={blocked} onClick={(e)=>handleLogin(e)}>Sing In</button>
            <p id="createAccount-p">Do not you have a account?<a id="createAccount-a" href='#'> Create now!</a></p>
        </form>
    )
}

export default Login