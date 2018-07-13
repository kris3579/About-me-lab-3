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
var userGuess = Number(prompt('How many days a month does Kris tend abandon all self-control to spend to much money on ramen?'));

function q6() {
  while (wrongAnswer < 4) {
    if (userGuess > rightAnswer) {
      wrongAnswer++;
      console.log('how many times answered wrong', wrongAnswer);
      if (wrongAnswer === 4) {
        alert('What, thats a crazy amount of ramen! \nToo bad, I guess your not on the level of Kris\'s ramen spirt.');
        break;
      }
      alert('What, thats a crazy amount of ramen!');
      userGuess = Number(prompt('How many days a month does Kris tend abandon all self-control to spend to much money on ramen?'));
    } else if (userGuess < rightAnswer) {
      wrongAnswer++;
      console.log('how many times answered wrong', wrongAnswer);
      if (wrongAnswer === 4) {
        alert('Ramen is better than that! \nToo bad, I guess your not on the level of Kris\'s ramen spirt.');
        break;
      }
      alert('Ramen is better than that!');
      userGuess = Number(prompt('How many days a month does Kris tend abandon all self-control to spend to much money on ramen?'));
    } else if (userGuess === rightAnswer) {
      alert('Exactly! (Maybe)');
      document.getElementById('check6').style.display = 'inline-block';
      tally++;
      console.log('number of tallies', tally);
      break;
    } else {
      wrongAnswer++;
      console.log('how many times answered wrong', wrongAnswer);
      if (wrongAnswer === 4) {
        alert('You didn\'t guess a number! \nToo bad, I guess your not on the level of Kris\'s ramen spirt.');
        break;
      }
      alert('You didn\'t guess a number!');
      userGuess = Number(prompt('How many days a month does Kris tend abandon all self-control to spend to much money on ramen?'));
    }
  }
}

q6();

var countryList = ['texas', 'oregon', 'florida', 'california', 'idaho', 'new mexico', 'nevada'];
var maxGuesses = 5;
var breakAgain = false;

function q7() {
  for (var attempts = 0; attempts < 10; attempts++) {
    var question7 = prompt('Can you guess a State that Kris has visited?');
    for (var i = 0; i < countryList.length; i++) {
      if (question7.toLowerCase() === countryList[i]) {
        breakAgain = true;
        console.log('is brake again true', breakAgain);
        document.getElementById('check7').style.display = 'inline-block';
        tally++;
        console.log('number of tallies', tally);
        alert('He has been been there! \nKris has been to Oregon, Idaho, California, Nevada, New Mexico, Texas, and Florida.');
        break;
      }
    }
    if (attempts === maxGuesses) {
      alert('Kris has never been there. \nKris has been to Oregon, Idaho, California, Nevada, New Mexico, Texas, and Florida.');
      break;
    }
    if (breakAgain === true) {
      break;
    }
    console.log('attempts made', attempts + 1);
    alert('Kris has never been there.');
  }
}

q7();

if (tally <= 4) {
  alert('Nice try ' + username + ' you got ' + tally + ' out of 7 questions correct.');
} else if (tally > 4) {
  alert('Congratulations ' + username + ' you got ' + tally + ' out of 7 questions correct!');
}