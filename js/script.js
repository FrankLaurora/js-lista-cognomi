var lastNameList = ["bianchi", "neri", "rossi", "verdi", "gialli"];

var yourLastName = prompt("Qual è il tuo cognome?").toLowerCase();

lastNameList.push(yourLastName);

lastNameList = lastNameList.sort();

console.log(lastNameList);

console.log(lastNameList.indexOf(yourLastName) + 1);