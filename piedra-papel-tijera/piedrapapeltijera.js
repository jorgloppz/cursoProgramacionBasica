let jugador = 0
let pc = 0
jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")

if(jugador == pc) {
    alert("Es un empate")
} else if(jugador - pc == 1  || jugador - pc == -2) {
    alert(("TU GANAS🎉"))
} else{
    alert("TU PIERDES☹️")
}

