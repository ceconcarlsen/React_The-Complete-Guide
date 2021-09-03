//Padrão ES6
class Human {
    constructor(){
        this.gender = "male";
    }

    printGender(){
        console.log(this.gender);
    }
}


class Person extends Human{

    constructor(){
        super(); //Calls the contructor from the "mother class"
        this.name = "Gabriel" //Todo Objeto Person terá name = "Gabriel"
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();