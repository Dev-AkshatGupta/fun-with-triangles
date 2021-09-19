const lengthInput=document.querySelectorAll(".length-input");
const checkButton=document.querySelector("#check-button");
const outputEl=document.querySelector("#answer");

function squaresAndSum(a,b){
    let sumOfSquares=a*a+b*b;
    
return sumOfSquares
}

function hypoteneousCalculator(){
    
   let sum= squaresAndSum(Number(lengthInput[0].value),Number(lengthInput[1].value));
    //console.log(sum);
    const squareRootSum=Math.sqrt(sum);
 //   console.log(squareRootSum);
outputEl.innerText="length of hypoteneus is "+squareRootSum;
}

checkButton.addEventListener("click",hypoteneousCalculator);