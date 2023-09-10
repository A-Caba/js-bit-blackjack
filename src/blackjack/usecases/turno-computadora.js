
import {crearCartaHTML, pedirCarta, valorCarta} from './';
 /**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar las cartas
 * @param {HTMLElement} divCartasComputadora
 * @param {Array<String>} deck baraja en forma de un array de strings
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos) throw new Error ('Puntos mínimos son necesarios')
    if (!puntosHTML) throw new Error ('Argumento necesario')
    if (!divCartasComputadora) throw new Error ('Argumento necesario')
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
 
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );
 
        if( puntosMinimos > 21 ) {
            break;
        }
 
    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
 
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
 }