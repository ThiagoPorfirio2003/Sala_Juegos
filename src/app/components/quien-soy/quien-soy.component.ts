import { Component } from '@angular/core';
import { ConsumoApiGitService } from '../../servicios/consumo-api-git.service';
import { Encuesta } from 'src/app/clases/encuesta';
import { Subscription } from 'rxjs';
import { Preguntados } from 'src/app/clases/preguntados';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent {

  public nombrePersonal! : string;
  public nombrePerfil! : string;
  public avatarUrl! : string;
  public perfilUrl! : string;

  private suscripcionGit! : Subscription;

  private partidas : Array<Preguntados>;

  constructor(public consumoApi : ConsumoApiGitService)
  {
    this.partidas = new Array<Preguntados>();
  }

  ngOnInit()
  {
    this.cargarDatos();
    this.cargarDatos();
  }

  ngOnDestroy()
  {
    this.suscripcionGit.unsubscribe();
  }

  private cargarDatos() : void
  {
    this.suscripcionGit = this.consumoApi.getObservale('https://api.github.com/users/ThiagoPorfirio2003')
    .subscribe((datos : any)=>
    {
      this.nombrePerfil = datos.login;
      this.nombrePersonal = datos.name
      this.avatarUrl = datos.avatar_url;
      this.perfilUrl = datos.html_url;
    })
  }

  /*
  private cargarPreguntados()
  {
    let temas : string[] =
    [
      'GTA V',
      'The witcher 3',
      'Portal 2',
      'CS GO',
      'Left 4 Dead 2',
      'Skyrim',
      'BioShock Infinite',
      'Borderlands 2',
      'Life is Strange',
      'God of War (2018)',
      'DOOM(2016)'
    ]

    let preguntas : string[] =
    [
      'En que año salio',
      'Como se llama el protagonista',
      'Que empresa creo el juego',
      'Que equipo gano el Major en 2023',
      'De hasta cuantos jugadores se puede jugar en una partida',
      'Para cual de estas plataformas no estuvo disponible desde su lanzamiento',
      'Como se llama la ciudad en la que ocurre el juego?',
      'Cual de estos personajes no pertenece al juego',
      'Cuantos capitulos tiene el juego',
      'Como se llama el hijo de kratos',
      'Cuantos años pasaron entre el lanzamiento de este y el anterior'
    ]

    let respuestasCorrectas : string[]=
    [
      '2013',
      'Geralt de Rivia',
      'Valve Corporation',
      'Vitaly',
      '4',
      'Nintendo Switch',
      'Columbia',
      'Tank Dempsey',
      '5',
      'Atreus',
      '4'
    ]

    let respuestasAMostrar : Array<string[]>=
    [
      ['2011','2012','2013','2014'],
      ['Geralt de Rivia','Marcus Phoenix','Steve','Jonesy'],
      ['Epic Games','Mojang','Activision','Valve Corporation'],
      ['LDLC','Vitaly','Fnatic','Astralis'],
      ['1','2','3','4'],
      ['PS3','XBOX360','PC','Nintendo Switch'],
      ['San andreas','New York','Columbia','Astrea'],
      ['Mordecai','Geige','Krieg','Tank Dempsey'],
      ['1','5','8','3'],
      ['Baldur','Atreus','Thor','Mimir'],
      ['4','8','3','10']
    ]

    let urlImagnes : string[]=
    [

    ]


    for(let i : number=0; i< temas.length; i++)
    {
      this.partidas.push(new Preguntados(temas[i], preguntas[i], respuestasCorrectas[i],respuestasAMostrar[i],''))
    }
  }

  */
  /*
  GTA 5: id 3498
En que año salio:

'2011',
'2012',
'2013',
'2014'

The witcher 3:  id 3328
Como se llama el protagonista:

Geralt de Rivia
Marcus Phoenix
Steve
Jonesy


Portal 2 id 4200
Que empresa creo el juego

Epic Games
Mojang
Activision
Valve Corporation


CS GO 4291
Que equipo gano el Major en 2023

LDLC
Vitaly XXXXX
Fnatic
Astralis


Left 4 Dead 2  12020
De hasta cuantos jugadores se puede jugar en una partida

1
2
3
4

Skyrim 5679
Para cual de estas plataformas no estuvo disponible desde su lanzamiento

PS3
XBOX360
PC
Nintendo Switch

BioShock Infinite 4062
Como se llama la ciudad en la que ocurre el juego?

San andreas
New York
Columbia XXX	
Astrea

Borderlands 2  802
Cual de estos personajes no pertenece al juego

Mordecai
Geige
Krieg
Tank Dempsey

Life is Strange 3439
Cuantos capitulos tiene el juego

1
5 XXX
8
3

God of War (2018)
Como se llama el hijo de kratos?

Baldur
Atreus
Thor
Mimir

DOOM(2016) 2454
Cuantos anios pasaron entre el lanzamiento de este y el anterior

4
8
3
10
  */
}
