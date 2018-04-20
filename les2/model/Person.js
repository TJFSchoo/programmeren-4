class Person {
    constructor(firstName, lastName) {
        // Alle attributen in een class beginnen met underscore '_'
        this._firstName = firstName;
        this._lastName = lastName;
    }

    getFirstName(){
        // Getter
        return this._firstName;
    }
}

module.exports = Person;

