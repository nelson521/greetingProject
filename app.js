// prompt user to type name
// get the value of the name
// if its not noon yet write good morning
// and if its pass noon write good afternoon
// and if its pass 5 write good evening
let usersName = prompt('what is your name?');

let greeting = document.querySelector('.greeting');

let date = new Date();

if (date.getHours() <= 12) {
  greeting.innerHTML = `Good Morning ${usersName}`;
} else if (date.getHours() <= 18) {
  greeting.innerHTML = `Good Afternoon ${usersName}`;
} else {
  greeting.innerHTML = `Good Evening ${usersName}`;
}
console.log(date);
