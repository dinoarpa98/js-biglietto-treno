// const km = prompt("Quanti chilometri vuoi percorrere?") ;
// console.log(km);

// const eta = prompt("Quanti anni hai?");
// console.log(eta);

const price = 0.21;

let prezzo = (km * price) ;

let minorenne = document.getElementById("offerta").innerHTML = `Biglietto standard`;

let over = document.getElementById("offerta").innerHTML = `Biglietto Over 65`;

if (minorenne < 18) {
  let prezzoscontato = prezzo - (prezzo * 20 / 100);
  console.log(prezzoscontato)
 document.getElementById("offerta").innerHTML = `Biglietto standard`;
}

if (over > 65) {
  let prezzoanziani = prezzo - (prezzo * 40 / 100) ;
  console.log(prezzoanziani);
  document.getElementById("offerta").innerHTML = `Biglietto Over 65`;
}




// if (age > 18 ) {

// }