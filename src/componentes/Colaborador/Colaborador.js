import "./Colaborador.css"
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

export const Colaborador = ({
    colaborador,
    corCabecalho,
    aoExcluirColaborador,
    aoFavoritarColaborador
}) => {

    const cssCabecalho = { backgroundColor: corCabecalho }


    return (
        <div className="colaborador">
            <AiFillCloseCircle className="deletar"
                onClick={() => aoExcluirColaborador(colaborador.id)}
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
                        ? <AiFillHeart onClick={() => aoFavoritarColaborador(colaborador.id)}
                            size={24}
                            color="ff0000"
                        />
                        : <AiOutlineHeart onClick={() => aoFavoritarColaborador(colaborador.id)}
                            size={24}
                            color="ff0000"
                        />
                    }
                </div>
            </div>
        </div>
    )
}