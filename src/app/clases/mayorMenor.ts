import { Carta } from "./carta";
import { EnumEstadoMayorMenor } from "./enumerados";

export class mayorMenor
{
    private cartas : Array<Carta>;
    public cartaAMostrar : Carta;
    private posicionActual : number;

    constructor(cartas : Array<Carta>)
    {
        this.cartas = cartas;
        this.cartaAMostrar = cartas[0];
        this.posicionActual = 0;
    }

    public recibirRespuesta(esMayor : boolean) : EnumEstadoMayorMenor
    {
        let retorno : EnumEstadoMayorMenor;
        let laSiguienteEsMayor : boolean;
        let valorActual : number;
        let esCorrectaRespuesta : boolean;

        retorno = EnumEstadoMayorMenor.Vigente;
        valorActual = this.cartas[this.posicionActual].valor;
        this.posicionActual++;
        laSiguienteEsMayor = valorActual < this.cartas[this.posicionActual].valor;
        esCorrectaRespuesta = false;

        if(laSiguienteEsMayor && esMayor)
        {
            esCorrectaRespuesta = true;
        }
        else
        {
            if(!laSiguienteEsMayor && !esMayor)
            {
                esCorrectaRespuesta = true;
            }
        }

        if(esCorrectaRespuesta)
        {
            if(this.posicionActual == this.cartas.length -1)
            {
                retorno = EnumEstadoMayorMenor.Ganado;
            }
            else
            {
                this.cartaAMostrar = this.cartas[this.posicionActual];
            }
        }
        else
        {
            retorno = EnumEstadoMayorMenor.Perdido;
        }

        return retorno;
    }

}