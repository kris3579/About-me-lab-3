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
console.log("Q1 answer", question1)

var question2 = prompt('Was Kris born in Seattle?');

if (question2.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
    alert('Correct!');
    document.getElementById("check2").style.display = "inline-block";
} else if (question2.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') {
    alert('Incorrect');
} else {
    alert('Please enter Y or N');
}
console.log("Q2 answer",question2)

var question3 = prompt('Does Kris\'s ancestry include Native American blood?');

if (question3.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
    alert('Correct!');
    document.getElementById("check3").style.display = "inline-block";
} else if (question3.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') {
    alert('Incorrect');
} else {
    alert('Please enter Y or N');
}
console.log("Q3 answer",question3)

var question4 = prompt('Is Kris fond of coffee?');

if (question4.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') {
    alert('Correct!');
    document.getElementById("check4").style.display = "inline-block";
} else if (question4.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
    alert('Incorrect');
} else {
    alert('Please enter Y or N');
}
console.log("Q4 answer",question4)

var question5 = prompt('Does Kris have an endless stomach?');

if (question5.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
    alert('Correct!');
    document.getElementById("check5").style.display = "inline-block";
} else if (question5.toUpperCase() === 'N' || question1.toUpperCase() === 'NO') {
    alert('Incorrect');
} else {
    alert('Please enter Y or N');
}
console.log("Q5 answer",question5)