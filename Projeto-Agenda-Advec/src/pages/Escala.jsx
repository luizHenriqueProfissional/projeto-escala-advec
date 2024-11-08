import { React, useEffect, useState } from 'react'

function Escala() {
    const [nome, setNome] = useState('');
    const [cultos, setCultos] = useState('')
    const [nomeSalvo, setNomeSalvo] = useState('');
    const [cultoSalvo, setCultoSalvo] = useState('')
    const [estaCarregando, setEstaCarregando] = useState(true)


    const toggleState = () => {
        setEstaCarregando(prevState => !prevState);
    }



    const buscaNome = (event) => {
        setNome(event.target.value);
    };
    const buscaCulto = (event) => {
        setCultos(event.target.value);
    }

    const handleSalvarNome = (e) => {
        e.preventDefault();
        setNomeSalvo(nome);
        setCultoSalvo(cultos)
    };
    const limpaCamposSalvos = (e) => {
        e.preventDefault();
        setNomeSalvo('');
        setCultoSalvo('');
    }


    return (
        <main>
            {estaCarregando ? (<button onClick={toggleState}>Estou disponivel para escala</button>
            ) : (
                <form>
                <h1>Escala da semana</h1>
                <label htmlFor="">Seu nome:</label>
                <input onChange={buscaNome} value={nome} type="text" />
                <label htmlFor="">Culto:</label>
                <input onChange={buscaCulto} value={cultos} type="text" />
                <button onClick={handleSalvarNome}>Cadastrar</button>
                <button onClick={limpaCamposSalvos}>Limpar</button>
            </form>
)
            }
            <aside>
                {nomeSalvo && <h2>Nome salvo: {nomeSalvo} {cultoSalvo}</h2>}
            </aside>
        </main>
    )
}
export default Escala;
