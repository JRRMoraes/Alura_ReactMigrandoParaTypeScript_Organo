import { ReactElement } from "react";
import "./Botao.css";


interface BotaoProps {
    children: ReactElement,
    texto: string
}


export const Botao = (props: BotaoProps) => {
    return (
        <button className="botao">
            {props.children}
            {props.texto}
        </button>
    )
}