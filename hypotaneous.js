const lengthInput=document.querySelectorAll(".length-input");
const checkButton=document.querySelector("#check-button");
const outputEl=document.querySelector("#answer");

function squaresAndSum(a,b){
    let sumOfSquares=a*a+b*b;
    
return sumOfSquares
}

function hypoteneousCalculator(){
    if(!Number(lengthInput[0].value)||!Number(lengthInput[1].value))
    {
        outputEl.innerText="Please Fill all the fields"
    }
    else{
        if(Number(lengthInput[0].value)<1 ||Number(lengthInput[1].value)<1){
            outputEl.innerText="please fill valid values";
        }
        else{
            let sum= squaresAndSum(Number(lengthInput[0].value),Number(lengthInput[1].value));
    
    const squareRootSum=Math.sqrt(sum);
 const squareRootOfSum=squareRootSum.toFixed(2);
outputEl.innerText="length of hypoteneus is "+squareRootOfSum;
        }
    }
   }

checkButton.addEventListener("click",hypoteneousCalculator);