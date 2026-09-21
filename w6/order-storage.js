const LOCAL_STORAGE_KEY = 'tshirt_orders_data';

export const saveOrders = function (orders) {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
        console.log('Data saved to localStorage Successfully!');
    }
    catch (error) {
        console.error(`Error saving data to localStorage: ${error} `);
    }
};


export const loadOrders = function () {
    try {
        //here i initially put the whole expression into the if(), but using var is more concise
        const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (dataString) return JSON.parse(dataString);
        return [];
    } catch (e) {
        console.error(`Error loading entries from localStorage: ${e}`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
};