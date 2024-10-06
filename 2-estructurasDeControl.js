// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    // Tu código aquí
function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}
// Ejemplo de uso:
verificarParidad(4); // El número es par
verificarParidad(7); // El número es impar
}
// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    // Tu código aquí
  function clasificarEdad(edad) {
    if (edad < 18) {
        console.log("Menor de edad");
    } else if (edad >= 18 && edad <= 65) {
        console.log("Adulto");
    } else {
        console.log("Adulto mayor");
    }
}
// Ejemplo de uso:
clasificarEdad(16); // Menor de edad
clasificarEdad(30); // Adulto
clasificarEdad(70); // Adulto mayor
}
// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    // Tu código aquí
  function cuentaRegresiva(numero) {
    while (numero >= 0) {
        console.log(numero);
        numero--; // Decrementa el número en 1 en cada iteración
    }
}
// Ejemplo de uso:
cuentaRegresiva(5); // Imprimirá: 5, 4, 3, 2, 1, 0
}
// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    // Tu código aquí
}

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    // Tu código aquí
  function repetirMensaje() {
    let contador = 0; // Inicializa el contador
    do {
        console.log("Estoy aprendiendo JavaScript");
        contador++; // Incrementa el contador en cada iteración
    } while (contador < 5); // El bucle se repetirá mientras el contador sea menor que 5
}
// Ejemplo de uso:
repetirMensaje();
}
// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    // Tu código aquí
  function detenerEnSeis() {
    for (let numero = 1; numero <= 10; numero++) {
        if (numero === 6) {
            break; // Detiene el bucle si el número es igual a 6
        }
        console.log(numero); // Imprime el número actual
    }
}
// Ejemplo de uso:
detenerEnSeis(); // Imprimirá: 1, 2, 3, 4, 5
}
// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    // Tu código aquí
  function saltarCinco() {
    for (let numero = 1; numero <= 10; numero++) {
        if (numero === 5) {
            continue; // Salta el número 5 y continúa con la siguiente iteración
        }
        console.log(numero); // Imprime el número actual
    }
}
// Ejemplo de uso:
saltarCinco(); // Imprimirá: 1, 2, 3, 4, 6, 7, 8, 9, 10
}
// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    // Tu código aquí
  function obtenerDiaSemana(dia) {
    let diaSemana;
    switch (dia) {
        case 1:
            diaSemana = "Lunes";
            break;
        case 2:
            diaSemana = "Martes";
            break;
        case 3:
            diaSemana = "Miércoles";
            break;
        case 4:
            diaSemana = "Jueves";
            break;
        case 5:
            diaSemana = "Viernes";
            break;
        case 6:
            diaSemana = "Sábado";
            break;
        case 7:
            diaSemana = "Domingo";
            break;
        default:
            diaSemana = "Número inválido. Debe estar entre 1 y 7.";
    }
    return diaSemana;
}
// Ejemplo de uso:
console.log(obtenerDiaSemana(1)); // Lunes
console.log(obtenerDiaSemana(5)); // Viernes
console.log(obtenerDiaSemana(8)); // Número inválido. Debe estar entre 1 y 7
}
// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    // Tu código aquí
  function esVocal(letra) {
    switch (letra.toLowerCase()) { // Convierte la letra a minúscula para que sea insensible a mayúsculas
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return "Es una vocal";
        default:
            return "No es una vocal";
    }
}
}
// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    // Tu código aquí
  function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return "Todos son positivos";
    } else if (a < 0 || b < 0 || c < 0) {
        if (a < 0 && b < 0 && c < 0) {
            return "Todos son negativos";
        } else {
            return "Al menos uno es negativo";
        }
    } else {
        return "Todos son cero o hay combinación de positivos y negativos";
    }
}
// Ejemplo de uso:
console.log(evaluarNumeros(5, 10, 15)); // Todos son positivos
console.log(evaluarNumeros(-1, 2, 3)); // Al menos uno es negativo
console.log(evaluarNumeros(-1, -2, -3)); // Todos son negativos
console.log(evaluarNumeros(0, 1, -1)); // Al menos uno es negativo
}
// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

// Ejercicio 2: Condicionales anidados
function clasificarEdad(edad) {
    if (edad < 18) {
        console.log("Menor de edad");
    } else if (edad >= 18 && edad <= 65) {
        console.log("Adulto");
    } else {
        console.log("Adulto mayor");
    }
}

// Ejercicio 3: Bucles while
function cuentaRegresiva(numero) {
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}

// Ejercicio 4: Bucles do-while
function repetirMensaje() {
    let contador = 0;

    do {
        console.log("Estoy aprendiendo JavaScript");
        contador++;
    } while (contador < 5);
}

// Ejercicio 6: Uso de break
function detenerEnSeis() {
    for (let numero = 1; numero <= 10; numero++) {
        if (numero === 6) {
            break;
        }
        console.log(numero);
    }
}

// Ejercicio 7: Uso de continue
function saltarCinco() {
    for (let numero = 1; numero <= 10; numero++) {
        if (numero === 5) {
            continue;
        }
        console.log(numero);
    }
}

// Ejercicio 8: Switch básico
function obtenerDiaSemana(dia) {
    let diaSemana;

    switch (dia) {
        case 1:
            diaSemana = "Lunes";
            break;
        case 2:
            diaSemana = "Martes";
            break;
        case 3:
            diaSemana = "Miércoles";
            break;
        case 4:
            diaSemana = "Jueves";
            break;
        case 5:
            diaSemana = "Viernes";
            break;
        case 6:
            diaSemana = "Sábado";
            break;
        case 7:
            diaSemana = "Domingo";
            break;
        default:
            diaSemana = "Número inválido. Debe estar entre 1 y 7.";
    }

    return diaSemana;
}

// Ejercicio 9: Switch con múltiples casos
function esVocal(letra) {
    switch (letra.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return "Es una vocal";
        default:
            return "No es una vocal";
    }
}
// Ejercicio 10: Condicionales complejos con operadores lógicos
function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return "Todos son positivos";
    } else if (a < 0 || b < 0 || c < 0) {
        if (a < 0 && b < 0 && c < 0) {
            return "Todos son negativos";
        } else {
            return "Al menos uno es negativo";
        }
    } else {
        return "Todos son cero o hay combinación de positivos y negativos";
    }
}
// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
