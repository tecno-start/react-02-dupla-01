import PrivateRoute from './PrivateRoute'

const LOGIN = "/login"
const HOME = "/"
const CADASTRO = "/cadastro"
const POLITICA_PRIVACIDADE = '/politicas-de-privacidade'
const REDEFINIR_SENHA = '/redefinir-senha'
const MEUS_PONTOS = '/meus-pontos'
const BUSCAR_SALA = '/buscar-sala'
const CRIAR_SALA = '/criar-sala'
const NOT_FOUND = "/not-found"
const SALA_JOGO ='/jogo/{id}/{nome}'


export {
    PrivateRoute,
    LOGIN,
    HOME,
    CADASTRO,
    POLITICA_PRIVACIDADE,
    REDEFINIR_SENHA,
    MEUS_PONTOS,
    BUSCAR_SALA,
    CRIAR_SALA,
    NOT_FOUND,
    SALA_JOGO
}