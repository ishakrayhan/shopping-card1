function totalAmu (elementId){
    const totalAmu=document.getElementById(elementId)
    const totalAmuString=totalAmu.innerText;
    const totalAmuValue=parseFloat(totalAmuString);
    return totalAmuValue;
  }
 function setTextElement(elementId, value){

    const subTotalElement= document.getElementById(elementId);
    subTotalElement.innerText=value;
 }


  function calculateSub(){
    const phoneTotalId=totalAmu('total-am');
    const caseTotalId=totalAmu('case-1219');
    const subTotal= phoneTotalId+caseTotalId;
     setTextElement('sub-total', subTotal);

     const texString=(subTotal*0.1).toFixed(2);
     const tex=parseFloat(texString);
     setTextElement('tax',tex);

     const finalText= tex+subTotal;
     setTextElement('final-total',finalText);
  }