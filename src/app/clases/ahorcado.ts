export class Ahorcado
{
    public static id : number = 0;
    public static nombre : string = 'Ahorcado';
    private palabraAEncontrar : string;
    private palabraAMostrar : string;
    private pista : string;

    private erroresHechos : number;
    private erroresMaximo : number;
    
    public constructor(palabraAEncontrar : string, pista : string, erroresMaximo : number)
    {
        this.palabraAEncontrar = palabraAEncontrar;
        this.pista = pista;
        this.erroresMaximo = erroresMaximo;

        this.palabraAMostrar = '';
        this.erroresHechos = 0;
    }

    public static getDefault() : Ahorcado
    {
        return new Ahorcado('','',0);
    }

    public get PalabraAEncontrar() : string
    {
        return this.palabraAEncontrar;
    }

    public get PalabraAMostrar() : string
    {
        return this.palabraAMostrar;
    }

    public get Pista() : string
    {
        return this.pista;
    }

    public get ErroresHechos() : number
    {
        return this.erroresHechos;
    }

    public get ErroresMaximo() : number
    {
        return this.erroresMaximo;
    }

    public prepararPartida() :  void
    {   
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

    private buscarLetraYReemplazar(letra : string) : boolean
    {
        let contieneLaLetra : boolean = false;
        let arrayPosicionLetraValida : Array<number> = new Array<number>();

        for(let i : number = 0; i < this.palabraAEncontrar.length; i++)
        {
            if(this.palabraAEncontrar[i] == letra)
            {
                contieneLaLetra = true;
                arrayPosicionLetraValida.push(i);
            }
        }

        if(contieneLaLetra)
        {
            let huboCambio : boolean;
            let auxiliarPalabraAMostrar : string='';

            for(let i : number=0; i< this.palabraAEncontrar.length;i++)
            {
                huboCambio =false;

                for(let j : number=0; j< arrayPosicionLetraValida.length;j++)
                {
                    if(i == arrayPosicionLetraValida[j])
                    {
                        huboCambio = true;
                        auxiliarPalabraAMostrar+= this.palabraAEncontrar[i] + ' ';
                    }
                }

                if(!huboCambio)
                {
                    if(this.palabraAMostrar[i*2] == '_')
                    {
                        auxiliarPalabraAMostrar+='_';

                        if(i < this.palabraAEncontrar.length - 1)
                        {
                            auxiliarPalabraAMostrar+= ' ';
                        }
                    }
                    else
                    {
                        auxiliarPalabraAMostrar+= this.palabraAMostrar[i*2] + ' ';
                    }
                   
                }
            }

            this.palabraAMostrar = auxiliarPalabraAMostrar;
        }

        return contieneLaLetra;
    }

    //0: Letra erronea
    //1: Letra correcta
    //2: Ganaste
    //3: Perdiste
    public analizarLetra(letra : string) : number
    {
        let retorno : number = 0;
        let estaLaLetra : boolean = this.buscarLetraYReemplazar(letra)

        if(estaLaLetra)
        {
            retorno =1;
            if(!this.palabraAMostrar.includes('_'))
            {
                retorno = 2;
            }
        }
        else
        {
            this.erroresHechos++;
           
            if(this.erroresHechos == this.erroresMaximo)
            {
                retorno = 3;
            }
        }

        return retorno;
    }

}