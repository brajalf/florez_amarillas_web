onload = () =>{
  document.body.classList.remove("container");
};

// Lista de frases
const frases = [
  "¡Que tu día sea tan radiante como estas flores amarillas!",
  "Cada flor es un símbolo de la belleza que hay en ti.",
  "Las flores amarillas son como un abrazo cálido en un día frío.",
  "La vida es mejor con un poco de color y alegría, como estas flores.",
  "Que cada flor en tu vida sea un recordatorio de lo maravilloso que eres.",
  "Las flores amarillas te desean un día lleno de sol y felicidad.",
  "Eres una flor en un jardín de posibilidades infinitas.",
  "Cada flor tiene una historia que contar; la tuya es una de belleza.",
  "Que tus días estén llenos de la misma alegría que estas flores.",
  "Las flores no solo decoran el espacio, también decoran el alma.",
  "Cada pétalo de estas flores lleva un mensaje de esperanza.",
  "Que estas flores iluminen tu día tanto como tu sonrisa ilumina el mío.",
  "Las flores amarillas son un símbolo de la alegría que llevas dentro.",
  "Tu luz interior es tan brillante como el color de estas flores.",
  "Las flores son el lenguaje de la naturaleza; hoy te envían felicidad.",
  "Un campo de flores amarillas es como un sueño hecho realidad.",
  "Que cada flor te recuerde que eres especial y amado/a.",
  "Estas flores son un pequeño recordatorio de lo grande que es tu corazón.",
  "Deja que la belleza de estas flores inspire tu día.",
  "Que cada rayo de sol en estas flores refleje la luz que llevas dentro.",
  "Las flores amarillas son como un abrazo cálido de la naturaleza.",
  "Hoy es el día perfecto para sonreír y disfrutar de la belleza a tu alrededor.",
  "Que el aroma de estas flores llene tu día de paz y alegría.",
  "Las flores son la forma en que la naturaleza nos dice 'Te quiero'.",
  "Cada flor es una obra maestra, al igual que tú.",
  "Que el color vibrante de estas flores ilumine tu camino.",
  "Tu presencia es tan encantadora como un campo lleno de flores amarillas.",
  "Cada flor es un recordatorio de la alegría que podemos encontrar en lo simple.",
  "Deja que estas flores te acompañen en cada momento de tu día.",
  "Que el espíritu de estas flores te llene de energía positiva y amor."
];

// Selecciona el elemento HTML donde se mostrará la frase
const fraseElement = document.getElementById("frase");

// Índice para llevar la cuenta de las frases
let fraseIndex = 0;

// Función que cambia la frase
function cambiarFrase() {
  // Cambia el texto del elemento con la siguiente frase
  fraseElement.textContent = frases[fraseIndex];
  
  // Incrementa el índice o lo reinicia si llega al final de la lista
  fraseIndex = (fraseIndex + 1) % frases.length;
}

// Inicia el cambio de frases
cambiarFrase();
setInterval(cambiarFrase, 8000); // Cambia la frase cada 8 segundos
