import { EnumTipoUsuario } from "./enumerados";

export class Usuario
{
    private id : string;
    private nombre : string;
    private apellido : string;
    private nombreUsuario : string;
    private mail : string;
    private fechaDeCreacion : Date;
    private tipo : EnumTipoUsuario;

    //admin1234
    //normal1234
    //thiago1234
    //mauro1234
    //tipo 0 = admin
    //tipo 1 = normal

    public constructor(id : string, nombre : string, apellido : string, nombreUsuario : string, mail : string, fechaDeCreacion : Date, tipo : EnumTipoUsuario)//, ultimaConexion : Date)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreUsuario = nombreUsuario;
        this.mail = mail;
        this.fechaDeCreacion = fechaDeCreacion;
        this.tipo = tipo;
    }
    
    public static getDefaultUser() : Usuario
    {
        return new Usuario('',"","","","",new Date(), 1);
    }

    public get Id() : string
    {
        return this.id;
    }

    public get Nombre() : string
    {
        return this.nombre;
    }

    
    public get Apellido() : string
    {
        return this.apellido;
    }

    public get NombreUsuario() : string
    {
        return this.nombreUsuario;
    }

    public get Mail() : string
    {
        return this.mail;
    }

    public get FechaCreacion() : Date
    {
        return this.fechaDeCreacion;
    }

    public get Tipo() : EnumTipoUsuario
    {
        return this.tipo;
    }

    /*
    public static agregar(nombre : string, clave : string, mail : string) : boolean
    {
        let usuarios_json : string | null;
        let usuarios : any[];
        let nuevoUsuario : any;
        let retorno : boolean = false;

        nuevoUsuario = 
        {
            nombre : nombre,
            clave : clave,
            mail : mail,
            fechaDeCreacion : new Date()
        }
        /
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.clave = clave;
        nuevoUsuario.mail = mail;
        nuevoUsuario.fechaDeCreacion = (new Date).getDate()/
        usuarios_json = Usuario.getUsuariosJSON();

        if(usuarios_json != null)
        {
            usuarios = JSON.parse(usuarios_json);
        }
        else
        {
            usuarios = new Array<any>();
        }

        if(usuarios.push(nuevoUsuario) > 0)
        {
            localStorage.setItem(Usuario.KEY_USUARIOS, JSON.stringify(usuarios));    
            retorno = true;
        }

        return retorno;
    }
    

    public static iniciarSesion(mail : string, clave : string) : string
    {
        let usuarios_json : string | null;
        let usuarios : any[];

        let retorno : any =
        {
            exito : false,
            usuario : null,
            mensaje: ""
        }

        usuarios_json = Usuario.getUsuariosJSON();

        if(usuarios_json != null)
        {
            usuarios = JSON.parse(usuarios_json);

            for(let i :number=0; i< usuarios.length;i++)
            {
                if(usuarios[i].mail === mail && usuarios[i].clave === clave)
                {
                    retorno.exito = true;
                    retorno.usuario = new Usuario(usuarios[i].nombre, usuarios[i].mail, usuarios[i].fechaDeCreacion);
                    break;
                }
            }
        }

        return JSON.stringify(retorno);
    }

    public static verificarExistencia(mail : string, nombre : string) : boolean
    {
        let usuarios_json : string | null;
        let usuarios : any[];
        let retorno : boolean;

        retorno= false;

        usuarios_json = Usuario.getUsuariosJSON();

        if(usuarios_json != null)
        {
            usuarios = JSON.parse(usuarios_json);
            for(let i :number=0; i< usuarios.length;i++)
            {
                if(usuarios[i].nombre == nombre || usuarios[i].mail == mail)
                {
                    retorno = true;
                    break;
                }
            }
        }
        return retorno;
    }
    */

}