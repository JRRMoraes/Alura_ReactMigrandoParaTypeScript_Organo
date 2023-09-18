import "./Time.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba'
import ITime from "../../compartilhado/interfaces/ITime"
import IColaborador from "../../compartilhado/interfaces/IColaborador"


interface TimeProps {
    time: ITime
    colaboradores: IColaborador[]
    aoExcluirColaborador: (colaborador: IColaborador) => void
    aoAlterarCorDoTime: (time: ITime, cor: string) => void
    aoFavoritarColaborador: (colaborador: IColaborador) => void
}


export const Time = ({
    time,
    colaboradores,
    aoExcluirColaborador,
    aoAlterarCorDoTime,
    aoFavoritarColaborador
}: TimeProps) => {

    const cssCabecalho = { borderColor: time.cor }


    const cssFundo = { backgroundColor: hexToRgba(time.cor, 0.6), backgroundImage: 'url(/imagens/fundo.png)' }


    function ExecutarAoAlterarCorDoTime(evento: React.ChangeEvent<HTMLInputElement>) {
        if (aoAlterarCorDoTime)
            aoAlterarCorDoTime(time, evento.target.value)
    }

    return (
        (colaboradores.length > 0) &&

        <section className="time" style={cssFundo}>
            <input className="input-cor"
                type="color"
                value={time.cor}
                onChange={evento => ExecutarAoAlterarCorDoTime(evento)}
            />
            <h3 style={cssCabecalho}>{time.nome}</h3>
            {colaboradores.map((colaboradorI, indiceI) =>
                <Colaborador key={indiceI}
                    colaborador={colaboradorI}
                    corCabecalho={time.cor}
                    aoExcluirColaborador={aoExcluirColaborador}
                    aoFavoritarColaborador={aoFavoritarColaborador}
                ></Colaborador>
            )}
        </section>
    )
}
export default Time 