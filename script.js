let intentos = 6;

const DICCIONARIO = ['APPLE', 'HURLS', 'PILIN', 'YOUTH'];
let random = Math.floor(Math.random() * DICCIONARIO.length);
const PALABRA = DICCIONARIO[random];
console.log(PALABRA);

const BUTTON = document.getElementById("guess-button");

BUTTON.addEventListener("click", () => {
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    let row = document.createElement("div");
    row.className = "row";
    for (let i in PALABRA) {
        if (PALABRA[i] === INTENTO[i]) {
            let cuadroLetra = armarLetra(INTENTO[i], "green");
            row.appendChild(cuadroLetra);
        } else if (PALABRA.includes(INTENTO[i])) {
            let cuadroLetra = armarLetra(INTENTO[i], "blue");
            row.appendChild(cuadroLetra);
        } else {
            let cuadroLetra = armarLetra(INTENTO[i], "gray");
            row.appendChild(cuadroLetra);
        }
    }
    GRID.appendChild(row);
    if (INTENTO == PALABRA) {
        terminar("<h1>GANASTE!</h1>")
    } else {
        intentos--;
    }
    if (intentos == 0) {
        terminar("<h1>PERDISTE!</h1>")
    }


});

function leerIntento() {
    return document.getElementById("guess-input").value.toUpperCase();
}

function terminar(mensaje) {
    document.getElementById("mensaje").innerHTML = mensaje;
}

function armarLetra(letra, color) {
    let span = document.createElement("span");
    span.className = "letter";
    span.innerHTML = letra;
    span.style.backgroundColor = color;
    return span;
}
