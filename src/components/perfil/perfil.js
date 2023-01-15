import autenticacao from "../auth"
import "./perfil.css"

//Humm
import Felipe from "../images/felipe.png"
import Lupa from "../images/lupa.png"


const Perfil = ()=>{


    if(autenticacao()){
            return (
                <div className="box">
                    <div className="menu">
                        <div className="menuSearch">
                            <label className="search"><img src={Lupa} alt="?" className="lupa"/></label>
                            <input className="search" id="searchInput"></input>

                        </div>
                    </div>

                    <div className="perfil">
                        <div className="imgPerfil">
                            <img src={Felipe} alt="Felipe" className="imagem"/>
                            <p>@FelipeNeto</p>  
                        </div>
                        <div className="informacoes">
                            <p>
                                Follows: 12M <br/>
                                Age: 34
                            </p>
                        </div>
                    </div>
                </div>
            )
    }



    
        


}

export default Perfil