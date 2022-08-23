var message = document.querySelector("#message");
var disapear = document.querySelector("#disapear");
var QuizCategories = document.querySelector("#QuizCategories");
var quizQuetions = document.querySelector("#quizQuetions");
var appear = document.querySelector("#appear");
appear.style.visibility = "hidden";
var python1 = document.querySelector("#python1");
var python2 = document.querySelector("#python2");
var python3 = document.querySelector("#python3");
var python4 = document.querySelector("#python4");
var NExtQuiz = document.querySelector("#NExtQuiz");
NExtQuiz.style.visibility = "hidden"

python1.style.visibility = "hidden"
python2.style.visibility = "hidden"
python3.style.visibility = "hidden"
python4.style.visibility = "hidden"




message.innerHTML = "Welcome ,"

function quizOpening(test) {
    disapear.style.visibility = "hidden";
    appear.style.visibility = "visible";

    if (test === "python") {

        QuizCategories.innerHTML = "Python";
        quizQuetions.innerHTML = "Quetions 1 of 25";
        NExtQuiz.style.visibility = "visible"
python1.style.visibility = "visible"


        // for (var i = 1; i = 4; i++) {
        //     // python"i".style.visibility = "hidden"

        // }







    }


}


