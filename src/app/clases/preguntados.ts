export class Preguntados
{
    private tema : string;
    private pregunta : string;
    private respuestaCorrecta : string;
    private respuestasAMostrar : Array<string>;

    constructor(tema : string, pregunta : string, respuestaCorrecta : string,
        respuestasAMostrar : Array<string>)
    {
        this.tema = tema;
        this.pregunta = pregunta;
        this.respuestaCorrecta = respuestaCorrecta;
        this.respuestasAMostrar = respuestasAMostrar;
    }

    public recibirRespuesta(respuesta : string) : boolean
    {
        return respuesta == this.respuestaCorrecta;
    }

    public get Tema() : string
    {
        return this.tema;
    }

    public get Pregunta() : string
    {
        return this.pregunta;
    }

    public get RespuestasAMostrar() : Array<string>
    {
        return this.respuestasAMostrar;
    }

    public get RespuestaCorrecta() : string
    {
        return this.respuestaCorrecta;
    }

    public static armar(preguntado : any) : Preguntados
    {
        return new Preguntados(preguntado['category'], preguntado['question'], preguntado['correct_answer'],
        preguntado['incorrect_answers']);
    }

    public static armarLista(preguntados : Array<any>) : Array<Preguntados>
    {
        let retorno : Array<Preguntados>;

        retorno = new Array<Preguntados>();

        preguntados.forEach((element)=>
        {
            retorno.push(Preguntados.armar(element))
        })

        return retorno;
    }
}