

// Variables globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


// Iniciar el juego
function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none' 
    
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

// Eventos    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    }

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
// Funciones para mascotas

    function seleccionarMascotaJugador() {
let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

        let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

        let inputHipodoge = document.getElementById('hipodoge')
        let inputCapipepo = document.getElementById('capipepo')
        let inputRatigueya = document.getElementById('ratigueya')
        let inputLangostelvis = document.getElementById('langostelvis')
        let inputTucapalma = document.getElementById('tucapalma')
        let inputPydos = document.getElementById('pydos')
        let spanMascotaJugador = document.getElementById('mascota-jugador')
        //let spanMascotaJugador = document.getElementById('mascota-jugador')

        if (inputHipodoge.checked) {
            spanMascotaJugador.innerHTML = 'Hipodoge'
        } else if (inputCapipepo.checked) {
            spanMascotaJugador.innerHTML = 'Capipepo'
        } else if (inputRatigueya.checked) {
            spanMascotaJugador.innerHTML = 'Ratigueya'
        } else if (inputLangostelvis.checked) {
            spanMascotaJugador.innerHTML = 'Langostelvis'
        } else if (inputTucapalma.checked) {
            spanMascotaJugador.innerHTML = 'Tucapalma'
        } else if (inputPydos.checked) {
            spanMascotaJugador.innerHTML = 'Pydos'
        } else {
            alert('Selecciona una mascota')
        }
        
        seleccionarMascotaEnemigo()
    }
    
    function seleccionarMascotaEnemigo() {
        let mascotaAleatoria = aleatorio(1, 6)
        let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
        
        if (mascotaAleatoria == 1) {
            spanMascotaEnemigo.innerHTML = 'Hipodoge'
        } else if (mascotaAleatoria == 2) {
            spanMascotaEnemigo.innerHTML = 'Capipepo'
        } else if (mascotaAleatoria == 3) {
            spanMascotaEnemigo.innerHTML = 'Ratigueya'
        } else if (mascotaAleatoria == 4) {
            spanMascotaEnemigo.innerHTML = 'Langostelvis'
        } else if (mascotaAleatoria == 5) {
            spanMascotaEnemigo.innerHTML = 'Tucapalma'
        } else if (mascotaAleatoria == 6) {
            spanMascotaEnemigo.innerHTML = 'Pydos'
        }
    }
    
// Funciones para ataques

    function ataqueFuego() {
        ataqueJugador = 'FUEGO'
        ataqueAleatorioEnemigo()
    }

    function ataqueAgua() {
        ataqueJugador = 'AGUA'
        ataqueAleatorioEnemigo()
    }

    function ataqueTierra() {
        ataqueJugador = 'TIERRA'
        ataqueAleatorioEnemigo()
    }

    function ataqueAleatorioEnemigo() {
        let ataqueAleatorio = aleatorio(1, 3)

        if (ataqueAleatorio == 1) {
            ataqueEnemigo = 'FUEGO'
        } else if (ataqueAleatorio == 2) {
            ataqueEnemigo = 'AGUA'
        } else if (ataqueAleatorio == 3) {
            ataqueEnemigo = 'TIERRA'
        }
        
        combate()
    
    }

    function combate() {
        let spanVidasJugador = document.getElementById('vidas-jugador')
        let spanVidasEnemigo = document.getElementById('vidas-enemigo')
        
        if (ataqueJugador == ataqueEnemigo) {
            crearMensaje("EMPATE🤨")
        } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
            crearMensaje("GANASTE🥳")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
            crearMensaje("GANASTE🥳")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
            crearMensaje("GANASTE🥳")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo 
        } else {
            crearMensaje("PERDISTE😭")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }
        revisarVidas()
    }

    function revisarVidas(){
        if (vidasEnemigo == 0) {
            crearMensajeFinal("FELICITACIONES, GANASTE EL JUEGO😎")
        }
        else if (vidasJugador == 0) {
            crearMensajeFinal("PERDISTE EL JUEGO☠️")
        }
    }

// Funciones para mensajes

    function crearMensaje(resultado) {
        let sectionMensajes = document.getElementById('mensajes')
        let parrafo = document.createElement('p')
        parrafo.innerHTML = 'Tu mascota ataca con ' + ataqueJugador + ' y la mascota enemiga ataca con ' + ataqueEnemigo + ' - ' + resultado
        
        sectionMensajes.appendChild(parrafo)
    }

    function crearMensajeFinal(resultadoFinal) {
        let sectionMensajes = document.getElementById('mensajes')
        let parrafo = document.createElement('p')
        alert (parrafo.innerHTML = resultadoFinal)
        
        sectionMensajes.appendChild(parrafo)

        let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
    }

    function reiniciarJuego() {
        location.reload()
    }

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    

    window.addEventListener('load', iniciarJuego)

