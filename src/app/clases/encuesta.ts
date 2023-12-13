import { EnumIdJuegos, EnumNivelDiversion } from "./enumerados";

export class Encuesta
{
    /*
    Tiene que pedir los siguientes datos:
○ Nombre y apellido.
○ Edad, validar que sean mayores de 18 años y menores de 99 años.
○ Número de teléfono, validar que sean solo números y no más de 10
caracteres.
● Mínimo 3 preguntas.
○ Utilizar distintos controles, textbox, checkbox, radiobutton, etc.
○ No se pueden repetir.
    */
    public nombreUsuario : string;
    public nombreEncuestado : string;
    public apellidoEncuestado : string;
    public edadEncuestado : number;
    public numeroTelefono : number;

    public queTanDivertidoEs : EnumNivelDiversion;//Radio button
    public calidadDeLosControles : number; // Control de rango
    public recomendariasElJuego : boolean; // checkBox
    public idJuego : EnumIdJuegos;

    constructor(nombreUsuario : string, nombreEncuestado : string, apellidoEncuestado : string, edadEncuestado : number,
        numeroTelefono : number, queTanDivertidoEs : EnumNivelDiversion, calidadDeLosControles : number, 
        recomendariasElJuego : boolean, idJuego : EnumIdJuegos)
    {
        this.nombreUsuario = nombreUsuario;
        this.nombreEncuestado = nombreEncuestado;
        this.apellidoEncuestado = apellidoEncuestado;
        this.edadEncuestado = edadEncuestado;
        this.numeroTelefono = numeroTelefono;
        this.queTanDivertidoEs = queTanDivertidoEs;
        this.calidadDeLosControles = calidadDeLosControles;
        this.recomendariasElJuego = recomendariasElJuego;
        this.idJuego = idJuego;
    }
/*
    public toAny() : any
    {
        return {
            this.nombreUsuario = nombreUsuario;
            this.nombreEncuestado = nombreEncuestado;
            this.apellidoEncuestado = apellidoEncuestado;
            this.edadEncuestado = edadEncuestado;
            this.numeroTelefono = numeroTelefono;
            this.queTanDivertidoEs = queTanDivertidoEs;
            this.calidadDeLosControles
            this.recomendariasElJuego
            this.idJuego
        }
    }
*/
    public static getDefault() : Encuesta
    {
        return new Encuesta('','','',-1,-1,EnumNivelDiversion.No_existe, -1, false, EnumIdJuegos.No_existe);
    }

    public static armar(docEncuesta : any) : Encuesta
    {//numeroTelefono
        return new Encuesta(docEncuesta['nombreUsuario'], docEncuesta['nombreEncuestado'], 
        docEncuesta['apellidoEncuestado'], docEncuesta['edadEncuestado'], docEncuesta['numeroTelefono'], 
        docEncuesta['queTanDivertidoEs'], docEncuesta['calidadDeLosControles'], docEncuesta['recomendariasElJuego'], 
        docEncuesta['idJuego']);   
    }
    
    public static armarLista(docEncuestas : any[]) : any[]
    {
        let retorno : any[];

        retorno = new Array<any>();

        docEncuestas.forEach((encuesta)=>
        {
            retorno.push(Encuesta.armar(encuesta));
        })

        return retorno;
    }
}