const tableBody = document.getElementById('order-table-body');


// @param {object} orders
export const renderOrders = function(orders) {
    // reset tableBody row
    tableBody.innerHTML = ''

    for(const order of orders) {
        const rowElement = document.createElement('tr');
        
        rowElement.innerHTML = `
            <td>${new Date(order.timestamp).toLocaleDateString('en-US', {
                year: 'numeric', month: 'numeric', day: 'numeric'
            })}</td>
            <td>${order.qty}</td>
            <td>${order.size}</td>
            <td>${order.totalPrice}</td>
            <td>
                <button class="edit-btn" data-id="${order.id}">Edit</button>
                <button class="delete-btn" data-id="${order.id}">Delete</button>
            </td>
        `;

        tableBody.appendChild(rowElement);
    }


};