import { crearDeck, pedirCarta, valorCarta, turnoIa, crearCartaHtml } from './usecases'
/* Funcion Anonima Autoinvocada - Hace que no se pueda acceder a las propiedades desde la consola del navegador */
(() => {

  'use strict';

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'];
  const especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugador = 0;
  let puntosIa = 0;

  /* HTML References */
  const btnNuevo = document.querySelector('#btnNuevo');
  const btnPedir = document.querySelector('#btnPedir');
  const btnDetener = document.querySelector('#btnDetener');
  const puntosHtml = document.querySelectorAll('small');
  const divCartasJugador = document.querySelector('#jugador-cartas');
  const divCartasIa = document.querySelector('#ia-cartas');

  deck = crearDeck(tipos, especiales);

  /* Eventos */
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    puntosJugador += valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador;

    const imgCarta = crearCartaHtml(carta);
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
      console.warn('Lose');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoIa(puntosJugador, puntosHtml[1], divCartasIa, deck);
    } else if (puntosJugador === 21) {
      console.warn('21, nice!');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoIa(puntosJugador, puntosHtml[1], divCartasIa, deck);
    }
  });

  btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoIa(puntosJugador, puntosHtml[1], divCartasIa, deck);
  });

  btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);
    puntosJugador = 0;
    puntosIa = 0;
    puntosHtml[0].innerText = 0;
    puntosHtml[1].innerText = 0;
    divCartasIa.innerHTML = '';
    divCartasJugador.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  });

})();

