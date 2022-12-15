console.log ("JS OK");

//---------------- Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero
//  da 1 a 5 tramite un form.
// Generiamo un numero random (sempre da 1 a 5) 
// per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri
//  è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// PRENDO GLI ELEMENTI DAL DOM
const number = document.getElementById("number");
console.log (number);

button = document.getElementById("button");
console.log(button)

// const random = Math.floor(Math.random() * 5) + 1;

// FUNZIONE PER NUMERO RANDOMICO
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

// FUNZIONE CHECK PARI O DISPARI
function podCheck(number){
    let result = '';
    if(number % 2 == 0) {
        alert("Ha vinto il pari !")
        return result;
    }else {
        alert("Ha vinto il dispari !")

        return result;
    }
}


// ADD EVENT LISTENER SUL BOTTONE
button.addEventListener("click", function(){
    const userNumber = parseInt(number.value);
    console.log(userNumber + ": userNumer");

    const randomNumberCpu = parseInt(randomNumber(1,5)) ;
    console.log (randomNumberCpu +" RandomCPU");
    
    const sum = randomNumberCpu + userNumber;
    console.log(sum + "somma totale");

   const sumCheck =  podCheck(sum);
   console.log(sumCheck);
});
