import {useState} from "react"


function Estado({cor}) {
    const [text, setText] = useState("Texto inicial")
    const [inputText, setInputText] = useState("")


    return (
        <>
            <h1 style={{color: cor}}>Meu Estado: {text} </h1>
            <button onClick={() => setText("Novo texto")}>Alterar texto</button>
            <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text"/>
            <p>{inputText}</p>
        </>
    )
}

export default Estado 