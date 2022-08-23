var timer = document.querySelector('#stopwatch');
timer.style.visibility = "hidden"
// timer.style.fontSize = "1000px"
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = false;
function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}










// var countdown = document.querySelector('#countdown');


// function bestWishes(){
//   for(var i=3;i=4;i-1){

//   countdown.innerHTML = "i"
//   }

// }
// setInterval("bestWishes()",5000)
// bestWishes()






var QuizCategories = document.querySelector('#QuizCategories');
var quizQuetions = document.querySelector('#quizQuetions');





