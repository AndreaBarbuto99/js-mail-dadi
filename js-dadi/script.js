/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


const numUser = Math.floor((Math.random() * 6) + 1);
const numBot = Math.floor((Math.random() * 6) + 1);
console.log(numBot, numUser);


if (numUser === numBot)
{
    console.log("Parità");
    
}

else if(numBot > numUser)
{
    console.log("Ha vinto il bot");
    
}

else {
    console.log("Hai vinto!");
    
}