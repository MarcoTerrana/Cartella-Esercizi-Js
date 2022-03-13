
  const contact1 = {
      firstName:"nome",
      lastName:"cognome",
      telephoneNum:"numero di telefono",
  }
    
  const contact2 = {
    firstName:"nome",
    lastName:"cognome",
    telephoneNum:"numero di telefono",
}


const contact3 = {
    firstName:"nome",
    lastName:"cognome",
    telephoneNum:"numero di telefono"
}
   
const contact4 = {
    firstName:"nome",
    lastName:"cognome",
    telephoneNum:"numero di telefono",
}
   
const contact5 = {
    firstName:"nome",
    lastName:"cognome",
    telephoneNum:"numero di telefono",
}
 
const myContacts = [{contact1},{contact2},{contact3},{contact4},{contact5}];

console.log(myContacts);

function conSum() {
  let firstNum = parseInt(prompt("Inserisci il primo numero: "));
  let secondNum = parseInt(prompt("Inserisci il second numero: "));
  let userOperation = prompt('Quale operazione vorresti svoglere?')
  console.log(firstNum + secondNum);
  console.log(firstNum - secondNum)
  console.log(firstNum * secondNum)
  console.log(firstNum / secondNum)
 }


