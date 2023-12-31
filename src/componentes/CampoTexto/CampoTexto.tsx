import "./CampoTexto.css"


interface CampoTextoProps {
    label: string
    valor: string
    placeholder: string
    aoAlterado: (valor: string) => void
    tipo?: "text" | "password" | "date" | "email" | "number"
    obrigatorio?: boolean
}


export const CampoTexto = ({
    label,
    valor,
    placeholder,
    aoAlterado,
    tipo = "text",
    obrigatorio = false
}: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...`


    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (aoAlterado)
            aoAlterado(evento.target.value)
    }


    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor}
                onChange={aoDigitar}
                type={tipo}
                placeholder={placeholderModificada}
                required={obrigatorio}
            />
        </div>
    )
}
export default CampoTexto