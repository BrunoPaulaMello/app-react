

const Perfil = ()=>{

    localStorage.setItem("perfil", "bruno")
    let perfil = localStorage.getItem("perfil")

    return (
        <>
            {perfil}
        </>
    )
}

export default Perfil