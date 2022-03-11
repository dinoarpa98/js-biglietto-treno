// const km = prompt("Quanti chilometri vuoi percorrere?") ;
// console.log(km);

// const eta = prompt("Quanti anni hai?");
// console.log(eta);

const price = 0.21;


let nome = document.getElementById("nomeCognome");
console.log(nome)

let km = document.getElementById("chilometri");
console.log(km)

let eta = document.getElementById("selezioneEta");
console.log(eta)

let button = document.getElementById("b-1");
console.log(button);

let biglietto = document.getElementById("biglietto");

let nomebiglietto = document.getElementById("nomepasseggero");
console.log(nomebiglietto);

let sconto = document.getElementById("sconto");

let prezzofinale = document.getElementById("prezzofinale");

let randomn1 = Math.floor(Math.random() * 9) + 1;

let randomnumber = Math.floor(Math.random() * 99999) + 1;

let randomcode = document.getElementById("randomnumber")

let randomnmb = document.getElementById("nmb");

let prezzo = (km * price);

button.addEventListener("click",

  function () {
    console.log(nome.value, km.value, eta.value)

    nomebiglietto.innerHTML = nome.value;

   if(eta.value == "Minorenne"){
     sconto.innerHTML = 'sconto del : 20%';
     prezzofinale.innerHTML = `${ (km.value * 0.21) * 0.80} €`
   } else if (eta.value == "Standard"){
     sconto.innerHTML = 'Nessuno sconto';
      prezzofinale.innerHTML = `${ km.value * 0.21} €`
   } else {
     sconto.innerHTML = 'sconto del : 40%'
     prezzofinale.innerHTML = `${ (km.value * 0.21) * 0.60} €`
   }

   randomcode.innerHTML = randomnumber;

   randomnmb.innerHTML = randomn1;
   

    biglietto.classList.remove("d-none");
  }
)



// if (age > 18 ) {

// }