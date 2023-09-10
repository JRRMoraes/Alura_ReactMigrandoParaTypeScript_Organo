import "./CampoCor.css"

export const CampoCor = (props) => {

    const placeholderModificada = `${props.placeholder}...`


    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value);
    }


    return (
        <div className="campo-cor">
            <label>{props.label}</label>
            <input type="color"
                value={props.valor}
                onChange={aoDigitar}
                placeholder={placeholderModificada}
                required={props.obrigatorio}
            />
        </div>
    )
}