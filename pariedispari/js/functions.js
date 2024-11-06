/**
 * Genera un numero random da 1 a 5
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomNum (min, max) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}

/** 
 * Verifica se un numero e' pari o dispari
 * @param {number} number
 * @returns {string}
 */

function pariDispari(number) {
    let result = "";

    if (number % 2 === 0) {
        result = "Pari";
    } else {
        result = "Dispari";
    }
    return result;
}