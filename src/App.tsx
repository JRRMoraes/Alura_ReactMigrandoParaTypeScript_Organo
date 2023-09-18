import { useState } from 'react'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import Time from './componentes/Time'
import Rodape from './componentes/Rodape'
import { v4 as uuidv4 } from 'uuid'
import IColaborador from "./compartilhado/interfaces/IColaborador"
import ITime from "./compartilhado/interfaces/ITime"


function App() {

    const [fTimes, setTimes] = useState<ITime[]>([
        {
            idTime: uuidv4(),
            nome: 'Programação',
            cor: '#d9f7e9'
        },
        {
            idTime: uuidv4(),
            nome: 'Front-End',
            cor: '#e8f8ff'
        },
        {
            idTime: uuidv4(),
            nome: 'Data Science',
            cor: '#f0f8e2'
        },
        {
            idTime: uuidv4(),
            nome: 'Devops',
            cor: '#fde7e8'
        },
        {
            idTime: uuidv4(),
            nome: 'UX e Design',
            cor: '#fae9f5'
        },
        {
            idTime: uuidv4(),
            nome: 'Mobile',
            cor: '#fff5d9'
        },
        {
            idTime: uuidv4(),
            nome: 'Inovação e Gestão',
            cor: '#ffeedf'
        }
    ])


    const AdicionarTime = (time: ITime) => {
        console.log("Adicionado time: " + time.nome)
        setTimes([...fTimes, { ...time, idTime: uuidv4() }])
    }


    const AlterarCorDoTime = (time: ITime, cor: string) => {
        setTimes(fTimes.map(timeI => {
            if (timeI.idTime === time.idTime)
                timeI.cor = cor
            return timeI
        }))
    }


    const COLABORADORES_INICIAIS: IColaborador[] = [
        {
            idColaborador: uuidv4(),
            nome: "JOÃO RICARDO",
            cargo: "Programador Senior",
            imagem: "https://github.com/JRRMoraes.png",
            time: fTimes[0],
            data: new Date("01/02/2000").toLocaleDateString(),
            favorito: false
        },
        {
            idColaborador: uuidv4(),
            nome: "DANILA MORAES",
            cargo: "Programador Junior",
            imagem: "https://github.com/JRRMoraes.png",
            time: fTimes[2],
            data: new Date("02/03/2001").toLocaleDateString(),
            favorito: false
        }
    ]


    const [fColaboradores, setColaboradores] = useState<IColaborador[]>(COLABORADORES_INICIAIS)


    const AdicionarColaborador = (colaborador: IColaborador) => {
        console.log("Adicionado colaborador: " + colaborador.nome + ", do time " + colaborador.time?.nome)
        setColaboradores([...fColaboradores, { ...colaborador, idColaborador: uuidv4() }])
    }


    const ExcluirColaborador = (colaborador: IColaborador) => {
        console.log("Exclui colaborador: " + colaborador.nome + ", do time " + colaborador.time?.nome)
        setColaboradores(fColaboradores.filter(colaboradorI => (colaboradorI.idColaborador !== colaborador.idColaborador)))
    }


    const FavoritarColaborador = (colaborador: IColaborador) => {
        console.log("Favoritar colaborador: " + colaborador.nome + ", do time " + colaborador.time?.nome)
        setColaboradores(fColaboradores.map(colaboradorI => {
            if (colaboradorI.idColaborador === colaborador.idColaborador)
                colaboradorI.favorito = !colaboradorI.favorito
            return colaboradorI
        }))
    }


    return (
        <div className="App">
            <Banner enderecoImagem="/imagens/banner.png"
                textoAlternativo="O banner principal da página do Organo"
            />
            <Formulario times={fTimes}
                aoAdicionarColaborador={AdicionarColaborador}
                aoAdicionarTime={AdicionarTime}
            />
            <section className="fTimes">
                {fTimes.map((timeI, indice) =>
                    <Time key={indice}
                        time={timeI}
                        colaboradores={fColaboradores.filter(colaboradorI => (colaboradorI.time?.nome === timeI.nome))}
                        aoExcluirColaborador={ExcluirColaborador}
                        aoAlterarCorDoTime={AlterarCorDoTime}
                        aoFavoritarColaborador={FavoritarColaborador}
                    />
                )}
            </section>
            <Rodape></Rodape>
        </div>
    )
}
export default App
