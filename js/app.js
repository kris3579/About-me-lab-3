'use strict';

var tally = 0;
var username = prompt('Hello, and welcome to Kris\'s About-me page! What is your name?');

function q1() {

  var question1 = prompt('Is Kris a Dog person?');

  if (question1.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') {
    alert('Correct!');
    document.getElementById('check1').style.display = 'inline-block';
    tally++;
    console.log('number of tallies', tally);
  } else if (question1.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
    alert('Incorrect');
  } else {
    alert('Please enter Y or N');
  }
  console.log('Q1 answered', question1);
}

q1();

function q2() {

  var question2 = prompt('Was Kris born in Seattle?');

  if (question2.toUpperCase() === 'Y' || question2.toUpperCase() === 'YES') {
    alert('Correct!');
    document.getElementById('check2').style.display = 'inline-block';
    tally++;
    console.log('number of tallies', tally);
  } else if (question2.toUpperCase() === 'N' || question2.toUpperCase() === 'NO') {
    alert('Incorrect');
  } else {
    alert('Please enter Y or N');
  }
  console.log('Q2 answered',question2);
}

q2();

function q3() {

  var question3 = prompt('Would Kris sleep all day instead of being here if he could?');

  if (question3.toUpperCase() === 'Y' || question3.toUpperCase() === 'YES') {
    alert('Correct!');
    document.getElementById('check3').style.display = 'inline-block';
    tally++;
    console.log('number of tallies', tally);
  } else if (question3.toUpperCase() === 'N' || question3.toUpperCase() === 'NO') {
    alert('Incorrect');
  } else {
    alert('Please enter Y or N');
  }
  console.log('Q3 answered', question3);
}

q3();

function q4() {

  var question4 = prompt('Is Kris fond of coffee?');

  if (question4.toUpperCase() === 'N' || question4.toUpperCase() === 'NO') {
    alert('Correct!');
    document.getElementById('check4').style.display = 'inline-block';
    tally++;
    console.log('number of tallies', tally);
  } else if (question4.toUpperCase() === 'Y' || question4.toUpperCase() === 'YES') {
    alert('Incorrect');
  } else {
    alert('Please enter Y or N');
  }
  console.log('Q4 answered', question4);
}

q4();

function q5() {
  var question5 = prompt('Does Kris have an endless stomach?');

  if (question5.toUpperCase() === 'Y' || question5.toUpperCase() === 'YES') {
    alert('Correct!');
    document.getElementById('check5').style.display = 'inline-block';
    tally++;
    console.log('number of tallies', tally);
  } else if (question5.toUpperCase() === 'N' || question5.toUpperCase() === 'NO') {
    alert('Incorrect');
  } else {
    alert('Please enter Y or N');
  }
  console.log('Q5 answered', question5);
}
q5();

//QUESTION 6
var wrongAnswer = 0;
var rightAnswer = 20;

function q6() {
  while (wrongAnswer < 4) {
    var userGuess = Number(prompt('How many days a month does Kris tend abandon all self-control to spend to much money on ramen?'));
    if (userGuess > rightAnswer) {
      wrongAnswer++;
      console.log('how many times answered wrong', wrongAnswer);
      alert('What, thats a crazy amount of ramen! Try again.');
    } else if (userGuess < rightAnswer) {
      wrongAnswer++;
      console.log('how many times answered wrong', wrongAnswer);
      alert('Ramen is better than that! Try again.');
    } else if (userGuess === rightAnswer) {
      alert('Exactly! (Maybe)');
      document.getElementById('check6').style.display = 'inline-block';
      tally++;
      console.log('number of tallies', tally);
      break;
    } else {
      alert('You never guessed a number!');
    }
    if (wrongAnswer === 4)
      alert('Too bad, I guess your not on the level of Kris\'s ramen spirt.');
  }
}

q6();

var question7 = prompt('Can you guess a country that Kris has visited?').toLowerCase();
var canada = false;
var italy = false;
var netherlands = false;
var countryList = ['canada', 'italy', 'the netherlands'];

function q7() {

  var attempts = 0;
  while (attempts <= 6 ) {
    for (var i = 0; i < countryList.length; i++) {
      if (question7 === countryList[i]) {
        if (question7 === 'italy') {
          alert('I have been been there!');
          italy = true;
          break;
        } else if (question7 === 'canada') {
          alert('I have been been there!');
          canada = true;
          break;
        } else if (question7 === 'the netherlands') {
          alert('I have been been there!');
          netherlands = true;
          break;
        }
      }
    }
    if (italy === true || canada === true || netherlands === true) {
      console.log('Question answered right', italy, canada, netherlands);
      alert('I have been too Italy, The Netherlands, and Canada.');
      break;
    } else if (canada === false && italy === false && netherlands === false) {
      attempts++;
      console.log('attempt made', attempts);
    }
  }
}

q7();

if (tally <= 4) {
  alert('Nice try ' + username + ' you got ' + tally + ' out of 7 questions correct.');
} else if (tally > 4) {
  alert('Congratulations ' + username + ' you got ' + tally + ' out of 7 questions correct!');
}