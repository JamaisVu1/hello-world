'use strict'

function frogsurvey() {
  alert("Certified frog fanatics only!");

  function getUsername() {
    return prompt('What is your name?');
  }

  const userName = getUsername();
  console.log("user typed: " + userName);

  if (userName) {
    const usersanswer = prompt("Are you a frog fanatic? Yes answers only.");
    console.log("user typed: " + usersanswer);

    if (usersanswer && usersanswer.toLowerCase() === "yes") {
      document.write("Absolutely you are!");
    } else {
      alert("You'll like it!");
    }

    const usersfrog = prompt("How many frogs do you have? Numbers only please!");

    if (!isNaN(usersfrog) && usersfrog > 0) {
      alert("THAT'S SICK");
    } else {
      alert("I said numbers only!");
    }
  }
}