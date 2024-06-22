let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
  

  if(numeroDeUsuario == numeroSecreto){
    asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${ (intentos == 1) ? 'intento' : 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }
  else {
    if(numeroSecreto>numeroDeUsuario){
      asignarTextoElemento('p','Es mayor');
    }
    else{
      asignarTextoElemento('p','Es menor');
    }
    intentos++;
    limpiarCaja();
  }


  return;
}


function limpiarCaja(){

  document.querySelector('#numeroUsuario').value = '';
  
}

function generarNumeroSecreto() {

  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  //Si ya sorteamos todos los numeros
  if (listaNumerosSorteados.length ==  numeroMaximo){
      asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
  }
  else {
    //Si el numero generado esta en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }
    else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
  

  
}

function condicionesIniciales(){
  asignarTextoElemento('h1','Juego del número secreto');
  asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto =  generarNumeroSecreto();
  intentos = 1;


}

function reiniciarJuego(){
  //limpiar la caja
  limpiarCaja();
  condicionesIniciales();
  document.getElementById('reiniciar').setAttribute('disabled',true);
  

}

condicionesIniciales(); 
