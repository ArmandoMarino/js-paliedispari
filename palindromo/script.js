console.log("JS OK");

// TRACCIA
// Palidroma
// Chiedere all’utente di inserire una parola tramiite un form
// Creare una funzione per capire se la parola inserita è palindroma

// PRENDO GLI ELEMENTI DAL DOM
const name = document.getElementById("text");
console.log(name);
const button = document.getElementById("button-check")
console.log(button);





// FUNZIONE REVERS A WORD
function reverseWord (word){
    let result = " ";
    for ( let i = word.length - 1; i >= 0  ; i--)
    result += word[i];
    return result;
}

button. addEventListener("click", function(){
    let userWord = name.value;
    console.log(userWord + "= userWord");

    const userWordreverse = reverseWord(userWord);
    console.log(userWordreverse + "= userwordreverse");

    
    if(userWord = userWordreverse){
        alert("La tua parola è un Palindromo!");
    }else{
        alert("La tua parola NON è un Palindromo!")
    }

});