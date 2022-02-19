// OPCIONES 
const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";
const LAGARTO = "lagarto";
const SPOOK = "spock";

// RESULTADOS
const EMPATE = "===EMPATE===";
const GANA = "¡¡¡GANASTE!!!";
const PIERDE = "---PERDISTE---";

// ESTADO DE JUEGO
let jugando = false;

// ARREGLO DE OPCIONES
let opciones=[];

// BOTONES
const piedraBtn = document.getElementById("piedra-btn");
const papelBtn = document.getElementById("papel-btn");
const tijeraBtn = document.getElementById("tijera-btn");
const lagartoBtn = document.getElementById("lagarto-btn");
const spookBtn = document.getElementById("spook-btn");

// CANTIDADES
const partidaRes = document.getElementById("partidas-res");
const maqunaRes = document.getElementById("maquina-res");
const jugadorRes = document.getElementById("jugador-res");
const empateRes = document.getElementById("score-res");

// MENSAJE
const mensaje = document.getElementById("mensaje");

// IMAGENES
const imgJugador = document.getElementById("img-jugador");
const imgMaquina = document.getElementById("img-maquina");

// SELECCION DEL USUARIO
piedraBtn.addEventListener("click", () =>{
    opciones.push(PIEDRA);
    jugar(PIEDRA);
});
papelBtn.addEventListener("click", () =>{
    opciones.push(PAPEL);
    jugar(PAPEL);
});
tijeraBtn.addEventListener("click", () =>{
    opciones.push(TIJERA);
    jugar(TIJERA);
});
lagartoBtn.addEventListener("click", () =>{
    opciones.push(LAGARTO);
    jugar(LAGARTO);
});
spookBtn.addEventListener("click", () =>{
    opciones.push(SPOOK);
    jugar(SPOOK);
});

// SELECCION DE LA MAQUINA
var contPartidas = 0;
var contEmpate = 0;
var contMaquina = 0;
var contJugador = 0;
var opcionMaquina;

function jugar(opcionJugador){
    if (contPartidas < 3){
        opcionMaquina = convertir(juegoRandom());
    }
    // SI LLEVA MAS DE 3 PARTIDAS
    else{
        opcionMaquina = convertir(iaFalsa(obtenerModa()));
    }
    // DETERMINAR RESULTADO
    if(opcionJugador === opcionMaquina){
        contEmpate++;
        mensaje.innerHTML = EMPATE;
    }
    else if(opcionJugador === PIEDRA){
        if(opcionMaquina === TIJERA){
            mensaje.innerHTML = GANA;
            contJugador++;
        }
        if(opcionMaquina === LAGARTO){
            mensaje.innerHTML = GANA;
            contJugador++;
        }
        if(opcionMaquina === PAPEL){
            mensaje.innerHTML = PIERDE;
            contMaquina++;
        }
        if(opcionMaquina === SPOOK){
            mensaje.innerHTML = PIERDE;
            contMaquina++;
        }
    }

    else if(opcionJugador === PAPEL){
        if(opcionMaquina === PIEDRA){
            mensaje.innerHTML = GANA;
            contJugador++;
        }
        if(opcionMaquina === SPOOK){
            mensaje.innerHTML = GANA;
            contJugador++;
        }
        if(opcionMaquina === TIJERA){
            mensaje.innerHTML = PIERDE;
            contMaquina++;
        }
        if(opcionMaquina === LAGARTO){
            mensaje.innerHTML = PIERDE;
            contMaquina++;
        }
    }
    else if(opcionJugador === TIJERA){
        if(opcionMaquina === PAPEL){
            mensaje.innerHTML = GANA;
            contJugador++;
        }
        if(opcionMaquina === LAGARTO){
            mensaje.innerHTML = GANA;
            contJugador++;
        }
        if(opcionMaquina === PIEDRA){
            mensaje.innerHTML = PIERDE;
            contMaquina++;
        }
        if(opcionMaquina === SPOOK){
            mensaje.innerHTML = PIERDE;
            contMaquina++;
        }
    }
    else if(opcionJugador === LAGARTO){
        if(opcionMaquina === PAPEL){
            mensaje.innerHTML = GANA;
            contJugador++;
        }
        if(opcionMaquina === SPOOK){
            mensaje.innerHTML = GANA;
            contJugador++;
        }
        if(opcionMaquina === TIJERA){
            mensaje.innerHTML = PIERDE;
            contMaquina++;
        }
        if(opcionMaquina === PIEDRA){
            mensaje.innerHTML = PIERDE;
            contMaquina++;
        }
    }
    else if(opcionJugador === SPOOK){
        if(opcionMaquina === PIEDRA){
            mensaje.innerHTML = GANA;
            contJugador++;
        }
        if(opcionMaquina === TIJERA){
            mensaje.innerHTML = GANA;
            contJugador++;
        }
        if(opcionMaquina === PAPEL){
            mensaje.innerHTML = PIERDE;
            contMaquina++;
        }
        if(opcionMaquina === LAGARTO){
            mensaje.innerHTML = PIERDE;
            contMaquina++;
        }
    }

    // CAMBIAR IMAGENES
    imgJugador.src = "images/"+opcionJugador+".png";
    imgMaquina.src = "images/"+opcionMaquina+".png";

    contPartidas=contPartidas+1;
    
    partidaRes.innerHTML = contPartidas.toString();
    empateRes.innerHTML = contEmpate.toString();
    jugadorRes.innerHTML = contJugador.toString();
    maqunaRes.innerHTML = contMaquina.toString();
}

