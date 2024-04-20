<script>            
//Crea las variables necesarias 
let puntosPorJugador = [0, 0];
let puntosValidos = ["Love", 15, 30, 40];
let puntajesMarcador = [];

function actualizarPuntos(value){
    //Suma los puntos de cada jugador según el valor que llega a la función
    value == "P1" ? puntosPorJugador[0]++: puntosPorJugador[1]++; 
    //Va creando el array en el front para el usuario
    arrayPuntos.value += value + ", ";

    //Lo primero que compara es si están empatados
    if (puntosPorJugador[0] == puntosPorJugador[1]) {
        puntajesMarcador.push("Deuce")
        //En caso de que algún jugador supere los 40 puntos compara la ventaja o ganador
    }else if (puntosPorJugador[0] > 3 || puntosPorJugador[1] > 3) {
        if (puntosPorJugador[0] > puntosPorJugador[1]) {
            //Primero ve si el jugador esta en ventaja
            if (puntosPorJugador[0] - puntosPorJugador[1] == 1) {
                puntajesMarcador.push("Ventaja P1")
            }else { //Caso contrario gana
                puntajesMarcador.push("Ganador P1")
                desactivarBotones();
            }
        }else{
            //Repute lógica previa
            if (puntosPorJugador[1] - puntosPorJugador[0] == 1) {
                puntajesMarcador.push("Ventaja P2")
            }else {
                puntajesMarcador.push("Ganador P2")
                desactivarBotones();
            }
        }
    }else{
        //Envia los puntajes según corresponda en el array de puntos en base a cada jugador
        puntajesMarcador.push(puntosValidos[puntosPorJugador[0]] + " - " + puntosValidos[puntosPorJugador[1]]);
    }

    //Retorna los puntajes al front
    var puntajes = puntajesMarcador.map(function(puntaje){
        return '<p style="margin:0px">'+puntaje+'</p>'
        })
    document.getElementById("puntajesFront").innerHTML = puntajes;
    
    //Desactiva los botones una vez terminado el juego
    function desactivarBotones() {
        botonP1.disabled = true; 
        botonP2.disabled = true; 
    }
}
</script>