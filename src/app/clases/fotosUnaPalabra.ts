export class fotosUnaPalabra
{
    //public static id : number = 0;
    //public static nombre : string = 'Ahorcado';
    private palabraAEncontrar : string;
    private palabraAMostrar : string;
    private urlImagenes : string[];

    
    public constructor(palabraAEncontrar : string, urlImagenes : string[])
    {
        this.palabraAEncontrar = palabraAEncontrar;
        this.urlImagenes = urlImagenes;

        this.palabraAMostrar = '';
    }

    public static getDefault() : fotosUnaPalabra
    {
        return new fotosUnaPalabra('',['']);
    }

    public get PalabraAEncontrar() : string
    {
        return this.palabraAEncontrar;
    }

    public get PalabraAMostrar() : string
    {
        return this.palabraAMostrar;
    }

    public get UrlImagenes() : string[]
    {
        return this.urlImagenes;
    }

    public resetPalabraAMostrar() :  void
    {   
        this.palabraAMostrar = '';
        for(let i : number =0 ; i< this.palabraAEncontrar.length; i++)
        {
            this.palabraAMostrar+= '_';

            if(i < this.palabraAEncontrar.length - 1)
            {
                this.palabraAMostrar+= ' ';
            }
        }

        this.palabraAMostrar = this.palabraAMostrar.trimEnd();
    }

    public recibirLetra(letra : string)
    {
        let letraActual : string;
        let palabraAuxiliar : string;
        let letraAgregada : boolean;

        palabraAuxiliar = '';
        letraAgregada = false;

        for(let i : number=0;i < this.PalabraAMostrar.length;i++)
        {
            letraActual = this.palabraAMostrar[i];

            if(letraActual == '_' && !letraAgregada)
            {
                palabraAuxiliar+= letra;
                letraAgregada = true;
            }
            else
            {
                palabraAuxiliar+=letraActual
            }
        }

        this.palabraAMostrar = palabraAuxiliar;
    }
    

    public sacarLetra(indice : number)
    {
        let letraActual : string;
        let palabraAuxiliar : string;

        palabraAuxiliar = '';

        for(let i : number=0;i < this.PalabraAMostrar.length;i++)
        {
            letraActual = this.palabraAMostrar[i];

            if(i == indice)
            {
                palabraAuxiliar+='_'
            }
            else
            {
                palabraAuxiliar+=letraActual;
            }
        }

        this.palabraAMostrar = palabraAuxiliar;
    }

    public recibirPalabra(palabra : string)
    {
        return this.palabraAEncontrar.toLowerCase() == palabra.toLowerCase();
    }

    public static armar(docJuego : any)
    {
        return new fotosUnaPalabra(docJuego['palabraAEncontrar'], docJuego['urlImagenes']);
    }

    public static armarLista(docJuegos : Array<any>) : Array<fotosUnaPalabra>
    {
        let retorno : Array<fotosUnaPalabra>;
        
        retorno = new Array<fotosUnaPalabra>()

        docJuegos.forEach((juego)=>
        {
            retorno.push(fotosUnaPalabra.armar(juego));
        })

        return retorno;
    }
}