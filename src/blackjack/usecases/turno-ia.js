import { pedirCarta, valorCarta, crearCartaHtml } from "./";

/**
 * Turno de la IA
 * @param {number} puntosMinimos puntos minimos que la ia necesita para ganar
 * @param {HTMLElement} puntosHtml elemento HTML para mostrar los puntos
 * @param {Array<string>} deck 
 */
export const turnoIa = (puntosMinimos, puntosHtml, divCartasIa, deck = []) => {

    if (!puntosMinimos) {
        throw new Error('Puntos minimos es necesario');
    }

    let puntosIa = 0;

  do {
    const carta = pedirCarta(deck);
    puntosIa += valorCarta(carta);
    puntosHtml.innerText = puntosIa;

    const imgCarta = crearCartaHtml(carta);
    divCartasIa.append(imgCarta);
    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosIa < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosIa === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("La IA gana");
    } else if (puntosIa > 21) {
      alert("Ganaste :D");
    } else {
      alert("La IA gana");
    }
  }, 100);
};
