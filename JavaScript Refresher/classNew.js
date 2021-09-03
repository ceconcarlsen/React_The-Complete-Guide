//Padrão ES7 --> evita o uso do THIS
class Human {

  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
    
  name = "Gabriel"; //Todo Objeto Person terá name = "Gabriel"
  gender = "Female";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();
