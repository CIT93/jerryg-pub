import * as orderHandler from "./order-handler.js";

console.log('Hello from app.js! Your JavaScript is connected and running!');

const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');

const handleOrderSubmit = function (event) {
    event.preventDefault();
    const orderData = orderHandler.getOrderInputs();
    console.log(`Order Inputs - Object Literal:`)
    console.log(`key of qty value of ${orderData.qty}`);
    console.log(`key of size value of ${orderData.size}`);
    console.log(`key of giftWrap value of ${orderData.giftWrap}`);
    console.log(orderData);
    let message = `Ordered ${orderData.qty} ${orderData.size} T-Shirts`
    //const isGiftWrap = orderForm.querySelector('#gift-wrap').checked;
    if (orderData.giftWrap) message += ' - gift wrapped';
    else message = `Ordered ${orderData.qty} ${orderData.size} T-Shirts`
    orderSummary.textContent = message;
};


const init = function () {
    console.log('App Initialized');
    orderForm.addEventListener('submit', handleOrderSubmit);
};

document.addEventListener('DOMContentLoaded', init);







