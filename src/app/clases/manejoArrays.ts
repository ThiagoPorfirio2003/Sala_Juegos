export class ManejoArrays
{
    public static cambiarOrden<T>(array : Array<T>) : Array<T>
    {
        let retorno : Array<T>;
        let posicionesParaUsar : Array<number>;
        let indice : number;

        retorno = new Array<T>();
        posicionesParaUsar = new Array<number>();

        for(let i: number=0; i< array.length;i++)
        {
            posicionesParaUsar.push(i);
        }

        while(retorno.length != array.length)
        {
            indice = Math.floor(Math.random() * posicionesParaUsar.length);

            retorno.push(array[posicionesParaUsar[indice]]);

            posicionesParaUsar.splice(indice,1);
        }
    
        return retorno;
    }
}