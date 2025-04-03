# Juego básico de Piedra, Papel y Tijera
usuario = input("Elige piedra, papel o tijera: ").lower()
computadora = "piedra"  # Por ahora, fijo

# Comparamos las opciones
if usuario == computadora:
    print("Empate")
elif (
    (usuario == "piedra" and computadora == "tijera") or
    (usuario == "papel" and computadora == "piedra") or
    (usuario == "tijera" and computadora == "papel")
):
    print("¡Ganaste!")
else:
    print("Perdiste")
    