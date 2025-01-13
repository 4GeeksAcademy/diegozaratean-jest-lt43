console.log('repaso')
////////////////
// Descomposición
// Reconocimiento de patrones

// Hacer una función que tome la fecha de nacimiento de una persona y calcule la edad
// PSEUDOCODIGO

// DONE: crear la variable para almacenar la edad
let personaEdad = 0
// DONE: crear la variable para almacenar la fecha de nacimiento
// DONE: crear un funcion
function calcularEdad(fechaNacimiento){
    let fechaActual = new Date()
    // DONE:tomar le fecha actual
    console.log(fechaNacimiento)
    console.log(fechaActual)
    console.log('calcularEdad')
    return (fechaActual - fechaNacimiento) / (1000 * 60 * 60 * 24 * 365)
}

let fechaNacimiento =  new Date('1998-01-25')
// restar de la fecha actual , la fecha de nacimiento
personaEdad = calcularEdad(fechaNacimiento)
// DONE mostrar el resultado en la terminal
console.log( personaEdad)