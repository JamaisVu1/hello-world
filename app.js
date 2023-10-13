"use strict";

function frogsurvey() {
  alert("Certified frog fanatics only!");

  function getname() {
    let username = prompt("What's your name?");
    console.log(username);
    document.write("It's frog time " + username);
    return username;
  }

  const userName = getname();

  if (userName) {
    const usersanswer = prompt("Are you a frog fanatic? Yes answers only.");
    console.log("user typed: " + usersanswer);

    if (usersanswer && usersanswer.toLowerCase() === "yes") {
      document.write("Absolutely you are!");
    } else {
      alert("You'll like it!");
    }

    const usersfrog = prompt(
      "How many frogs do you have? Numbers only please!"
    );

    if (!isNaN(usersfrog) && usersfrog > 0) {
      alert("THAT'S SICK");
    } else {
      alert("I said numbers only!");
    }

    function severalgents() {
      let gents = prompt("How many frogs can you hold at once, 1-5!");

      if (!isNaN(gents) && gents >= 1 && gents <= 5) {
        for (let i = 1; i <= gents; i++) {
          document.write(
            '<img src="gentleman.webp" alt="A frog being quite the gentleman and bowing" />'
          );
        }
      } else {
        alert("Please enter a valid number between 1 and 5.");
      }
    }

    severalgents();
  }
}

frogsurvey();
