const small = document.querySelector('small');

const flagsObj = {
    'CANADA': 'img/CANADA.jpg',
    'UNITED STATES': 'img/UNITEDSTATES.jpg',
    'TURKEY': 'img/TURKEY.jpg',
    'ISRAEL': 'img/ISRAEL.jpg',
    'ITALY': 'img/ITALY.jpg',
    'CHILE': 'img/CHILE.jpg',
    'NEW ZEALAND': 'img/NEWZEALAND.jpg',
    'MACAU': 'img/MACAU.jpg',
    'YEMEN': 'img/YEMEN.jpg',
    'CHINA': 'img/CHINA.jpg',
    'IRAQ': 'img/IRAQ.jpg',
    'COLOMBIA': 'img/COLOMBIA.jpg',
    'EGYPT': 'img/EGYPT.jpg',
    'IRAN': 'img/IRAN.jpg',
    'JAPAN': 'img/JAPAN.jpg',
    'JORDAN': 'img/JORDAN.jpg',
    'LEBANON': 'img/LEBANON.jpg',
    'SAUDI ARABIA': 'img/SAUDIARABIA.jpg',
    'SPAIN': 'img/SPAIN.jpg',
    'BYZANTINE': 'img/HEHE.jpg',
};

var correctSound = sound("sounds/correctsound.mp3");
var wrongSound = sound("sounds/wrongsound.mp3");

function sound(src) {
    var sound1 = document.createElement("audio");
    sound1.src = src;
    sound1.setAttribute("preload", "auto");
    sound1.setAttribute("controls", "none");
    sound1.style.display = "none";
    document.body.appendChild(sound1);
    return sound1;
}




var imgflag = document.getElementById("imgflag");
var input = document.getElementById("inputAnswer");
input.addEventListener(
    "keypress",
    (e) => {
        if (e.key === "Enter") {
            submitMe();
        }
    });
input.style.display = 'none';
var submit = document.getElementById("submit");
let myObjKeys = Object.keys(flagsObj);

var scoreText = document.getElementById("score");
scoreText.style.display = 'none';

// MJ
var levelText = document.getElementById("level");
levelText.style.display = 'none';
// MJ

var skipperButton = document.getElementById("skipper");
skipperButton.style.display = 'none';

var userNameInout = document.getElementById("username");
userNameInout.addEventListener(
    "keypress",
    (e) => {
        if (e.key === "Enter") {
            submitMe();
        }
    });

submit.addEventListener("click", submitMe);
skipperButton.addEventListener("click", skipQuestion);

var score = 0;
var level = 1;
var countryName = '';
var wrongAnswer = -5;
var correctAnswer = 10;
var userName = '';
var numberCorrectAnswers = 0;



function setCountry() {

    if ((level-1) == myObjKeys.length) {
        var queryString = "?score=" + score + "&userName=" + userName + "&numberCorrectAnswers=" + numberCorrectAnswers;
        console.log(queryString);
        window.location.href = "src/html/endgame.html" + queryString;

    } else {


        scoreText.textContent = " Your Score : " + (score);

        countryName = myObjKeys[level-1];
        var srcImg = flagsObj[countryName];
        imgflag.src = srcImg;


    }
    levelText.textContent = "Level: " + (level) + " out of 20!";

}

function submitMe() {

    if (submit.textContent === 'Start game') {
        submit.textContent = 'Submit';
        input.style.display = 'block';
        scoreText.style.display = 'block';
        levelText.style.display = 'block';

        skipperButton.style.display = 'block';
        userName = userNameInout.value;
        userNameInout.style.display = 'none';

        setCountry();

    } else {
        if (input.value.toLowerCase() === countryName.toLowerCase()) {
            level++;

            score += correctAnswer;
            numberCorrectAnswers++;
            correctSound.play();
            setCountry();
            small.classList.remove('failed');
            small.classList.add('pass');
            small.innerText = 'Correct Answer :)';

        } else {
            wrongSound.play();
            score += wrongAnswer;
            small.classList.remove('pass');
            small.classList.add('failed');
            small.innerText = 'Wrong Answer :(';

        }
    }
    
    scoreText.textContent = "Your Score: " + (score);
    levelText.textContent = "Level: " + (level) + " out of 20!";
    input.value = '';
}

// Creating an input box  under the image  in//

// submit.addEventListener("click", submitMe);


// function submitMe() {

//     const diviHTML = document.querySelector('#divi')
//     const inputBox = document.createElement('input')

//     inputBox.setAttribute('type', 'text')
//     inputBox.setAttribute('name', 'input')
//     inputBox.setAttribute('id', 'input')
//     inputBox.placeholder = 'TEXT HERE!!'

//     // diviHTML.appendChild(inputBox)
//     diviHTML.insertBefore(inputBox, diviHTML.children[1]);

// }

function skipQuestion() {
    level++;
    setCountry();
}
