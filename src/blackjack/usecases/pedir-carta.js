/**
 * Esta función solicita una carta del deck
 * @param {Array<String>} baraja es un arreglo de string
 * @returns {String} retorna una carta de la baraja
 */

export const pedirCarta = (deck) => {

    if(!deck || deck.length === 0) 
        throw new Error('Baraja es obligatoria como un array de string');

    const carta = deck.pop();
    return carta;
 }