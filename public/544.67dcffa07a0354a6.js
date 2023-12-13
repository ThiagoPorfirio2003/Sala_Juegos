"use strict";(self.webpackChunksprint_1=self.webpackChunksprint_1||[]).push([[544],{1544:(T,d,l)=>{l.r(d),l.d(d,{AhorcadoModule:()=>f});var b=l(6814),p=l(8589);class s{constructor(r,i,a){this.palabraAEncontrar=r,this.pista=i,this.erroresMaximo=a,this.palabraAMostrar="",this.erroresHechos=0}static getDefault(){return new s("","",0)}get PalabraAEncontrar(){return this.palabraAEncontrar}get PalabraAMostrar(){return this.palabraAMostrar}get Pista(){return this.pista}get ErroresHechos(){return this.erroresHechos}get ErroresMaximo(){return this.erroresMaximo}prepararPartida(){for(let r=0;r<this.palabraAEncontrar.length;r++)this.palabraAMostrar+="_",r<this.palabraAEncontrar.length-1&&(this.palabraAMostrar+=" ");this.palabraAMostrar=this.palabraAMostrar.trimEnd()}buscarLetraYReemplazar(r){let i=!1,a=new Array;for(let e=0;e<this.palabraAEncontrar.length;e++)this.palabraAEncontrar[e]==r&&(i=!0,a.push(e));if(i){let e,o="";for(let c=0;c<this.palabraAEncontrar.length;c++){e=!1;for(let u=0;u<a.length;u++)c==a[u]&&(e=!0,o+=this.palabraAEncontrar[c]+" ");e||("_"==this.palabraAMostrar[2*c]?(o+="_",c<this.palabraAEncontrar.length-1&&(o+=" ")):o+=this.palabraAMostrar[2*c]+" ")}this.palabraAMostrar=o}return i}analizarLetra(r){let i=0;return this.buscarLetraYReemplazar(r)?(i=1,this.palabraAMostrar.includes("_")||(i=2)):(this.erroresHechos++,this.erroresHechos==this.erroresMaximo&&(i=3)),i}}var t=l(4946),m=l(3099),_=l(6116);let g=(()=>{var n;class r{constructor(){this.pasarTeclaApretadaEvent=new t.vpe}pasarTeclaApretada(a){this.pasarTeclaApretadaEvent.emit(a)}}return(n=r).\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-teclado"]],outputs:{pasarTeclaApretadaEvent:"pasarTeclaApretadaEvent"},decls:56,vars:0,consts:[[1,"keyboard"],[1,"keyboard__row"],["id","Q",1,"button-40",3,"click"],["id","W",1,"button-40",3,"click"],["id","E",1,"button-40",3,"click"],["id","R",1,"button-40",3,"click"],["id","T",1,"button-40",3,"click"],["id","Y",1,"button-40",3,"click"],["id","U",1,"button-40",3,"click"],["id","I",1,"button-40",3,"click"],["id","O",1,"button-40",3,"click"],["id","P",1,"button-40",3,"click"],["id","A",1,"button-40",3,"click"],["id","S",1,"button-40",3,"click"],["id","D",1,"button-40",3,"click"],["id","F",1,"button-40",3,"click"],["id","G",1,"button-40",3,"click"],["id","H",1,"button-40",3,"click"],["id","J",1,"button-40",3,"click"],["id","K",1,"button-40",3,"click"],["id","L",1,"button-40",3,"click"],["id","Z",1,"button-40",3,"click"],["id","X",1,"button-40",3,"click"],["id","C",1,"button-40",3,"click"],["id","V",1,"button-40",3,"click"],["id","B",1,"button-40",3,"click"],["id","N",1,"button-40",3,"click"],["id","M",1,"button-40",3,"click"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return e.pasarTeclaApretada("Q")}),t._uU(3,"Q"),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){return e.pasarTeclaApretada("W")}),t._uU(5,"W"),t.qZA(),t.TgZ(6,"button",4),t.NdJ("click",function(){return e.pasarTeclaApretada("E")}),t._uU(7,"E"),t.qZA(),t.TgZ(8,"button",5),t.NdJ("click",function(){return e.pasarTeclaApretada("R")}),t._uU(9,"R"),t.qZA(),t.TgZ(10,"button",6),t.NdJ("click",function(){return e.pasarTeclaApretada("T")}),t._uU(11,"T"),t.qZA(),t.TgZ(12,"button",7),t.NdJ("click",function(){return e.pasarTeclaApretada("Y")}),t._uU(13,"Y"),t.qZA(),t.TgZ(14,"button",8),t.NdJ("click",function(){return e.pasarTeclaApretada("U")}),t._uU(15,"U"),t.qZA(),t.TgZ(16,"button",9),t.NdJ("click",function(){return e.pasarTeclaApretada("I")}),t._uU(17,"I"),t.qZA(),t.TgZ(18,"button",10),t.NdJ("click",function(){return e.pasarTeclaApretada("O")}),t._uU(19,"O"),t.qZA(),t.TgZ(20,"button",11),t.NdJ("click",function(){return e.pasarTeclaApretada("P")}),t._uU(21,"P"),t.qZA()(),t.TgZ(22,"div",1)(23,"button",12),t.NdJ("click",function(){return e.pasarTeclaApretada("A")}),t._uU(24,"A"),t.qZA(),t.TgZ(25,"button",13),t.NdJ("click",function(){return e.pasarTeclaApretada("S")}),t._uU(26,"S"),t.qZA(),t.TgZ(27,"button",14),t.NdJ("click",function(){return e.pasarTeclaApretada("D")}),t._uU(28,"D"),t.qZA(),t.TgZ(29,"button",15),t.NdJ("click",function(){return e.pasarTeclaApretada("F")}),t._uU(30,"F"),t.qZA(),t.TgZ(31,"button",16),t.NdJ("click",function(){return e.pasarTeclaApretada("G")}),t._uU(32,"G"),t.qZA(),t.TgZ(33,"button",17),t.NdJ("click",function(){return e.pasarTeclaApretada("H")}),t._uU(34,"H"),t.qZA(),t.TgZ(35,"button",18),t.NdJ("click",function(){return e.pasarTeclaApretada("J")}),t._uU(36,"J"),t.qZA(),t.TgZ(37,"button",19),t.NdJ("click",function(){return e.pasarTeclaApretada("K")}),t._uU(38,"K"),t.qZA(),t.TgZ(39,"button",20),t.NdJ("click",function(){return e.pasarTeclaApretada("L")}),t._uU(40,"L"),t.qZA()(),t.TgZ(41,"div",1)(42,"button",21),t.NdJ("click",function(){return e.pasarTeclaApretada("Z")}),t._uU(43,"Z"),t.qZA(),t.TgZ(44,"button",22),t.NdJ("click",function(){return e.pasarTeclaApretada("X")}),t._uU(45,"X"),t.qZA(),t.TgZ(46,"button",23),t.NdJ("click",function(){return e.pasarTeclaApretada("C")}),t._uU(47,"C"),t.qZA(),t.TgZ(48,"button",24),t.NdJ("click",function(){return e.pasarTeclaApretada("V")}),t._uU(49,"V"),t.qZA(),t.TgZ(50,"button",25),t.NdJ("click",function(){return e.pasarTeclaApretada("B")}),t._uU(51,"B"),t.qZA(),t.TgZ(52,"button",26),t.NdJ("click",function(){return e.pasarTeclaApretada("N")}),t._uU(53,"N"),t.qZA(),t.TgZ(54,"button",27),t.NdJ("click",function(){return e.pasarTeclaApretada("M")}),t._uU(55,"M"),t.qZA()()())},styles:["h1[_ngcontent-%COMP%]{text-align:center;font-size:1.8em;font-family:monospace;padding:.7em}.keyboard[_ngcontent-%COMP%]{text-align:center;font-size:15px;font-family:sans-serif;background:gray}.keyboard__row[_ngcontent-%COMP%]{display:inline-block;height:3em;margin:.2em}.keyboard__row--h1[_ngcontent-%COMP%]{height:1.7em;line-height:1.4em}.keyboard__row--h3[_ngcontent-%COMP%]{height:3.3em}.keyboard__row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;float:left;border-radius:.3em;margin:.2em;padding:.2em;width:3.3em;height:100%;text-align:center}.button-40[_ngcontent-%COMP%]{color:#fff;background-color:#111827;border:1px solid transparent;box-sizing:border-box;cursor:pointer;transition-duration:.2s;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;-webkit-user-select:none;touch-action:manipulation;width:30%}.button-40[_ngcontent-%COMP%]:hover{background-color:#48cae4}.button-40[_ngcontent-%COMP%]:disabled{background-color:red;pointer-events:none}.button-40[_ngcontent-%COMP%]:focus{box-shadow:none;outline:2px solid transparent;outline-offset:2px}@media (min-width: 768px){.button-40[_ngcontent-%COMP%]{padding:.75rem 1.5rem}}.keyboard__row--h1[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:3.5em}.keyboard[_ngcontent-%COMP%] > .keyboard__row[_ngcontent-%COMP%]{text-align:center}"]}),r})();const h=[{path:"",component:(()=>{var n;class r{constructor(a,e){let o;this.servicioAlerta=a,this.servicioNavegacion=e,this.datosPosiblesAhorcados=[{palabra:"PERRO",pista:"Es una mascota"},{palabra:"MURCIELAGO",pista:"Es un animal que posee todas las vocales"},{palabra:"COMPUTADORA",pista:"Es el aparato que se usa para programar"},{palabra:"CUCHILLO",pista:"Se usa para cortar comida"},{palabra:"ABECEDARIO",pista:"Se puede considerar como un diccionario de letras"},{palabra:"ARGENTINA",pista:"Es un pais de Latinoamerica"},{palabra:"CELULA",pista:"Es la unidad minima de la vida"},{palabra:"VIRUS",pista:"Necesitan invadir celulas para reproducirse"},{palabra:"RADIACION",pista:"El uranio emite esta cosa"},{palabra:"DIAMANTE",pista:"Es el mineral, que se encuentra en la naturaleza, mas duro conocido"}],this.pathImagenAMostrar=this.calcularPathImagen(0),o=Math.floor(Math.random()*this.datosPosiblesAhorcados.length),this.juegoAhorcado=new s(this.datosPosiblesAhorcados[o].palabra,this.datosPosiblesAhorcados[o].pista,6)}ngOnInit(){this.juegoAhorcado.prepararPartida()}calcularPathImagen(a){return"https://firebasestorage.googleapis.com/v0/b/mifriv-22eda.appspot.com/o/Juegos%2FAhorcado%2Fahorcado_"+a+".jpg?alt=media&token=1df6445f-694a-40b9-9323-5619707551fc&_gl=1*rx7o7d*_ga*MTc3MzMwODc2Ni4xNjkzNDI4MDU3*_ga_CW55HF8NVT*MTY5ODYyNTk0Ny43MS4xLjE2OTg2MjcwNzcuMzkuMC4w"}recibirLetra(a){let e=this.juegoAhorcado.analizarLetra(a);if(document.getElementById(a).disabled=!0,e>1){let o="Felicidades, ganaste!!!";3==e&&(o="Que mala suerte, perdiste :("),this.servicioAlerta.alertaAceptarCancelar(o,e-1,"\xbfDeseas jugar otra vez?","Si","No",!1).then(c=>{c.isConfirmed?this.reCargarPartida():this.servicioNavegacion.cambiarRuta("/home")}).catch()}else 0==e&&(this.pathImagenAMostrar=this.calcularPathImagen(this.juegoAhorcado.ErroresHechos))}mostrarPista(){this.servicioAlerta.alertaIncognita("Pista",this.juegoAhorcado.Pista)}reCargarPartida(){let a=Math.floor(Math.random()*this.datosPosiblesAhorcados.length);this.pathImagenAMostrar=this.calcularPathImagen(0),this.juegoAhorcado=new s(this.datosPosiblesAhorcados[a].palabra,this.datosPosiblesAhorcados[a].pista,6),this.juegoAhorcado.prepararPartida()}}return(n=r).\u0275fac=function(a){return new(a||n)(t.Y36(m.e),t.Y36(_.k))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ahorcado"]],decls:14,vars:3,consts:[[1,"juego"],[1,"row","align-items-start"],[1,"col","align-self-center"],[1,"button-ayuda",3,"click"],[1,"label-errores"],[3,"src"],[1,"row","align-items-center"],[1,"container"],["id","palabraOculta",1,"display-4","text-center",2,"color","white"],[1,"row","align-items-end"],[3,"pasarTeclaApretadaEvent"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),t.NdJ("click",function(){return e.mostrarPista()}),t._uU(4,"Pista"),t.qZA(),t.TgZ(5,"label",4),t._uU(6),t.qZA()(),t._UZ(7,"img",5),t.qZA(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8),t._uU(11),t.qZA()()(),t.TgZ(12,"div",9)(13,"app-teclado",10),t.NdJ("pasarTeclaApretadaEvent",function(c){return e.recibirLetra(c)}),t.qZA()()()),2&a&&(t.xp6(6),t.hij("Intentos restantes: ",e.juegoAhorcado.ErroresMaximo-e.juegoAhorcado.ErroresHechos,""),t.xp6(1),t.s9C("src",e.pathImagenAMostrar,t.LSH),t.xp6(4),t.hij(" ",e.juegoAhorcado.PalabraAMostrar," "))},dependencies:[g],styles:['.juego[_ngcontent-%COMP%]{position:absolute;top:55%;left:50%;width:35%;padding:40px;transform:translate(-50%,-50%);background:rgba(0,0,0,.75);box-sizing:border-box;box-shadow:0 15px 25px #0009;border-radius:10px}.button-40[_ngcontent-%COMP%]{background-color:#111827;border:1px solid transparent;box-sizing:border-box;color:#fff;cursor:pointer;flex:0 0 auto;font-family:Inter var,ui-sans-serif,system-ui,-apple-system,system-ui,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-size:1.125rem;font-weight:600;line-height:1.5rem;padding:.75rem 1.2rem;text-align:center;-webkit-text-decoration:none #6B7280 solid;text-decoration:none #6B7280 solid;text-decoration-thickness:auto;transition-duration:.2s;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;-webkit-user-select:none;touch-action:manipulation;width:50%}.button-40[_ngcontent-%COMP%]:hover{background-color:#48cae4}.button-40[_ngcontent-%COMP%]:focus{box-shadow:none;outline:2px solid transparent;outline-offset:2px}@media (min-width: 768px){.button-40[_ngcontent-%COMP%]{padding:.75rem 1.5rem}}.label-errores[_ngcontent-%COMP%]{background-color:#e3e707;border:1px solid transparent;box-sizing:border-box;color:#fff;cursor:pointer;flex:0 0 auto;font-family:Inter var,ui-sans-serif,system-ui,-apple-system,system-ui,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-size:1.125rem;font-weight:600;line-height:1.5rem;padding:.75rem 1.2rem;text-align:center;-webkit-text-decoration:none #6B7280 solid;text-decoration:none #6B7280 solid;text-decoration-thickness:auto;transition-duration:.2s;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;-webkit-user-select:none;pointer-events:none;width:50%}.button-ayuda[_ngcontent-%COMP%]{background-color:#1ae707;border:1px solid transparent;box-sizing:border-box;color:#fff;cursor:pointer;flex:0 0 auto;font-family:Inter var,ui-sans-serif,system-ui,-apple-system,system-ui,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-size:1.125rem;font-weight:600;line-height:1.5rem;padding:.75rem 1.2rem;text-align:center;-webkit-text-decoration:none #6B7280 solid;text-decoration:none #6B7280 solid;text-decoration-thickness:auto;transition-duration:.2s;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;-webkit-user-select:none;touch-action:manipulation;width:50%}.button-ayuda[_ngcontent-%COMP%]:hover{background-color:#3dd8f7}.button-ayuda[_ngcontent-%COMP%]:focus{box-shadow:none;outline:2px solid transparent;outline-offset:2px}@media (min-width: 768px){.button-ayuda[_ngcontent-%COMP%]{padding:.75rem 1.5rem}}']}),r})()}];let A=(()=>{var n;class r{}return(n=r).\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(h),p.Bz]}),r})(),f=(()=>{var n;class r{}return(n=r).\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[b.ez,A]}),r})()}}]);