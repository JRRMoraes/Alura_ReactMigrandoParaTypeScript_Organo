import { useState } from 'react'
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import CampoCor from "../CampoCor"
import IColaborador from '../../compartilhado/interfaces/IColaborador'
import ITime from '../../compartilhado/interfaces/ITime'
import { v4 as uuidv4 } from 'uuid'


interface IFormularioProps {
    aoAdicionarColaborador: (colaborador: IColaborador) => void
    aoAdicionarTime: (time: ITime) => void
    times: ITime[]
}


export const Formulario = ({
    aoAdicionarColaborador,
    aoAdicionarTime,
    times
}: IFormularioProps) => {

    const [colaboradorNome, setColaboradorNome] = useState("")


    const [colaboradorCargo, setColaboradorCargo] = useState("")


    const [colaboradorImagem, setColaboradorImagem] = useState("")


    const [colaboradorTime, setColaboradorTime] = useState("")


    const [colaboradorData, setColaboradorData] = useState("")


    const [timeNome, setTimeNome] = useState("")


    const [timeCor, setTimeCor] = useState("")


    const aoSalvarColaborador = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (!aoAdicionarColaborador)
            return
        let novoColaborador: IColaborador = {
            idColaborador: uuidv4(),
            nome: colaboradorNome,
            cargo: colaboradorCargo,
            imagem: colaboradorImagem,
            data: colaboradorData,
            favorito: false,
            time: times!.find((timeI) => timeI.nome === colaboradorTime)
        }
        aoAdicionarColaborador(novoColaborador)
        setColaboradorNome("")
        setColaboradorCargo("")
        setColaboradorImagem("")
        setColaboradorTime("")
        setColaboradorData("")
    }


    const aoSalvarTime = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (!aoAdicionarTime)
            return
        let novoTime: ITime = {
            idTime: uuidv4(),
            nome: timeNome,
            cor: timeCor
        }
        aoAdicionarTime(novoTime)
        setTimeNome("")
        setTimeCor("")
    }


    return (
        <section className="formulario">
            <form onSubmit={aoSalvarColaborador}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome"
                    valor={colaboradorNome}
                    aoAlterado={valor => setColaboradorNome(valor)}
                    placeholder="Digite o seu nome"
                    obrigatorio={true}
                />
                <CampoTexto label="Cargo"
                    valor={colaboradorCargo}
                    aoAlterado={valor => setColaboradorCargo(valor)}
                    placeholder="Digite o seu cargo"
                    obrigatorio={true}
                />
                <CampoTexto label="Imagem"
                    valor={colaboradorImagem}
                    aoAlterado={valor => setColaboradorImagem(valor)}
                    placeholder="Digite a URL da sua imagem, ex: https://github.com/***.png"
                />
                <CampoTexto label="Data de entrada no time"
                    valor={colaboradorData}
                    aoAlterado={valor => setColaboradorData(valor)}
                    tipo="date"
                    placeholder="Digite a data de entrada no time"
                />
                <ListaSuspensa label="Time"
                    valor={colaboradorTime}
                    aoAlterado={valor => setColaboradorTime(valor)}
                    itens={times.map((timeI) => timeI.nome)}
                    obrigatorio={true}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>

            <form onSubmit={() => aoSalvarTime}>
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
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}