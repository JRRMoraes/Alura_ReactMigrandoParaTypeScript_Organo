import "./ListaSuspensa.css"


interface IListaSuspensaProps {
    label: string
    valor: string
    aoAlterado: (valor: string) => void
    obrigatorio?: boolean
    itens: string[]
}


export const ListaSuspensa = ({
    label,
    valor,
    aoAlterado,
    obrigatorio,
    itens
}: IListaSuspensaProps) => {

    function AoAlterar(evento: React.ChangeEvent<HTMLSelectElement>) {
        if (aoAlterado)
            aoAlterado(evento.target.value)
    }


    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select value={valor}
                onChange={evento => AoAlterar(evento)}
                required={obrigatorio}
            >
                <option value={""}></option>
                {itens.map(itemI => {
                    return <option key={itemI}>{itemI}</option>
                })}
            </select>
        </div>
    )
}
export default ListaSuspensa