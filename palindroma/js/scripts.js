const userWord = prompt("Dimmi una parola e ti diro' se e' palindroma!").toLowerCase();
const result1 = isPalindrome(userWord);

if (result1 === true) {
    console.log("Palindroma");
} else {
    console.log("Non Palindroma");
}


const result2 = isPalindrome(userWord);

if (result2 === true) {
    console.log("Is Palindrome");
} else {
    console.log("Is not Palindrome");
}