const lengthInput=document.querySelectorAll(".length-input");
const checkButton=document.querySelector("#check-button");
const outputEl=document.querySelector("#answer");

function areaOftriangle(a,b){
    let area=1/2*a*b;
    
return area
}

function areaCalculator(){
    
  let triangelArea=areaOftriangle(Number(lengthInput[0].value),Number(lengthInput[1].value));
outputEl.innerText="area of triangle is "+triangelArea;
}

checkButton.addEventListener("click",areaCalculator);