'use strict'

alert('Certified frog fanatics only!');

const usersanswer = prompt('Are you a frog fanatic? Yes answers only.');

console.log('user typed: ' + usersanswer);


if (usersanswer && usersanswer.toLowerCase() === 'yes') {
    document.write('Absolutely you are!');
  } else {
    alert("You'll like it!");
  }

  const usersfrog = prompt ("Do you have a pet frog? Numbers only please!");

  if (usersfrog > 0) {
    alert("THATS SICK");
  }

  else if (usersfrog < 1) {
    alert(" Get one!")
  }





