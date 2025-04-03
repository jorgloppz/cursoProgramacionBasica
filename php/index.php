<?php
// Inicializar variables
$numero1 = "";
$numero2 = "";
$operacion = "";
$resultado = "";
$error = "";

// Procesar el formulario cuando se envía
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores del formulario
    $numero1 = isset($_POST["numero1"]) ? trim($_POST["numero1"]) : "";
    $numero2 = isset($_POST["numero2"]) ? trim($_POST["numero2"]) : "";
    $operacion = isset($_POST["operacion"]) ? $_POST["operacion"] : "";
    
    // Validar que los campos no estén vacíos
    if ($numero1 === "" || $numero2 === "") {
        $error = "Por favor, introduzca ambos números.";
    } 
    // Validar que los valores sean numéricos
    elseif (!is_numeric($numero1) || !is_numeric($numero2)) {
        $error = "Por favor, introduzca valores numéricos válidos.";
    } 
    // Realizar la operación seleccionada
    else {
        switch ($operacion) {
            case "suma":
                $resultado = $numero1 + $numero2;
                break;
            case "resta":
                $resultado = $numero1 - $numero2;
                break;
            case "multiplicacion":
                $resultado = $numero1 * $numero2;
                break;
            case "division":
                // Validar división por cero
                if ($numero2 == 0) {
                    $error = "No es posible dividir por cero.";
                } else {
                    $resultado = $numero1 / $numero2;
                }
                break;
            default:
                $error = "Por favor, seleccione una operación válida.";
                break;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora PHP</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        form {
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input, select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
        }
        button:hover {
            background-color: #45a049;
        }
        .resultado {
            margin-top: 20px;
            padding: 15px;
            background-color: #e9f7ef;
            border-radius: 4px;
            text-align: center;
            font-size: 18px;
        }
        .error {
            color: red;
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Calculadora PHP</h1>
    
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <div class="form-group">
            <label for="numero1">Primer número:</label>
            <input type="text" id="numero1" name="numero1" value="<?php echo htmlspecialchars($numero1); ?>" required>
        </div>
        
        <div class="form-group">
            <label for="operacion">Operación:</label>
            <select id="operacion" name="operacion" required>
                <option value="suma" <?php if ($operacion == "suma") echo "selected"; ?>>Suma (+)</option>
                <option value="resta" <?php if ($operacion == "resta") echo "selected"; ?>>Resta (-)</option>
                <option value="multiplicacion" <?php if ($operacion == "multiplicacion") echo "selected"; ?>>Multiplicación (×)</option>
                <option value="division" <?php if ($operacion == "division") echo "selected"; ?>>División (÷)</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="numero2">Segundo número:</label>
            <input type="text" id="numero2" name="numero2" value="<?php echo htmlspecialchars($numero2); ?>" required>
        </div>
        
        <button type="submit">Calcular</button>
    </form>
    
    <?php if ($error): ?>
        <div class="error"><?php echo $error; ?></div>
    <?php elseif ($resultado !== ""): ?>
        <div class="resultado">
            <?php
            echo "Resultado: " . htmlspecialchars($resultado);
            ?>
        </div>
    <?php endif; ?>
</body>
</html>