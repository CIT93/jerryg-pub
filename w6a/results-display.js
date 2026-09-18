

const resultsContainer = document.getElementById('order-summary');

const displayTotal = resultsContainer.querySelector('#display-total');
const displayQty = resultsContainer.querySelector('#display-qty');
const displaySize = resultsContainer.querySelector('#display-size');
const displayGift = resultsContainer.querySelector('#display-gift');

export const displayResults = function(results) {
    //console.log(`inside the displayResults function`);
    displayTotal.textContent = results.totalPrice.toFixed(0);
    displayQty.textContent = results.qty.toFixed(0);
    displaySize.textContent = results.size;
    let giftText;
    if(results.giftWrap) giftText = 'Yes';
    else giftText = 'No';
    displayGift.textContent = giftText;

    // Make the entire results section visible
    resultsContainer.style.display = 'block';
};