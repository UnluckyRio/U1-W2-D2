/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi. 
*/

let numeroA = 10;
let numeroB = 25;

if (numeroA > numeroB) {
  console.log("Il numero più grande è: " + numeroA);
} else if (numeroB > numeroA) {
  console.log("Il numero più grande è: " + numeroB);
} else {
  console.log("I numeri sono uguali.");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numeroC = 3;

if (numeroC !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numeroD = 20;
if (numeroD % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numeroE = 8;
let numeroF = 4;
if (
  numeroE === 8 ||
  numeroF === 8 ||
  numeroE + numeroF === 8 ||
  Math.abs(numeroE - numeroF) === 8
) {
  console.log("Uno dei numeri è 8 o la loro somma/sottrazione è uguale a 8.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 75;
let shippingCost = 10;
if (totalShoppingCart > 50) {
  console.log("Spedizione gratuita. Totale da pagare: " + totalShoppingCart);
} else {
  let totalWithShipping = totalShoppingCart + shippingCost;
  console.log("Totale da pagare (inclusa spedizione): " + totalWithShipping);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFridayDiscount = 0.2;
if (totalShoppingCart > 50) {
  let discountedTotal = totalShoppingCart * (1 - blackFridayDiscount);
  console.log(
    "Spedizione gratuita. Totale da pagare dopo lo sconto: " + discountedTotal
  );
} else {
  let discountedTotal = totalShoppingCart * (1 - blackFridayDiscount);
  let totalWithShipping = discountedTotal + shippingCost;
  console.log(
    "Totale da pagare dopo lo sconto (inclusa spedizione): " + totalWithShipping
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let num1 = 15;
let num2 = 30;
let num3 = 20;

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    console.log(num2, num1, num3);
  } else {
    console.log(num2, num3, num1);
  }
} else {
  if (num1 >= num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let value = "Hello";
if (typeof value === "number") {
  console.log("Il valore è un numero.");
} else {
  console.log("Il valore non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number = 7;
if (number % 2 === 0) {
  console.log("Il numero è pari.");
} else {
  console.log("Il numero è dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;

if (val < 5) {
  // Controlla prima la condizione più specifica
  console.log("Meno di 5");
} else if (val < 10) {
  // Poi la condizione più generale
  console.log("Meno di 10");
} else {
  // Infine, se nessuna delle precedenti è vera
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numbersArray = [];
numbersArray.push(1);
numbersArray.push(2);
numbersArray.push(3);
numbersArray.push(4);
numbersArray.push(5);
numbersArray.push(6);
numbersArray.push(7);
numbersArray.push(8);
numbersArray.push(9);
numbersArray.push(10);
console.log(numbersArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbersArray.splice(9, 1, 100);
console.log("Array modificato:", numbersArray);
