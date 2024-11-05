/**
 * Verifica se una parola e' palindroma
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word) {
    let result = "";

    for (let i = userWord.length - 1; i >= 0; i--) {
    const curChar = userWord[i];
    result = result + curChar;
    }
    return result;
}