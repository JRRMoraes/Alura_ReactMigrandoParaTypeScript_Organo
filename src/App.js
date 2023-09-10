import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            nome: 'Programação',
            cor: '#d9f7e9'
        },
        {
            id: uuidv4(),
            nome: 'Front-End',
            cor: '#e8f8ff'
        },
        {
            id: uuidv4(),
            nome: 'Data Science',
            cor: '#f0f8e2'
        },
        {
            id: uuidv4(),
            nome: 'Devops',
            cor: '#fde7e8'
        },
        {
            id: uuidv4(),
            nome: 'UX e Design',
            cor: '#fae9f5'
        },
        {
            id: uuidv4(),
            nome: 'Mobile',
            cor: '#fff5d9'
        },
        {
            id: uuidv4(),
            nome: 'Inovação e Gestão',
            cor: '#ffeedf'
        }
    ])


    const AdicionarTime = (time) => {
        console.log("Adicionado time: " + time.nome)
        setTimes([...times, { ...time, id: uuidv4() }])
    }


    const AlterarCorDoTime = (cor, id) => {
        setTimes(times.map(time => {
            if (time.id === id) {
                time.cor = cor;
            }
            return time;
        }));
    }


    const COLABORADORES_INICIAIS = [
        {
            id: uuidv4(),
            nome: "JOÃO RICARDO",
            cargo: "Programador Senior",
            imagem: "https://github.com/JRRMoraes.png",
            time: times[0].nome,
            favorito: false
        },
        {
            id: uuidv4(),
            nome: "DANILA MORAES",
            cargo: "Programador Junior",
            imagem: "https://github.com/JRRMoraes.png",
            time: times[2].nome,
            favorito: false
        }
    ]


    const [colaboradores, setColaboradores] = useState(COLABORADORES_INICIAIS)


    const AdicionarColaborador = (colaborador) => {
        console.log("Adicionado colaborador: " + colaborador.nome + ", do time " + colaborador.time)
        setColaboradores([...colaboradores, { ...colaborador, id: uuidv4() }])
    }


    const ExcluirColaborador = (id) => {
        console.log("Exclui colaborador: " + id)// + colaborador.nome + ", do time " + colaborador.time)
        setColaboradores(colaboradores.filter(colaborador => (colaborador.id !== id)))
    }


    const FavoritarColaborador = (id) => {
        console.log("Favoritar colaborador: " + id)// + colaborador.nome + ", do time " + colaborador.time)
        setColaboradores(colaboradores.map(colaborador => {
            if (colaborador.id === id) {
                colaborador.favorito = !colaborador.favorito;
            }
            return colaborador;
        }));
    }


    return (
        <div className="App">
            <Banner />
            <Formulario times={times.map(time => time.nome)}
                aoAdicionarColaborador={colaborador => AdicionarColaborador(colaborador)}
                aoAdicionarTime={time => AdicionarTime(time)}
            />
            <section className="times">
                {times.map((time, indice) =>
                    <Time key={indice}
                        time={time}
                        colaboradores={colaboradores.filter(colaborador => (colaborador.time === time.nome))}
                        aoExcluirColaborador={ExcluirColaborador}
                        aoAlterarCorDoTime={AlterarCorDoTime}
                        aoFavoritarColaborador={FavoritarColaborador}
                    ></Time>
                )}
            </section>
            <Rodape></Rodape>
        </div>
    );
}

export default App;
