const small = document.querySelector('small');

const flagsObj = {
    'CANADA': 'img/CANADA.jpg',
    'UNITED STATES': 'img/UNITEDSTATES.jpg',
    'TURKEY': 'img/TURKEY.jpg',
    'ISRAEL': 'img/ISRAEL.jpg',
    'ITALY': 'img/ITALY.jpg',
    // 'CHILE': 'img/CHILE.jpg',
    // 'NEW ZEALAND': 'img/NEWZEALAND.jpg',
    // 'MACAU': 'img/MACAU.jpg',
    // 'YEMEN': 'img/YEMEN.jpg',
    // 'CHINA': 'img/CHINA.jpg',
    // 'IRAQ': 'img/IRAQ.jpg',
    // 'COLOMBIA': 'img/COLOMBIA.jpg',
    // 'EGYPT': 'img/EGYPT.jpg',
    // 'IRAN': 'img/IRAN.jpg',
    // 'JAPAN': 'img/JAPAN.jpg',
    // 'JORDAN': 'img/JORDAN.jpg',
    // 'LEBANON': 'img/LEBANON.jpg',
    // 'SAUDI ARABIA': 'img/SAUDIARABIA.jpg',
    // 'SPAIN': 'img/SPAIN.jpg',
    // 'SUDAN': 'img/SUDAN.jpg',
    // 'TURKEY': 'img/TURKEY.jpg',
    // 'UNITEDSTATES': 'img/UNITEDSTATES.jpg'
};

var correctSound = new sound("sounds/correctsound.mp3");
var wrongSound= new sound("sounds/wrongsound.mp3");

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}



console.log("here");
var imgflag = document.getElementById("imgflag");
var input = document.getElementById("inputAnswer");
input.style.display = 'none';
var submit = document.getElementById("submit");

let myObjKeys = Object.keys(flagsObj);

var scoreText = document.getElementById("score");
scoreText.style.display = 'none';


var skipperButton = document.getElementById("skipper");
skipperButton.style.display = 'none';

var userNameInout = document.getElementById("username");

submit.addEventListener("click", submitMe);
skipperButton.addEventListener("click", skipQuestion);

var score = 0;
var level = 0;
var countryName = '';
var wrongAnswer = -5;
var correctAnswer = 10;
var userName = '';
var numberCorrectAnswers = 0 ;



function setCountry() {

    if (level == myObjKeys.length) {


        var queryString = "?score=" + score + "&userName=" + userName +"&numberCorrectAnswers="+numberCorrectAnswers;
        console.log(queryString);
        window.location.href = "endgame.html" + queryString;

    } else {


        scoreText.textContent = " Your Score : " + (score);

        countryName = myObjKeys[level];
        var srcImg = flagsObj[countryName];
        imgflag.src = srcImg;


    }
}

function submitMe() {

    if (submit.textContent === 'Start game') {
        submit.textContent = 'Submit';
        input.style.display = 'block';
        scoreText.style.display = 'block';

        skipperButton.style.display= 'block';
        userName=userNameInout.value;
        userNameInout.style.display = 'none';

        setCountry();

    } else {
        if (input.value.toLowerCase() === countryName.toLowerCase()) {
            level++;

            score+=correctAnswer;
            numberCorrectAnswers++;
            correctSound.play();
            setCountry();
            small.classList.remove('failed');
            small.classList.add('pass');
            small.innerText = 'Correct answer :)';
    
        } else {
            wrongSound.play();
            score+=wrongAnswer;
            small.classList.remove('pass');
            small.classList.add('failed');
            small.innerText = 'nope';
    
        }
    }

    scoreText.textContent = " Your Score : " + (score);
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
