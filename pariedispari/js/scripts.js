const userSelect = prompt("Pari o Dispari?").toLowerCase();

if (userSelect !== "pari" && userSelect !== "dispari") {
    console.log("Errore! Scrivi pari o dispari!");
} else {
    
    const userNum = parseInt(prompt("Dimmi un numero da 1 a 5!"));
    console.log(`Hai scelto ${userSelect}`);
    console.log(`Il tuo numero e' ${userNum}`);

    const npcNum = randomNum(1, 5);
    console.log(`Il numero del computer e' ${npcNum}`);

    const sum = userNum + npcNum;
    console.log(`La somma dei numeri e' ${sum}`);

    const evenOdd = pariDispari(sum);
    console.log(`Il risultato e' ${evenOdd}`);

    let message = "";
    if ((evenOdd && userSelect === "pari") || (evenOdd && userSelect === "dispari")) {
        message = "Congratulazioni! Hai vinto!"
    } else {
        message = "Ritenta sarai piu' fortunato!"
    }

    console.log(message);
}