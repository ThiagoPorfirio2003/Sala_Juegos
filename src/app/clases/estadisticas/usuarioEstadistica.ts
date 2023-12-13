import { EnumIdJuegos } from "../enumerados";

export class UsuarioEstadistica
{
    public id : string;

    public idUsuario : string;
    public nombreUsuario : string;

    public idJuego : EnumIdJuegos;

    public partidasJugadas : number;
    public partidasGanadas : number;
    public partidasPerdidas : number;
    public rachaActual : number;
    public mayorRacha : number;
    public rachaPerdidasActual : number;
    public mayorRachaPerdidas : number;

    constructor(id : string, idUsuario : string, nombreUsuario : string, 
        idJuego : EnumIdJuegos, partidasJugadas : number, partidasGanadas : number, 
        partidasPerdidas : number, rachaActual : number, mayorRacha : number,
        rachaPerdidasActual : number, mayorRachaPerdidas : number)
    {
        this.id = id;
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario;
        this.idJuego = idJuego;
        this.partidasJugadas = partidasJugadas;
        this.partidasGanadas = partidasGanadas;
        this.partidasPerdidas = partidasPerdidas;
        this.rachaActual = rachaActual;
        this.mayorRacha = mayorRacha;

        this.rachaPerdidasActual = rachaPerdidasActual;
        this.mayorRachaPerdidas = mayorRachaPerdidas;
    }

    public static getDefault() : UsuarioEstadistica
    {
        return new UsuarioEstadistica('','','',EnumIdJuegos.No_existe,0,0,0,0,0,0,0);
    }

    public static crearEstadisticaNuevoUsuario(id : string ,idUsuario : string, nombreUsuario : string,
        idJuego : number)
    {
        return new UsuarioEstadistica(id, idUsuario, nombreUsuario, idJuego,
            0,0,0,0,0,0,0)
    }

    public static armar(docEstadistica : any) : UsuarioEstadistica
    {
        return new UsuarioEstadistica(docEstadistica['id'], docEstadistica['idUsuario'],
        docEstadistica['nombreUsuario'], docEstadistica['idJuego'],
        docEstadistica['partidasJugadas'], docEstadistica['partidasGanadas'],
        docEstadistica['partidasPerdidas'], docEstadistica['rachaActual'],
        docEstadistica['mayorRacha'], docEstadistica['rachaPerdidasActual'], docEstadistica['mayorRachaPerdidas']);
    }

    public static armarLista(docEstadistica : any[]) : any[]
    {
        let retorno : any[];

        retorno = [];

        docEstadistica.forEach((esta)=>
        {
            retorno.push(UsuarioEstadistica.armar(esta));
        })

        return retorno;
    }

    public toAny() : any
    {
        return `{` +
            `"id" : "${this.id}",` +
            `"idUsuario" : "${this.idUsuario}",` +
            `"nombreUsuario" : "${this.nombreUsuario}",` +
            `"idJuego" : ${this.idJuego},` +
            `"partidasJugadas" : ${this.partidasJugadas},` +
            `"partidasGanadas" : ${this.partidasGanadas},` +
            `"partidasPerdidas" : ${this.partidasPerdidas},` +
            `"rachaActual" : ${this.rachaActual},` +
            `"mayorRacha" : ${this.mayorRacha},` +
            `"rachaPerdidasActual" : ${this.rachaPerdidasActual},` +
            `"mayorRachaPerdidas" : ${this.mayorRachaPerdidas}` +
        `}`
/*
        return {
            id : this.id,
            idUsuario : this.idUsuario,
            nombreUsuario : this.nombreUsuario,
            idJuego : this.idJuego,
            partidasJugadas : this.partidasJugadas,
            partidasGanadas : this.partidasGanadas,
            partidasPerdidas : this.partidasPerdidas,
            rachaActual : this.rachaActual,
            mayorRacha : this.mayorRacha,
            rachaPerdidasActual : this.rachaPerdidasActual,
            mayorRachaPerdidas : this.mayorRachaPerdidas,
        }
        */
    }

    public actualizarDatos(ganoLaPartida : boolean) : void
    {
        this.partidasJugadas++;

        if(ganoLaPartida)
        {
            this.partidasGanadas++;
            this.rachaActual++;
            this.rachaPerdidasActual = 0;

            if(this.mayorRacha < this.rachaActual)
            {
                this.mayorRacha = this.rachaActual
            }
        }
        else
        {
            this.partidasPerdidas++;
            this.rachaPerdidasActual++;
            this.rachaActual =0;

            if(this.mayorRachaPerdidas < this.rachaPerdidasActual)
            {
                this.mayorRachaPerdidas = this.rachaPerdidasActual;
            }
        }
    }
}