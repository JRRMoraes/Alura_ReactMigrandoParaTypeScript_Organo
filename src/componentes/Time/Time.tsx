import "./Time.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';
import ITime from "../../compartilhado/interfaces/ITime";
import IColaborador from "../../compartilhado/interfaces/IColaborador";


interface TimeProps {
    time: ITime;
    colaboradores: IColaborador[];
    aoExcluirColaborador: (timeId: string) => void;
    aoAlterarCorDoTime: (valor: string, timeId: string) => void;
    aoFavoritarColaborador: (timeId: string) => void;
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
            aoAlterarCorDoTime(evento.target.value, time.id)
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