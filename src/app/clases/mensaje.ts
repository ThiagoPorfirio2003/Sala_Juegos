export class Mensaje
{
    private texto : string;
    private nombreUsuarioEmisor : string;
    private fechaEmision : Date;
    
    public constructor(texto : string, nombreUsuarioEmisor : string, fechaEmision : Date)
    {
        this.texto = texto;
        this.fechaEmision = fechaEmision;
        this.nombreUsuarioEmisor = nombreUsuarioEmisor;
    }

    public get Texto() : string
    {
        return this.texto;
    }

    public get NombreUsuarioEmisor() : string
    {
        return this.nombreUsuarioEmisor;
    }

    public get FechaEmisionDate() : Date 
    {
        return this.fechaEmision;
    }

    public get FechaEmisionString() : string
    {
        let apoyoHora : string;
        let apoyoMinutos : string
        let apoyoMes : string;
        let apoyoDia : string;

        apoyoHora='';
        apoyoMinutos='';
        apoyoDia = '';
        apoyoMes = '';

        if(this.fechaEmision.getMonth()+1 < 10)
        {
            apoyoMes+='0'
        }

        if(this.fechaEmision.getDate() < 10)
        {
            apoyoDia+='0';
        }

        if(this.fechaEmision.getHours() < 10)
        {
            apoyoHora+='0';
        }

        if(this.fechaEmision.getMinutes() < 10)
        {
            apoyoMinutos+='0';
        }

        apoyoHora+=this.fechaEmision.getHours();
        apoyoMinutos+=this.fechaEmision.getMinutes();
        apoyoMes+=this.fechaEmision.getMonth()+1;
        apoyoDia+=this.fechaEmision.getDate();

        return `${apoyoHora}:${apoyoMinutos} ` +
        `${apoyoDia}-${apoyoMes}-${this.fechaEmision.getFullYear()}`
    }
}