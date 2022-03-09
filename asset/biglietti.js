const km = prompt("Quanti chilometri vuoi percorrere?") ;
console.log(km);

const eta = prompt("Quanti anni hai?");
console.log(eta);

const price = 0.21;

let prezzo = (km * price) ;


if (eta < 18) {
  let prezzoscontato = prezzo - (prezzo * 20 / 100);
  console.log(prezzoscontato)
  document.getElementById("contenitore_target").innerHTML = ` il costo del tuo biglietto è ${prezzoscontato}€ `;
}

if (eta > 65) {
  let prezzoanziani = prezzo - (prezzo * 40 / 100) ;
  console.log(prezzoanziani);
  document.getElementById("contenitore_target").innerHTML = ` il costo del tuo biglietto è ${prezzoanziani}€ `;
}




// if (age > 18 ) {

// }