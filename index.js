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
    if(!Number(angleInput[0].value)|| !Number(angleInput[1].value) || !Number(angleInput[2].value))
    {
        outputEl.innerText="Please enter all the fields";
    }
    else
    { 
        if(Number(angleInput[0].value)<1 || Number(angleInput[1].value)<1 || Number(angleInput[2].value)<1)
        {outputEl.innerText="Please enter valid values";}
    else{
        const anglesSum=anglesCalculation(Number(angleInput[0].value),Number(angleInput[1].value),Number(angleInput[2].value));
   
        if(anglesSum===180){outputEl.innerText="this is a triangle"}
        else{outputEl.innerText="this is not a triangle"}
    }
}
}

checkButton.addEventListener("click",isThisTriangle);
