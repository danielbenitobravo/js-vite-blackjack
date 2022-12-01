import { shuffle } from 'underscore';

/**
 * Crea un nuevo deck, lo mezcla y lo devuelve
 * @param {Array<String>} tipos Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} especiales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} devuelve un deck de cartas
 */
export const crearDeck = (tipos, especiales) => {

    if (!tipos || tipos.length === 0) {
        throw new Error('"tipos" es obligatorio');
    }
    if (!especiales || especiales.length === 0) {
        throw new Error('"especiales" es obligatorio');
    }

    let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (let especial of especiales) {
      deck.push(especial + tipo);
    }
  }
  deck = shuffle(deck);
  return deck;
};
