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

const handleDelete = function(id) {
    console.log("App.js: Requesting delete for order", id);
    const indexToDelete = orders.findIndex(function(order) {
        return order.id === id;
    });

    if (indexToDelete !== -1) {
        orders.splice(indexToDelete, 1);
        orderStorage.saveOrders(orders);
        orderList.renderOrders(orders, {
            onDelete: handleDelete,
            onEdit: handleEdit
        });
    }
};

const handleEdit = function(id) {
    console.log("App.js: Requesting edit for order", id);
    const orderToEdit = orders.find(function(order) {
        return order.id === id;
    });
 
    if(orderToEdit) {
        orderHandler.populateFormForEdit(orderToEdit);
    }
};

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
        //id: Date.now().toString(),
        ...orderData, //inclues hidden id in HTML
        ...calculatedPrice,
        //timestamp: new Date().toISOString()
    };

    if(orderData.id) {
        const index = orders.findIndex(function(order) {
            return order.id === orderData.id;
        });
        newOrder.timestamp = orders[index].timestamp;
        orders[index] = newOrder;
        //orders[index] = {...orderData, ...calculatedPrice};
    } else {
        newOrder.id = Date.now().toString(); //overwrites previous hidden id
        newOrder.timestamp = new Date().toISOString();
        orders.push(newOrder);
    }


    orderStorage.saveOrders(orders);

    orderList.renderOrders(orders, {
        onDelete: handleDelete,
        onEdit: handleEdit
    });
    
    console.log('orders array: ');
    console.log(orders);

    resultsDisplay.displayOrder(newOrder);

    document.getElementById('order-id').value = '';
    orderForm.reset();
};


const init = function () {
    console.log('App Initialized');
    const loadOrders = orderStorage.loadOrders();
    if(loadOrders.length > 0) {
        orders.push(...loadOrders);
        console.log('Orders loaded from localStorage');
        orderList.renderOrders(orders, {
            onDelete: handleDelete,
            onEdit: handleEdit
        });
    } else console.log('No orders found in localStorage');
    orderForm.addEventListener('submit', handleOrderSubmit);

    //anon callback function gets executed everytime clearButton is clicked
    clearButton.addEventListener('click', function() {
        orders.length = 0; //clear orders arr
        localStorage.removeItem(orderStorage.LOCAL_STORAGE_KEY); //clear localStorage arr
        orderList.renderOrders(orders, { //re-render empty table
            onDelete: handleDelete,
            onEdit: handleEdit
        }); 
    });
};

document.addEventListener('DOMContentLoaded', init);






