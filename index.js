let kmToGo = parseFloat(prompt("Inserire i km da percorrere"));
console.log(kmToGo)
while (isNaN(kmToGo)) {
    kmToGo = parseFloat(prompt("Ci dispiace, il valore inserito non è corretto! Inserire i km da percorrere"));
}

let userAge = parseInt(prompt("Inserire l'età del passeggero"));
console.log(userAge)
while (isNaN(userAge)) {
    userAge = parseInt(prompt("Ci dispiace, il valore inserito non è corretto! Inserire i km da percorrere"));
}

let ticketPrice;
if ( (userAge > 18) && (userAge < 66) ) {
    ticketPrice = kmToGo * 0.21;
    console.log("Il prezzo del biglietto senza nessuno sconto è:", ticketPrice.toFixed(2) );
} else if(userAge < 19) {
    ticketPrice = kmToGo * 0.21;
    ticketPrice = ticketPrice - ((ticketPrice * 20) / 100);
    console.log("Il prezzo del biglietto scontato del 20% è:", ticketPrice.toFixed(2) );
} else {
    ticketPrice = kmToGo * 0.21;
    ticketPrice = ticketPrice - ((ticketPrice * 40) / 100);
    console.log("Il prezzo del biglietto scontato del 40% è:", ticketPrice.toFixed(2) );
}