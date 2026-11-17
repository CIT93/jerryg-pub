const tableBody = document.getElementById('order-table-body');

export const renderOrders = function(orders) {
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
        `;

        tableBody.appendChild(rowElement);
    }


};