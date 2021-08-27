var lastNameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var yourLastName = prompt("Qual è il tuo cognome?").toLowerCase();

yourLastName = yourLastName.charAt(0).toUpperCase() + yourLastName.slice(1);

console.log(yourLastName);

lastNameList.push(yourLastName);

lastNameList.sort();

console.log(lastNameList);

console.log(lastNameList.indexOf(yourLastName) + 1);

document.getElementById("user_position").innerHTML = lastNameList.indexOf(yourLastName) + 1;

for (var i = 0; i < lastNameList.length; i++) {
    if (i < lastNameList.length - 1) {
        document.getElementById("list_names").innerHTML += lastNameList[i] + ", ";
    } else {
        document.getElementById("list_names").innerHTML += lastNameList[lastNameList.length - 1] + ".";
    }
}
