
function getTheInputCaseValue(isIncrease){
    const caseInput = document.getElementById('case-input');
    const caseInputValueString = caseInput.value; 
    const caseInputValue = parseInt(caseInputValueString);
    let caseInputValueNumber;
    if(isIncrease === true){
        caseInputValueNumber = caseInputValue + 1;
    }
    else{
        caseInputValueNumber = caseInputValue - 1;
    }
    caseInput.value = caseInputValueNumber;
    return caseInputValueNumber;
}

function getTheCasePrice(caseInputValue){
    const casePrice = caseInputValue * 59;
    const casePriceElement = document.getElementById('case-price');
    casePriceElement.innerText = casePrice;
}


document.getElementById('case-btn-plus').addEventListener('click', function(){
    const caseInputValue = getTheInputCaseValue(true);
    getTheCasePrice(caseInputValue);
    getTheSubTotal();
})

document.getElementById('case-btn-minus').addEventListener('click', function(){
    const caseInputValue = getTheInputCaseValue(false);
    getTheCasePrice(caseInputValue);
    getTheSubTotal();
})