// OBTENER MODA
var contPiedra = 0;
var contPapel = 0;
var contTijera = 0;
var contLagarto = 0;
var contSpook = 0;
var moda;
function obtenerModa(){
    for(let i=0; i<opciones.length; i++){
        if(opciones[i] == PIEDRA){
            contPiedra++;
        }
        else if(opciones[i] == PAPEL){
            contPapel++;
        }
        else if(opciones[i] == TIJERA){
            contTijera++;
        }
        else if(opciones[i] == LAGARTO){
            contLagarto++;
        }
        else if(opciones[i] == SPOOK){
            contSpook++;
        }
    }

    // DETERMINAR MODA
    if(contPiedra > contPapel && contPiedra > contTijera && contPiedra > contLagarto && contPiedra > contSpook){
        moda = 0;
    }
    else if(contPapel > contPiedra && contPapel > contTijera && contPapel > contLagarto && contPapel > contSpook){
        moda = 1;
    }
    else if(contTijera > contPiedra && contTijera > contPapel && contTijera > contLagarto && contTijera > contSpook){
        moda = 2;
    }
    else if(contLagarto > contPiedra && contLagarto > contPapel && contLagarto > contTijera && contLagarto > contSpook){
        moda = 3;
    }
    else if(contSpook > contPiedra && contSpook > contPapel && contSpook > contTijera && contSpook > contLagarto){
        moda = 4;
    }
    else{
        moda = juegoRandom();
    }
    return moda;
}

// IA FALSA (0=PIEDRA; 1=PAPEL; 2=TIJERA; 3=LAGARTO; 4=SPOOK)
function iaFalsa(modaOpc){
    const prob = Math.floor(Math.random() *10);
    // ENTRE MAS CERCANO A 0 SEA LA prob, MAS DIFICIL SERA VENCER A LA MAQUINA
    if(prob > 5){
        if(modaOpc === 0){
            return 1 || 4;
        }
        if(modaOpc === 1){
            return 2 || 3;
        }
        if(modaOpc === 2){
            return 0 || 4;
        }
        if(modaOpc === 3){
            return 0 || 2;
        }
        if(modaOpc === 4){
            return 1 || 3;
        }
    }
    else{
        return juegoRandom();
    }
    console.log(prob);
}

// CONVERTIR RESULTADO
function convertir(resultado){
    switch (resultado) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
        case 3:
            return LAGARTO;
        case 4:
            return SPOOK
    }
}

// GENERAR UNA OPCION ALEATORIA PARA LA MAQUINA
function juegoRandom(){
    const number = Math.floor(Math.random() * 5);
    return number;
}
