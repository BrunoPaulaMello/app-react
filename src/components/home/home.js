import "./home.css"

const Home = ()=>{
    let img = 'https://th.bing.com/th/id/OIP.xglGEYVEg3fRQkSYHJ07ZQHaHa?w=206&h=206&c=7&r=0&o=5&pid=1.7'

    return (
        <div className="publicacoes">
            <div className="publicacao">
                <div className="autor">
                    <img src={img} alt="A"/>
                    <h3>Autor</h3>
                </div>
                <div className="conteudo">
                    <p>Felipe Neto é um youtuber!</p>
                </div>
            </div>
            <div className="publicacao">
                <div className="autor">
                    <img src={img} alt="A"/>
                    <h3>Autor</h3>
                </div>
                <div className="conteudo">
                    <p>Felipe Neto é um youtuber!</p>
                </div>
            </div>
            <div className="publicacao">
                <div className="autor">
                    <img src={img} alt="A"/>
                    <h3>Autor</h3>
                </div>
                <div className="conteudo">
                    <p>Felipe Neto é um youtuber!</p>
                </div>
            </div>
        </div>
    )

}

export default Home