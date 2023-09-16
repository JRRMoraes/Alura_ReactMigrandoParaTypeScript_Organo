import { ReactElement } from "react";
import "./Botao.css";


interface BotaoProps {
    children: ReactElement;
    texto: String;
}


export const Botao = ({
    children,
    texto
}: BotaoProps) => {
    return (
        <button className="botao">
            {children}
            {texto}
        </button>
    )
}
export default Botao;