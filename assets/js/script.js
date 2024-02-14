// Datos de entrada

// declaramos la variable numJuegos y le pedimos al usuario las veces que desea jugar
const numJuegos = parseInt(
  prompt("¿Cuántas intentos quiere jugar? (Desde 1 hasta 20)"),
  10
);
// declaramos variable historial para asignarle el resultado más adelante
let historial = "";

// Creamos la función para calcular la jugada de la CPU
function jugadaCPU() {
  // Declaramos la variable numCPU y le asigamos la función Math.random que permite obtener un número aleatorio entre el 0 y el 2
  let numCPU = Math.floor(Math.random() * 3);
  // Declaramos la variable eleccionCPU
  let eleccionCPU = "";
  // asignamos a la variable eleccionCPU el valor según el numero que nos haya entragado numCPU
  // Si numCPU es 0, eleccionCPU es igual a "Piedra". Si es 1, eleccionCPU es igual a "Papel". Si no es ni = ni 1, eleccionCPU es "Tijera"
  if (numCPU === 0) {
    eleccionCPU = "Piedra";
  } else if (numCPU === 1) {
    eleccionCPU = "Papel";
  } else {
    eleccionCPU = "Tijera";
  }
  //retornamos el valor de eleccionCPU
  return eleccionCPU;
}

// proceso de datos
// creamos un if con validación que el numero de intentos sea mayor o igual a 1 y menos o igual a 20, si cumple pasa al for.
if (!isNaN(numJuegos) && numJuegos >= 1 && numJuegos <= 20) {
// creamos un for que se repita por cada numero de intentos que selecciono el usuario
  for (let i = 0; i < numJuegos; i++) {
    // Le asignamos a la variable eleccionCPU el valor que nos da la función jugadaCPU (Math.random)
    eleccionCPU = jugadaCPU();
    // declaramos la variable eleccionUser y le pedimos al usuario que la asigne mediante Prompt
    let eleccionUser = prompt("Escribe tu elección: Piedra, Papel o Tijera");
    // Creamos un if y le entregamos los parametros permitidos que el usuario puede ingresar
    if (
      (eleccionUser === "Piedra",
      "piedra",
      "PIEDRA" || eleccionUser === "Papel",
      "papel",
      "PAPEL" || eleccionUser === "Tijera",
      "tijera",
      "TIJERA")
    ) {
        // declaramos la variable resultado que se le asignara el valor que nos de el switch que continúa
      let resultado = "";
      // Con switch aremos la comparacion entre EleccionUser y eleccionCPU, le asignaremos un resultado
      switch (true) {
        case eleccionUser === eleccionCPU:
          resultado = `Empataron... ambos escogieron ${eleccionUser}`;
          break;
        case eleccionUser === "Piedra" && eleccionCPU === "Tijera":
        case eleccionUser === "Papel" && eleccionCPU === "Piedra":
        case eleccionUser == "Tijera" && eleccionCPU === "Papel":
          resultado = `Felicitaciones, ganaste!! ${eleccionUser} le gana a ${eleccionCPU}`;
          break;
        default:
          resultado = `Muy bien!! pero perdiste... jajaja tu ${eleccionUser} pierde contra ${eleccionCPU}`;
          break;
      }
      // enviamos el mensaje con el resultado
      alert(resultado);
      // guardamos en historial los resultados junto con un salto de linea para poder leerlo bien
      historial = historial + resultado + "<br>";
    } else {
      // Enviamos el mensaje de error y luego recargamos la ventana del navegador del usuario ;)
      alert("No puedes escribir bien? intentalo nuevamente");
      window.location.reload();
    }
  }
} else if (numJuegos === 0) {
    //validamos que los numeros de intentos no seán igual a 0, le enviamos un mensaje y le recargamos la pestaña del navegador
  alert("No puede seleccionar 0 intentos");
  window.location.reload();
} else {
// Enviamos un mensaje de error y recargamos la pestaña del navegador
  alert("Solo puede jugar desde 1 hasta 20 intentos");
  window.location.reload();
}
// Finalmente mostramos en el navegador el numero de jugadas y cada uno de sus reslutados como historial, mediante innerHtml
document.getElementById("num_juegos").innerHTML = "Nº de jugadas: " + numJuegos;
document.getElementById("historial").innerHTML = historial;
