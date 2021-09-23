const lengthInput=document.querySelectorAll(".length-input");
const checkButton=document.querySelector("#check-button");
const outputEl=document.querySelector("#answer");

function areaOftriangle(a,b){
    let area=1/2*a*b;
    
return area
}

function areaCalculator(){
    if(!Number(lengthInput[0].value) || !Number(lengthInput[1].value)){
      outputEl.innerText="Please fill all the values"
    }
    else{
      if(Number(lengthInput[0].value)<1 || Number(lengthInput[1].value)<1)
{
  outputEl.innerText="Please enter valid values"
}else{
  let triangelArea=areaOftriangle(Number(lengthInput[0].value),Number(lengthInput[1].value));
  outputEl.innerText="area of triangle is "+triangelArea;
}
    }
  
}

checkButton.addEventListener("click",areaCalculator);