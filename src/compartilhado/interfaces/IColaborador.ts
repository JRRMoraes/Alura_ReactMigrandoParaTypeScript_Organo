import ITime from "./ITime"


export interface IColaborador {
    idColaborador: string
    nome: string
    cargo: string
    imagem: string
    data: string
    favorito?: boolean
    time?: ITime
}
export default IColaborador
