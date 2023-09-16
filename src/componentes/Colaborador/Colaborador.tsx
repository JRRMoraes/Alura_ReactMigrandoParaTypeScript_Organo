import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import IColaborador from "../../compartilhado/interfaces/IColaborador";


interface IColaboradorProps {
    colaborador: IColaborador;
    corCabecalho: string;
    aoExcluirColaborador: (timeId: string) => void;
    aoFavoritarColaborador: (timeId: string) => void;
}


export const Colaborador = ({
    colaborador,
    corCabecalho,
    aoExcluirColaborador,
    aoFavoritarColaborador
}: IColaboradorProps) => {

    const cssCabecalho = { backgroundColor: corCabecalho }


    function ExecutarAoExcluirColaborador() {
        if (aoExcluirColaborador)
            aoExcluirColaborador(colaborador.id)
    }


    function ExecutarAoFavoritarColaborador() {
        if (aoFavoritarColaborador)
            aoFavoritarColaborador(colaborador.id)
    }


    return (
        <div className="colaborador">
            <AiFillCloseCircle className="deletar"
                onClick={() => ExecutarAoExcluirColaborador()}
                size={24}
            />
            <div className="cabecalho" style={cssCabecalho} >
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favorito">
                    {colaborador.favorito
                        ? <AiFillHeart onClick={() => ExecutarAoFavoritarColaborador()}
                            size={24}
                            color="ff0000"
                        />
                        : <AiOutlineHeart onClick={() => ExecutarAoFavoritarColaborador()}
                            size={24}
                            color="ff0000"
                        />
                    }
                </div>
            </div>
        </div>
    )
}
export default Colaborador;