import { ReactElement } from "react"
import "./Botao.css"


interface BotaoProps {
    children: ReactElement | string
}


export const Botao = ({
    children
}: BotaoProps) => {
    return (
        <button className="botao">
            {children}
        </button>
    )
}
export default Botao