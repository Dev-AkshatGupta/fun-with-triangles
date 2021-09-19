const formQuiz=document.querySelector(".quiz-form");
const submitButton=document.querySelector("#submit-Button");
const outputAnswer=document.querySelector("#output");
const answer=["90°","right angled"];


function checkAnswer(){
let i=0;
let score=0;
const formResults=new FormData(formQuiz);
for(let value of formResults.values()){
    if(value===answer[i])
    {score=score+1;}
    i=i+1;
}
outputAnswer.innerText="your score is "+score;
}

submitButton.addEventListener("click",checkAnswer);