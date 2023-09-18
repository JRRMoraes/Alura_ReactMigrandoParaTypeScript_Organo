import "./CampoCor.css"


interface ICampoCorProps {
    label: string
    valor: string
    placeholder: string
    aoAlterado: (valor: string) => void
    obrigatorio?: boolean
}


export const CampoCor = ({
    label,
    valor,
    placeholder,
    aoAlterado,
    obrigatorio = false
}: ICampoCorProps) => {

    const placeholderModificada = `${placeholder} ...`


    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (aoAlterado)
            aoAlterado(evento.target.value)
    }


    return (
        <div className="campo-cor">
            <label>{label}</label>
            <input type="color"
                value={valor}
                onChange={aoDigitar}
                placeholder={placeholderModificada}
                required={obrigatorio}
            />
        </div>
    )
}
export default CampoCor