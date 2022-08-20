
function getTheInputValue(isIncrease){
    const phoneInput = document.getElementById('phone-input');
    const phoneInputValueString = phoneInput.value; 
    const phoneInputValue = parseInt(phoneInputValueString);
    let phoneInputValueNumber;
    if(isIncrease === true){
        phoneInputValueNumber = phoneInputValue + 1;
    }
    else{
        phoneInputValueNumber = phoneInputValue - 1;
    }
    phoneInput.value = phoneInputValueNumber;
    return phoneInputValueNumber;
}

function getThePhonePrice(phoneInputValue){
    const phonePrice = phoneInputValue * 1219;
    const phonePriceElement = document.getElementById('phone-price');
    phonePriceElement.innerText = phonePrice;
}

function getElementValueById(elementId){
    const productElement = document.getElementById(elementId);
    const productElementValueString = productElement.innerText;
    const productElementValue = parseInt(productElementValueString);
    return productElementValue;
}

function setElementValueById(elementId, value){
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;
}

function getTheSubTotal(){
    // sub total
    const phonePriceElement = getElementValueById('phone-price');
    const casePriceElement = getElementValueById('case-price');
    const subTotalPrice = phonePriceElement + casePriceElement;
    setElementValueById ('sub-total', subTotalPrice);

    // tax
    const taxAmountString = (subTotalPrice * 0.05).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setElementValueById('tax-total', taxAmount);

    // final total
    const finalTotal = subTotalPrice + taxAmount;
    setElementValueById('final-total', finalTotal); 
}

document.getElementById('phone-btn-plus').addEventListener('click', function(){
    const phoneInputValue = getTheInputValue(true);
    getThePhonePrice(phoneInputValue);
    getTheSubTotal();
})

document.getElementById('phone-btn-minus').addEventListener('click', function(){
    const phoneInputValue = getTheInputValue(false);
    getThePhonePrice(phoneInputValue);
    getTheSubTotal();
})