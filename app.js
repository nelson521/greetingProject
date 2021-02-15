// prompt user to type name
// get the value of the name
// if its not noon yet write good morning
// and if its pass noon write good afternoon
// and if its pass 5 write good evening
let usersName = prompt('what is your name?');

let greeting = document.querySelector('.greeting');

let date = new Date();
if (date.getHours() > 5 && date.getHours() < 11) {
  greeting.innerHTML = `Good Morning ${usersName}`;
}
if (date.getHours() > 12 && date.getHours() < 16) {
  greeting.innerHTML = `Good Afternoon ${usersName}`;
}

if (date.getHours() > 17 && date.getHours() < 19) {
  greeting.innerHTML = `Good Evening ${usersName}`;
}
console.log(date);
