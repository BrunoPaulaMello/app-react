import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from "./container/container"
import Home from "./home/home"
import Login from "./login/login"
import Perfil from "./perfil/perfil"
import SingIn from "./singIn/singIn"


const Rotas = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/singIn" element={<SingIn/>}/>
                <Route exact path="/" element={<><Container/><Home/></>}/>
                <Route path="*" element={<><Container/><Home/></>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas