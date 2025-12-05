/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email */


const acceptedEmail = ["test@gmail.com", "test2@gmail.com", "test3@gmail.com"];
let userEmail = prompt("Inserisci la tua email");
let flag = false;

for (let i = 0; i < acceptedEmail.length; i++) {
  
    if(userEmail === acceptedEmail[i]) {
        
        i = acceptedEmail.length;
        flag = true;
    }
}

if (flag === true) 
{
    console.log("La tua email è accettata"); 
}

else {
    console.log("La tua email non è presente");
}





