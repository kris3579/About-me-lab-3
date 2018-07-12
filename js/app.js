"use strict";
var question1 = prompt('Is Kris a Dog person?');

if (question1.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') {
    alert('Correct!');
    document.getElementById("check1").style.display = "inline-block";
} else if (question1.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
    alert('Incorrect');
} else {
    alert('Please enter Y or N');
}
console.log("Q1 answer", question1);

var question2 = prompt('Was Kris born in Seattle?');

if (question2.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
    alert('Correct!');
    document.getElementById("check2").style.display = "inline-block";
} else if (question2.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') {
    alert('Incorrect');
} else {
    alert('Please enter Y or N');
}
console.log("Q2 answer",question2);

var question3 = prompt('Does Kris\'s ancestry include Native American blood?');

if (question3.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
    alert('Correct!');
    document.getElementById("check3").style.display = "inline-block";
} else if (question3.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') {
    alert('Incorrect');
} else {
    alert('Please enter Y or N');
}
console.log("Q3 answer",question3);

var question4 = prompt('Is Kris fond of coffee?');

if (question4.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') {
    alert('Correct!');
    document.getElementById("check4").style.display = "inline-block";
} else if (question4.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
    alert('Incorrect');
} else {
    alert('Please enter Y or N');
}
console.log("Q4 answer",question4);

var question5 = prompt('Does Kris have an endless stomach?');

if (question5.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
    alert('Correct!');
    document.getElementById("check5").style.display = "inline-block";
} else if (question5.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') {
    alert('Incorrect');
} else {
    alert('Please enter Y or N');
}
console.log("Q5 answer",question5);

//QUESTION 6
var wrongAnswer = 0; 
var rightAnswer = 20;


while (wrongAnswer < 4) {
    var userGuess = Number(prompt('How many days a month does Kris tend abandon all self-control to spend to much money on ramen?'));
    if (userGuess > rightAnswer) {
        wrongAnswer++;
        console.log('how many times answered wrong', wrongAnswer);
        alert('What, thats a crazy amount of ramen! Try again.');
       // question6 = prompt('How many days a month does Kris tend abandon all self-control to spend to much money on ramen?');
    } else if (userGuess < rightAnswer) {
        wrongAnswer++;       
        console.log('how many times answered wrong', wrongAnswer);
        alert('Ramen is better than that! Try again.');
        //question6 = prompt('How many days a month does Kris tend abandon all self-control to spend to much money on ramen?');
    } else if (userGuess === rightAnswer) {
        alert('Exactly! (Maybe)');
        break;
    } else {
        alert('You never guessed a number!');
    }
    if (wrongAnswer === 4)
    alert('Too bad, I guess your not on the level of Kris\'s ramen spirt.');
}  
    

var question7 = prompt('Can you guess a country that Kris has visited?');
//var canada = true;
//var italy = true;
//var netherlands = true;
var countryList = ['canada', 'italy', 'netherlands'];

for (var attempts = 0; attempts < 6; attempts++) {
    for (var i = 0; i < countryList.length; i++) {
        if (question7 === countryList[i]) {
            console.log ('Correctly input answer', countryList[i]);
            alert('Yes, I have been there! I have been too Italy, The Netherlands, and Canada.' );
            break;
        }
        if (question7 !== countryList[i]) {
            console.log ('Incorrect attempts', attempts);
            alert('No, I haven\'t been there. (Yet!) Try again!');
            question7 = prompt('Can you guess a country that Kris has visited?');
        } else if (attempts >= 6) {
            alert('Too bad, your out of tries... I have been to Italy, The Netherlands, and Canada.')
            break;
        }
    }




}




