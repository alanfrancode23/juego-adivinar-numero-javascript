//El juego elige un numero al azar para que se pueda adivinar.
let numeroAzar = Math.floor (Math.random()*100) + 1

//Manipulando elementos del DOM
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

//Esta accion se va a ejecutar cuando se presione el boton check.
function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)
    intentos ++ 
    intento.textContent = intentos

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN (numeroIngresado)){
        mensaje.textContent = 'Por favor, introduce un número valido entre 1 y 100'
        return   
    }
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '¡Felicitaciones! ¡Lograste adivinar el numero!'
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true;
    }else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El numero que ingresaste no es correcto, prueba con un numero mas alto!'
        mensaje.style.color = 'red'
    }else {
        mensaje.textContent = 'El numero que ingresaste no es correcto, prueba con un numero mas bajo!'
        mensaje.style.color = 'red'
    }
}