const angleInput=document.querySelectorAll(".angle-input");
const checkButton=document.querySelector("#is-triangle-Button");
const outputEl=document.querySelector("#output");
function anglesCalculation(angle1,angle2,angle3){
    let sum=angle1+angle2+angle3;
    return sum;
    //console.log(sum);
}


function isThisTriangle()
{
    if(!Number(angleInput[0].value)|| !Number(angleInput[1].value) || !Number(angleInput[2].value)){
    const anglesSum=anglesCalculation(Number(angleInput[0].value),Number(angleInput[1].value),Number(angleInput[2].value));
   
    if(anglesSum===180){outputEl.innerText="this is a triangle"}
    else{outputEl.innerText="this is not a triangle"}
    
}
else{
    outputEl.innerText=""
}
    
}

checkButton.addEventListener("click",isThisTriangle);
