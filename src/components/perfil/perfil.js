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

                        <div className="grupos">
                            <p className="grupo"></p>
                            <p className="grupo"></p>
                            <p className="grupo"></p>
                            <p className="grupo"></p>
                            <p className="grupo"></p>
                            <p className="grupo"></p>
                            <p className="grupo"></p>
                            <p className="grupo"></p>
                            <p className="grupo"></p>
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
                    <div className="publicacoes-perfil">
                        <div className="publicacoes">
                            <div className="publicacao">
                                <div className="autor">
                                    <img src={Felipe} alt="A"/>
                                    <h3>Autor</h3>
                                </div>
                                <div className="conteudo">
                                    <p>Felipe Neto é um youtuber!</p>
                                </div>
                            </div>
                            <div className="publicacao">
                                <div className="autor">
                                    <img src={Felipe} alt="A"/>
                                    <h3>Autor</h3>
                                </div>
                                <div className="conteudo">
                                    <p>Felipe Neto é um youtuber!</p>
                                </div>
                            </div>
                            <div className="publicacao">
                                <div className="autor">
                                    <img src={Felipe} alt="A"/>
                                    <h3>Autor</h3>
                                </div>
                                <div className="conteudo">
                                    <p>Felipe Neto é um youtuber!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }



    
        


}

export default Perfil