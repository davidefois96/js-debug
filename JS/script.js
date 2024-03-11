/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


//BUNDLE 1

// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// ciclo for con che stampa in console i , l'errore logico sta nel i>5 ! i=0 è il valore di partenza quindi il ciclo non puo' funzionare


// ESERCIZIO 2
function addIfEven(num) {
  if (num % 2 === 0) {
      return num + 5;
  }
  return num;
}

// funzione con col compito di verificare se un numero è pari, errore sintattico nella condizione dell' if in quanto un solo uguale implica un assegnamento e non un uguaglianza. errore logico in entrambi i return deve esistere solo quello dentro l' if e deve restituire solo il num se la condizione è vera



// ESERCIZIO 3
function loopToFive() {
  for (let i=1; i<=5; i++) {
      console.log(i);
  }
}

// funzione che stampa in console i per 5 volte . Errore logico nell' assegnamento di i che deve partire da 1 e la condizione dev' essere <=5 nel for bisogna sostituire le , coi ;


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const evenNumbers = [];
  for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers % 2 === 0); {
          evenNumbers.push(numbers[i]);
      }
     
  }
  return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]


//funzione che push in un array secondario i numeri pari dell' array primario. dichiarazione errata degli array con let che dovrebbero essere dichiarati prima della funzione ed inseriti come parametri, bisogna rimuovere il ; dentro il for, nell' if bisogna inserire numbers[i] e la condizione non può essere un assegnamento con = 0,il return deve andare fuori dal ciclo, per visualizzare il return della funzione displayEvenNumbers() sarebbe bene inserire la chiamata in un console.log() o comunque eseguirlo sull' array evenNumbers

//BUNDLE 2

// ESERCIZIO 1
function checkAge() {
  const myAge = 32;
  const message = '';

  if (myAge < 18) {
      message = `Sei troppo giovane! Hai ${myAge} anni!`;
  } else {
      message = 'Hai 18 anni o più!';
  }
  return message;
}


// funzione per verificare la maggiore età di un utente che a seconda dell' età restituisce cambia il contenuto di una stringa contenuta in in una costante message. le due costanti dovrebbero essere dichiarate al di fuori della funzione ed inserite come parametri nella stessa. message dev essere dichiarata come variabile , dopo l 'else dev essere specificato che si hanno 18 o più anni nella stringa. all' interno si può inserire un return message in questo modo alla chiamata il messaggio potrà essere visualizzato.


// ESERCIZIO 2
function printColorsNumber() {
  const colors = ['blue', 'red', 'yellow', 'green', 'black'];
  
  return console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

// funzione che in base alla lunghezza di un array mi stampa in console il numero di contenuti presenti al suo interno. e' bene inserire l' array come parametro non avebdolo all' interno e dare un return console.log(`Nella mia palette ci sono ${colors.lenght} colori!`); in modo che alla chiamata possa essere visualizzato in nostro template.



// ESERCIZIO 3
function addNumbers() {
  const userNumber =parseInt(prompt('Inserisci un numero'));
  

  return console.log(`Il risultato finale è ${userNumber + 12}`);
}
addNumbers();

//funzione che dato un numero con il promt lo stampa in console aggiungendo 12 all' interno di un template. userNumber dev essere di chiarato prima della funzione e passato come parametro alla stessa, si puo' inserire all' interno direttamente return `Il risultato finale è ${userNumber +12}` eliminando la costante total cosicchè alla chiamata si possa vadere il nostro template, bisogna inserire il promt dentro il parseint()



// ESERCIZIO 4
function checkAccess() {
  const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = false;

  if (addresses.includes(userEmail)) {
      grantAccess = true;
  }

  if (grantAccess === true) {
      return console.log('Accesso consentito!');
  } else {
      return console.log('Accesso negato!');
  }
}
checkAccess();

//funzione per verificare che la mail inserita col promt sia presente all' interno di un' array per stabilire  se stampare in console 'Accesso consentito' opuure 'Accesso negato'. Sarebbe bene dichiarare precedentemente alla funzione le prime due costanti e la variabile grantAccess per inserirle come parametri all' interno della stessa. let grantAccess = 'false'deve essere dichiarato come booleano e non come stringhe gli apici devono essere rimossi. Nel secondo if può essere inserito un return davanti ai due console.log() cosicchè alla chiamata possano essere visualizzati immediatamente in console.


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
function checkAccessImproved() {

  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = false;

  for (let i = 0; i < addresses.length; i++) {
      const email = addresses[i];

      if (userEmail.length > 5) {

          if (email === userEmail) {
              grantAccess = true;

          }

      }

      if (grantAccess) {
          console.log('Accesso consentito!');
      } else {
          console.log('Accesso negato!');
      }
  }
  checkAccessImproved();

}

//Manca unaparentesi di chiusura della function checkAccessImproved() i booleani sonoscritti tra apici;



//BUNDLE 3


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
  {
      manufacturer: 'Ford',
      model: 'Fiesta',
      type: 'diesel'
  },
  {
      manufacturer: 'Audi',
      model: 'A1',
      type: 'benzina'
  },
  {
      manufacturer: 'Volkswagen',
      model: 'Golf',
      type: 'Benzina'
  },
  {
      manufacturer: 'Fiat',
      model: 'Panda',
      type: 'metano'
  },
  {
      manufacturer: 'Fiat',
      model: 'Multipla',
      type: 'GPL'
  },
  {
      manufacturer: 'Tesla',
      model: 'Model 3',
      type: 'elettrico'
  },
  {
      manufacturer: 'Volkswagen',
      model: 'Polo',
      type: 'benzina'
  },
  {
      manufacturer: 'Ford',
      model: 'Kuga',
      type: 'Diesel'
  },
  {
      manufacturer: 'Seat',
      model: 'Ibiza',
      type: 'metano'
  },
  {
      manufacturer: 'Audi',
      model: 'R8',
      type: 'Benzina'
  },
];

const gasolineCars = cars.filter( (auto) => auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => {
  auto.type === 'Diesel';
});

const otherCars = cars.filter( (auto) => {
  return auto.type !== 'Benzina' || auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

//manca una virgola a riga 59
// riga 67 errore nell' arrow function
// nei filter Diesel e benzina sono scritti in minuscolo

























