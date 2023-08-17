




function callingFunction2(isIncrease){
    const caseNumberField = document.getElementById('inputField-2');
 
    const caseNumberText= caseNumberField.value;
    const caseString= parseFloat(caseNumberText);
    let newCaseNumber;
    if(isIncrease===true){
       newCaseNumber=caseString + 1;
    }
    else{
       newCaseNumber=caseString - 1;
    }
    caseNumberField.value=newCaseNumber;
    return newCaseNumber;
 }

 document.getElementById('button-2').addEventListener('click',function(){
   const newCaseNumber= callingFunction2(true);
  
   const elementTotal= newCaseNumber*59;
   const totalAmount= document.getElementById('total-am');
    totalAmount.innerText=elementTotal;

    calculateSub();

 })
 
 document.getElementById('button-1').addEventListener('click',function(){
    const newCaseNumber=callingFunction2(false);
    
    const elementTotal= newCaseNumber*59;
    const totalAmount= document.getElementById('total-am');
     totalAmount.innerText=elementTotal;
     calculateSub();
   })
   