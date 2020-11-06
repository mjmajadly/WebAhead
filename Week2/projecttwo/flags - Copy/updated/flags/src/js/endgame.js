var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");


// if the input is correct wrtiting code 

let arr = queries.map(a => a.split('='));
let varNames = arr.map(a => a[0]);
let values = arr.map(a => a[1]);

let obj = {};
for (let i = 0; i < varNames.length; i++) {
    obj[varNames[i]] = values[i];
}


function setting(msg, gf) {

    var score = document.getElementById('score');
    var username = document.getElementById('username');
    var correctanswers = document.getElementById('correctanswers');
    var message = document.getElementById('message');
    var gif = document.getElementById('gif');

    score.textContent = obj.score;
    username.textContent = obj.userName;
    correctanswers.textContent = obj.numberCorrectAnswers + ' out of 20';

    message.textContent = msg;
    gif.setAttribute('src', "../../img/" + gf)

}



let filtered = varNames.filter(a => a !== undefined);
if (filtered.length == 3) {

    var msgToAppear = '';
    var gifSrc = '';

    if (obj.numberCorrectAnswers >= 18) {
        msgToAppear = 'You are a real CHAMPION!!';
        gifSrc = 'champion.gif';
    }
    else if (obj.numberCorrectAnswers < 18 & obj.numberCorrectAnswers >= 12) {
        msgToAppear = 'You are Good!';
        gifSrc = 'good.gif';
    }
    else if (obj.numberCorrectAnswers < 12 & obj.numberCorrectAnswers >= 7) {
        msgToAppear = 'Not bad, book required';
        gifSrc = 'notbad.gif';
    }
    else if (obj.numberCorrectAnswers == 0) {
        msgToAppear = 'NO COMMENT';
        gifSrc = 'zero.gif';
    }
    else {
        msgToAppear = 'What do you know ?! LOL';
        gifSrc = 'what.gif';
    }

    setting(msgToAppear, gifSrc)
}
//if not writing to the user "PROBLEM IN THE WEBSITE, WE ARE SORRY"
else {
    alert('Sorry, we have a problem');
}


// output >> sending according to element's ID :::
// id ='message'
// id="score" for the score
// id="username" for the username
// id="correctanswers" for how many correct answers you did
// 




