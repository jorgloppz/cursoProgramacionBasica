<?php

$climas = array("Árido", "Templado", "Cálido húmedo", "Cálido seco", "Frío de montaña");

$ubicaciones = array("Ciudad de México", "Cancún", "Monterrey", "Guadalajara", "Tulum");

$turismo = array("Cultural", "Playa", "Aventura", "Gastronómico", "Ecoturismo");

$search = readline("Seleccione la opción de su interés:   1.Clima 2.Ubicación 3. Turismo  ");

switch ($search) {
  case 1: 
    $clima = readline("Seleccione el clima favorito:   1.Árido 2. Templado 3. Cálido húmedo 4. Cálido seco 5. Frío de montaña  ");
    switch ($clima) {
      case 1:
        $clave = array_search('Árido', $climas);
        echo "La ciudad recomendada es: " . $clave;
        break;
      case 2:
        $clave = array_search('Templado', $climas);
        echo "La ciudad recomendada es: " . $clave;
        break;
      case 3:
        $clave = array_search('Cálido húmedo', $climas);
        echo "La ciudad recomendada es: " . $clave;
        break;
    }
    break;

  case 2:
    $ubicacion = readline("Seleccione la ubicación favorita:   1.Ciudad de México 2. Cancún 3. Monterrey 4. Guadalajara 5. Tulum  ");
    switch ($ubicacion) {
      case 1:
        $clave = array_search('Ciudad de México', $ubicaciones);
        echo "La ciudad recomendada es: " . $clave;
        break;
      case 2:
        $clave = array_search('Cancún', $ubicaciones);
        echo "La ciudad recomendada es: " . $clave;
        break;
      case 3:
        $clave = array_search('Monterrey', $ubicaciones);
        echo "La ciudad recomendada es: " . $clave;
        break;
      case 4:
        $clave = array_search('Guadalajara', $ubicaciones);
        echo "La ciudad recomendada es: " . $clave;
        break;
      case 5:
        $clave = array_search('Tulum', $ubicaciones);
        echo "La ciudad recomendada es: " . $clave;
        break;
    }
    break;

  case 3:
    $tipo_turismo = readline("Seleccione el turismo favorito:   1.Cultural 2. Playa 3. Aventura 4. Gastronómico 5. Ecoturismo  ");
    switch ($tipo_turismo) {
      case 1:
        $clave = array_search('Cultural', $turismo);
        echo "La ciudad recomendada es: " . $clave;
        break;
      case 2:
        $clave = array_search('Playa', $turismo);
        echo "La ciudad recomendada es: " . $clave;
        break;
      case 3:
        $clave = array_search('Aventura', $turismo);
        echo "La ciudad recomendada es: " . $clave;
        break;
      case 4:
        $clave = array_search('Gastronómico', $turismo);
        echo "La ciudad recomendada es: " . $clave;
        break;
      case 5:
        $clave = array_search('Ecoturismo', $turismo);
        echo "La ciudad recomendada es: " . $clave;
        break;
    }
    break;
}

?>
