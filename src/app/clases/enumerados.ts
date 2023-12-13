export enum EnumIdJuegos
{
    No_existe =-1,
    Ahorcado,
    Mayor_o_menor,
    Preguntados,
    Fotos_una_palabra,
}

export enum EnumTipoUsuario
{
    Administrador,
    Normal
}

export enum EnumNivelDiversion
{
    No_existe,
    Nada,
    Poco,
    Decente,
    Mucho
}

export enum EnumEstadoMayorMenor
{
    Vigente,
    Ganado,
    Perdido
}

export class ManejoEnum
{
    static idJuegoToPalabra(tipoJuego : EnumIdJuegos) : string
    {
        return EnumIdJuegos[tipoJuego].replaceAll('_',' ')
    }

    static nivelDiversionToPalabra(nivelDiversion : EnumNivelDiversion) : string
    {
        return EnumNivelDiversion[nivelDiversion].replaceAll('_',' ');
    }
}