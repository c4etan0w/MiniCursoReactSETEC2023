function Title({ nome, paragrafo, cor }) {
    const soma = 10 + 5
    const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Fatec-sorocaba.png"

    return (
        <>
            <h1 style={{color: cor}}>Meu título</h1>
            <h2>{nome}</h2>
            {/* <img src={imgUrl} style= {{width: "100px"}}/> */}
            {/* {paragrafo
                ? <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi maxime asperiores natus error recusandae sequi numquam, inventore sed dolor est porro delectus voluptate nihil, veniam totam! Rem, numquam doloremque. Ratione.</p>
                : null
            } */}

            {paragrafo &&
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi maxime asperiores natus error recusandae sequi numquam, inventore sed dolor est porro delectus voluptate nihil, veniam totam! Rem, numquam doloremque. Ratione.</p>
            }
        </>
    )
}

export default Title 