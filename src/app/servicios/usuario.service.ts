import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { addDoc, collectionData, Firestore, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { collection, Primitive } from '@firebase/firestore';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { doc,setDoc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService 
{
  public usuarioLogueado : Usuario;
  public quiereRegistrarse : boolean;
  private estaLogueado : boolean;

  constructor() 
  {
    this.usuarioLogueado = Usuario.getDefaultUser();
    this.estaLogueado = false;
    this.quiereRegistrarse = false;
  }
  
  public loguearUsuario(usuario : Usuario) : void
  {
    this.usuarioLogueado = usuario;
    this.estaLogueado = true;
  }

  public desLoguearUsuario() : void
  {
    this.usuarioLogueado = Usuario.getDefaultUser();
    this.estaLogueado = false;
    this.quiereRegistrarse = false;
  }

  public get EstaLogueado() : boolean
  {
    return this.estaLogueado;
  }
}
