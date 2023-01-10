import {useState} from 'react'
import "./login.css"

const Login = ()=>{

    const [data, setData] = useState({
        email: "",
        password: ""
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

        function verPass(pass){
            let verificacoes = [/[A-Z]/,/[a-z]/,/[0-9]/,/[!|@|#|$|%|^|&|*|(|)|-|_]/]

            for(let i = 0; i<verificacoes.length;i++){
                if(verificacoes[i].test(pass)){
                    console.log('ok')
                } else {
                    return false
                }
            }
            
            return true
        }

        if(verEmail(data.email) && verPass(data.password)){

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

            let res = await fetch('http://localhost:5000/login', objConf)
            .then((res)=>{
                return res.json()
            })
            .catch(()=>{
                console.log("hum")
            })
            .finally(
                setBlocked(false)
            )

            console.log(res)
        } else {
            setError(true)
        }


    

    }

    return ( 
        <div className='containerLogin'>
            <form className='formLogin'>

                <input 
                type="email" 
                className='inputLogin'
                placeholder="Email" 
                required
                onChange={(e)=>{
                    setData({...data, email: e.target.value})
                }}/>

                <input 
                type="password" 
                className='inputLogin'
                placeholder="Password"
                required
                onChange={(e)=>{
                    setData({...data, password: e.target.value})
                }}
                />
                {error === true && <span className="error">User or password is not valid </span>}
                <button type="submit" disabled={blocked} className={`buttonLogin ${blocked === true? "disabled": ""}`} onClick={(e)=>handleLogin(e, data)}>Sing In</button>
                <p id="createAccount-p">Do not you have a account?<a id="createAccount-a" href='#'> Create now!</a></p>
            </form>
        </div>
    )
}

export default Login