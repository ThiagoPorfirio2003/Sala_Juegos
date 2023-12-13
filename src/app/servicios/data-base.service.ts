import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, doc, setDoc, orderBy, query, getDoc, updateDoc } from 'firebase/firestore';
import { Usuario } from '../clases/usuario';
import { Mensaje } from '../clases/mensaje';
import { UsuarioEstadistica } from '../clases/estadisticas/usuarioEstadistica';
import { Encuesta } from '../clases/encuesta';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService
{
  //  //fotosUnaPalabra

  private collectionUsuarios;
  private collectionLogs;
  private collectionMensajes;
  private collectionEstadisticas;
  private collectionEncuesta;
  private collectionFotosUnaPalabra;

  constructor(private fireStore : Firestore, private auth : Auth) 
  { 
    this.collectionUsuarios = collection(this.fireStore,"usuarios");
    this.collectionLogs = collection(this.fireStore,"logs");  
    this.collectionMensajes = collection(this.fireStore, "mensajes");
    this.collectionEstadisticas = collection(this.fireStore, 'estadisticas');
    this.collectionEncuesta = collection(this.fireStore, 'encuestas')
    this.collectionFotosUnaPalabra = collection(this.fireStore, 'fotosUnaPalabra');
  }

  public get UsuariosCollectionData()
  {
    return collectionData(this.collectionUsuarios);
  }

  public get LogsCollectionData()
  {
    return collectionData(this.collectionLogs);
  }

  public get MensajesCollectionData()
  {
    return collectionData(this.collectionMensajes);
  }
  
  public get EstadisticasCollectionData()
  {
    return collectionData(this.collectionEstadisticas);
  }

  public get EncuestaCollectionData()
  {
    return collectionData(this.collectionEncuesta);
  }

  public get FotosUnaPalabraCollectionData()
  {
    return collectionData(this.collectionFotosUnaPalabra)
  }

  public get MensajesQuery()
  {
    return query(this.collectionMensajes, orderBy('fechaEmision','asc'))
  }

  public crearUsuario({mail, clave} : any) 
  {
    return createUserWithEmailAndPassword(this.auth, mail, clave)
  }

  public iniciarSesion({mail, clave} : any)
  {
    return signInWithEmailAndPassword(this.auth, mail, clave);
  }
  
  public cerrarSesion()
  {
    return signOut(this.auth);
  }

  public agregarEstadistica(estadistica : UsuarioEstadistica)
  {
    const documentoLogs = doc(this.collectionEstadisticas);

    return setDoc(documentoLogs,
    {
      id : documentoLogs.id,
      idUsuario : estadistica.idUsuario,
      nombreUsuario : estadistica.nombreUsuario,
      idJuego : estadistica.idJuego,
      partidasJugadas : estadistica.partidasJugadas,
      partidasGanadas : estadistica.partidasGanadas,
      partidasPerdidas : estadistica.partidasPerdidas,
      rachaActual : estadistica.rachaActual,
      mayorRacha : estadistica.mayorRacha,
      rachaPerdidasActual : estadistica.rachaPerdidasActual,
      mayorRachaPerdidas : estadistica.mayorRachaPerdidas
    })
  }

  public actualizarEstadistica(estadistica : UsuarioEstadistica)
  {
    updateDoc(doc(this.fireStore, 'estadisticas', estadistica.id), 
    {
      partidasJugadas : estadistica.partidasJugadas,
      partidasGanadas : estadistica.partidasGanadas,
      partidasPerdidas : estadistica.partidasPerdidas,
      rachaActual : estadistica.rachaActual,
      mayorRacha : estadistica.mayorRacha,
      rachaPerdidasActual : estadistica.rachaPerdidasActual,
      mayorRachaPerdidas : estadistica.mayorRachaPerdidas
    })
    .catch(error=> console.log(error));
  }

  public agregarDatosUsuario(usuario : Usuario)
  {
    return setDoc(doc(this.fireStore, 'usuarios', usuario.Id),
    {
      id : usuario.Id,
      nombre : usuario.Nombre,
      apellido : usuario.Apellido, 
      nombreUsuario: usuario.NombreUsuario,
      mail : usuario.Mail,
      fechaCreacion : usuario.FechaCreacion,
      tipo : usuario.Tipo
    })
  }

  public agregarEncuesta(encuesta : Encuesta)
  {
    return setDoc(doc(this.collectionEncuesta),
    {
      nombreUsuario : encuesta.nombreUsuario,
      nombreEncuestado : encuesta.nombreEncuestado,
      apellidoEncuestado : encuesta.apellidoEncuestado,
      edadEncuestado : encuesta.edadEncuestado,
      numeroTelefono : encuesta.numeroTelefono,
      queTanDivertidoEs : encuesta.queTanDivertidoEs,
      calidadDeLosControles : encuesta.calidadDeLosControles,
      recomendariasElJuego : encuesta.recomendariasElJuego,
      idJuego : encuesta.idJuego
    })
  }

  public agregarLog(nombreUsuario : string, fechaIngreso : Date)
  {
    const documentoLogs = doc(this.collectionLogs);

    return setDoc(documentoLogs,
    {
      fechaIngreso : fechaIngreso,
      nombreUsuario : nombreUsuario
    });
  }

  public agregarMensaje(mensaje : Mensaje)
  {
    const documentoMensajes = doc(this.collectionMensajes);

    return setDoc(documentoMensajes,
    {
      texto : mensaje.Texto,
      nombreUsuarioEmisor : mensaje.NombreUsuarioEmisor,
      fechaEmision : mensaje.FechaEmisionDate
    }
    )
  }

  public getUsuarioRef(idUsuario : string)
  {
    return getDoc(doc(this.collectionUsuarios, idUsuario));
  }

  /*
  public getSiguienteIdEstadistica()
  {
    return doc(this.collectionEstadisticas).id;
  }*/
}
