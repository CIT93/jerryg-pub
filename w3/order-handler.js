
//console.log('Module loaded');

const quantityInput = document.getElementById('qty');
const sizeTypeRadios = document.querySelectorAll('input[name="size"]');
const isGiftWrap = document.getElementById('gift-wrap');

const getSelectedRadioValue = function (radioButtons) {
    for (const radio of radioButtons) {
        if (radio.checked) {
            //console.log(`${radio.value} has the attribute of ${radio.checked}`)
            return radio.value
        }
    }
};

export const getOrderInputs = function () {
    
    return {
        qty: parseInt(quantityInput.value) || 1,
        size: getSelectedRadioValue(sizeTypeRadios),
        giftWrap: isGiftWrap.checked
    };

};

    // TEMPORARY TEST:
console.log(getOrderInputs());
