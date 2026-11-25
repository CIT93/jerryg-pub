//console.log('Module loaded');

const quantityInput = document.getElementById('qty');
const sizeTypeRadios = document.querySelectorAll('input[name="size"]');
const isGiftWrap = document.getElementById('gift-wrap');

const orderIdInput = document.getElementById('order-id');

const getSelectedRadioValue = function (radioButtons) {
    for (const radio of radioButtons) {
        if (radio.checked) {
            //console.log(`${radio.value} has the attribute of ${radio.checked}`)
            return radio.value
        }
    }
};

const setSelectedRadioValue = function(radioButtons, valueToSet) {
    for(const radio of radioButtons) {
        if(radio.value === valueToSet) {
            radio.checked = true;
            break;
        } 
    }
};

export const populateFormForEdit = function(order) {
    orderIdInput.value = order.id;
    quantityInput.value = order.qty;
    setSelectedRadioValue(sizeTypeRadios, order.size);
    isGiftWrap.checked = order.giftWrap;
};

export const getOrderInputs = function () {

    return {
        id: orderIdInput.value || null,
        qty: parseInt(quantityInput.value) || 1,
        size: getSelectedRadioValue(sizeTypeRadios),
        giftWrap: isGiftWrap.checked
    };

};

// TEMPORARY TEST:
//console.log(getOrderInputs());
