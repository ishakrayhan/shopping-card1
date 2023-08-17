function callingFunction(isIncrease){
   const caseNumberField = document.getElementById('pluse-inputField');

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


document.getElementById('button-1+').addEventListener('click',function(){
  const newCaseNumber= callingFunction(true);
  const elementTotal= newCaseNumber*1219;
  const totalAmount= document.getElementById('case-1219');
   totalAmount.innerText=elementTotal;

   calculateSub();
})

document.getElementById('button-1-').addEventListener('click',function(){
   const newCaseNumber=callingFunction(false);
     const elementTotal= newCaseNumber*1219;
  const totalAmount= document.getElementById('case-1219');
   totalAmount.innerText=elementTotal;
   
   calculateSub();
  })
  