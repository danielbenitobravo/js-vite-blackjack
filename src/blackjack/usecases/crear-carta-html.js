/**
 * Crea una carta
 * @param {string} carta 
 * @returns {HTMLImageElement} imagen de return
 */
export const crearCartaHtml = (carta) => {
    if (!carta) {
        throw new Error('La carta es obligatoria');
    }
    const imgCarta = document.createElement('img');
    // src\blackjack\assets\cartas\2C.png
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    return imgCarta;
}