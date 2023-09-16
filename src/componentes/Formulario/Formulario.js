import "./Formulario.css";
import { useState } from 'react';
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import CampoCor from "../CampoCor";


export const Formulario = (props) => {

    const [nome, setNome] = useState("")


    const [cargo, setCargo] = useState("")


    const [imagem, setImagem] = useState("")


    const [time, setTime] = useState("")


    const [timeNome, setTimeNome] = useState("")


    const [timeCor, setTimeCor] = useState("")


    const aoSalvarColaborador = (evento) => {
        evento.preventDefault()
        props.aoAdicionarColaborador({
            nome, cargo, imagem, time
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }


    const aoSalvarTime = (evento) => {
        evento.preventDefault()
        props.aoAdicionarTime({
            nome: timeNome, cor: timeCor
        })
        setTimeNome("")
        setTimeCor("")
    }


    return (
        <section className="formulario">
            <form onSubmit={aoSalvarColaborador}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    placeholder="Digite o seu nome"
                    obrigatorio={true}
                />
                <CampoTexto label="Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    placeholder="Digite o seu cargo"
                    obrigatorio={true}
                />
                <CampoTexto label="Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    placeholder="Digite a URL da sua imagem, ex: https://github.com/***.png"
                />
                <ListaSuspensa label="Time"
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    itens={props.times}
                    obrigatorio={true}
                />
                <Botao texto="Criar Card" />
            </form>

            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar um novo time</h2>
                <CampoTexto label="Nome"
                    valor={timeNome}
                    aoAlterado={valor => setTimeNome(valor)}
                    placeholder="Digite o nome do time"
                    obrigatorio={true}
                />
                <CampoCor label="Cor"
                    valor={timeCor}
                    aoAlterado={valor => setTimeCor(valor)}
                    placeholder="Digite a cor do time"
                    obrigatorio={true}
                />
                <Botao texto="Criar um novo time" />
            </form>
        </section>
    )
}