import "./Time.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba'

export const Time = ({
    time,
    colaboradores,
    aoExcluirColaborador,
    aoAlterarCorDoTime,
    aoFavoritarColaborador
}) => {

    const cssCabecalho = { borderColor: time.cor }


    const cssFundo = { backgroundColor: hexToRgba(time.cor, 0.6), backgroundImage: 'url(/imagens/fundo.png)' }


    return (
        (colaboradores.length > 0) &&

        <section className="time" style={cssFundo}>
            <input className="input-cor"
                type="color"
                value={time.cor}
                onChange={evento => aoAlterarCorDoTime(evento.target.value, time.id)}
            />
            <h3 style={cssCabecalho}>{time.nome}</h3>
            {colaboradores.map((colaborador, indice) =>
                <Colaborador key={indice}
                    colaborador={colaborador}
                    corCabecalho={time.cor}
                    aoExcluirColaborador={aoExcluirColaborador}
                    aoFavoritarColaborador={aoFavoritarColaborador}
                ></Colaborador>
            )}
        </section>
    )
}