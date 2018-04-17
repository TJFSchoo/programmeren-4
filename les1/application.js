var applicationName = "Application.js";
var version = 1.01;

console.log(applicationName + " executed.");
console.log("Running version build " + version + ".");

// Person class importeren (const = zelfde als in Java met 'final')
const Person = require('./classes/Person');

// Gebruik van Person class om nieuw object te maken en te printen
let Tom = new Person("Tom","Schoonbeek");
let Kees = new Person("Kees","Kroket");
let Piet = new Person("Piet","Jemoeder");
console.log(Tom);

// Declaratie van variable
// var en let ongeveer hetzelfde
let person = {
    firstName: "Tom",
    lastName: "Schoonbeek",
    address: {
        street: "Julianalaan",
        nr: 82,
        zip: "4902NK"
    },
    courses: {
        course1: "Programmeren4",
        course2: "Studievaardigheden4"
    }
}

console.log("My name is " + person.firstName + " " + person.lastName + ".");

// Maken van Array
let personList = [];
personList.push(Tom);
personList.push(Kees);
personList.push(Piet);

// Printen van Array via een zelfgemaakte functie
let printFunc = function printList(){
    console.log("The list of persons:");
    for(let i = 0; i < personList.length; i++){
        console.log(personList[i].getFirstName());
    }
}

// Uitvoeren van functie
printFunc();

let getItem = function(list, index, callback){
    if(list[index] != undefined){
        // console.log(list[index]);
        callback(null,list[index]);
    } else {
        // console.log("error");
        callback("Error",null);
    }
}

// uitvoeren van getItem() functie met daarin
// Lambda functie of 'fat-arrow' function
// Je maakt hier dus een functie in een regel (beetje vreemd)
getItem(personList, 2, (error,result) => {
        if(error == null){
            // Er werd geen error meegegeven (in getItem())
            console.log(result);
        } else {
            // Er werd een error meegegeven (in getItem())
            console.log(error);
        }});





