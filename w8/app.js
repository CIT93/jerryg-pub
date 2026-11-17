import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as resultsDisplay from "./results-display.js";
import * as orderStorage from "./order-storage.js";
import * as orderList from "./order-list.js";

console.log('Hello from app.js! Your JavaScript is connected and running!');

const orderForm = document.getElementById('order-form');
//const orderSummary = document.getElementById('order-summary');


//Button element we will use to clear both in-memory and localStorage arr; used in init()
const clearButton = document.getElementById('clear-btn');


const orders = [];

const handleOrderSubmit = function (event) {
    event.preventDefault();
    const orderData = orderHandler.getOrderInputs();
    // console.log(`Order Inputs - Object Literal:`)
    // console.log(`key of qty value of ${orderData.qty}`);
    // console.log(`key of size value of ${orderData.size}`);
    // console.log(`key of giftWrap value of ${orderData.giftWrap}`);
    //console.log(orderData);
    let message = `Ordered ${orderData.qty} ${orderData.size} T-Shirts`
    //const isGiftWrap = orderForm.querySelector('#gift-wrap').checked;
    if (orderData.giftWrap) message += ' - gift wrapped';
    else message = `Ordered ${orderData.qty} ${orderData.size} T-Shirts`
    //orderSummary.textContent = message;
    const calculatedPrice = priceCalculator.calculateTotal(orderData);
    //output our object literal with the price
    //console.log(`calculatedPrice obj literal: ${calculatedPrice}`);
    const newOrder = {
        ...orderData,
        ...calculatedPrice,
        timestamp: new Date().toISOString()
    };
    orders.push(newOrder);
    orderStorage.saveOrders(orders);

    orderList.renderOrders(orders)
    
    console.log('orders array: ');
    console.log(orders);

    resultsDisplay.displayOrder(newOrder);
};


const init = function () {
    console.log('App Initialized');
    const loadOrders = orderStorage.loadOrders();
    if(loadOrders.length > 0) {
        orders.push(...loadOrders);
        console.log('Orders loaded from localStorage');
        orderList.renderOrders(orders);
    } else console.log('No orders found in localStorage');
    orderForm.addEventListener('submit', handleOrderSubmit);

    //anon callback function gets executed everytime clearButton is clicked
    clearButton.addEventListener('click', function() {
        orders.length = 0; //clear orders arr
        localStorage.removeItem(orderStorage.LOCAL_STORAGE_KEY); //clear localStorage arr
        orderList.renderOrders(orders); //re-render empty table
    });
};

document.addEventListener('DOMContentLoaded', init);






