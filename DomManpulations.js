
const objectmodel={
  Name: "Bharathan",
  City:"molapalayam",

 greetUser(){
  return `hello, i am ${this.Name} from ${this.City}`;
  }
}
const inputName=prompt("What is your name ?");
const inputCity=prompt("What is your City ?");

objectmodel.Name = inputName;
objectmodel.City=inputCity;
document.body.innerHTML=objectmodel.greetUser();

