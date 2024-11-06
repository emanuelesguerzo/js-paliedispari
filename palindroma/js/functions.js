/**
 * Verifica se una parola e' palindroma
 * @param {string} word
 * @returns {boolean}
 */

function isPalindrome(word) {
    let result = "";

    for (let i = word.length - 1; i >= 0; i--) {
        const curChar = word[i];
        result = result + curChar;
    }

    const endResult = (result === word);
    return endResult;
}