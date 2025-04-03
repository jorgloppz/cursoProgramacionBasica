//alert("Hola Mundo JS")

// Variables globales
let ataqueJugador
let ataqueEnemigo


// Iniciar el juego
function iniciarJuego() {
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
// Funciones para mascotas

    function seleccionarMascotaJugador() {
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
        
        if (ataqueJugador == ataqueEnemigo) {
            crearMensaje("EMPATE🤨")
        } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
            crearMensaje("GANASTE🥳")
        } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
            crearMensaje("GANASTE🥳")
        } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
            crearMensaje("GANASTE🥳")
        } else {
            crearMensaje("PERDISTE😭")
        }
    }

// Funciones para mensajes

    function crearMensaje(resultado) {
        let sectionMensajes = document.getElementById('mensajes')
        let parrafo = document.createElement('p')
        parrafo.innerHTML = 'Tu mascota ataca con ' + ataqueJugador + ' y la mascota enemiga ataca con ' + ataqueEnemigo + ' - ' + resultado
        
        sectionMensajes.appendChild(parrafo)
    }

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    

    window.addEventListener('load', iniciarJuego)

