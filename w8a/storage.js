// This module handles all interactions with localStorage for our carbon footprint entries.

// A unique key to identify our data in localStorage.
// SCREAMING_SNAKE_CASE - This naming convention is typically reserved for global constants whose value should never change throughout the lifetime of the application.

const LOCAL_STORAGE_KEY = 'carbonFootprintEntries'
// Let's learn about localStorage
// localStorage.setItem(LOCAL_STORAGE_KEY, "Rio");  
// localStorage.setItem(LOCAL_STORAGE_KEY, 12);  
// localStorage.setItem(LOCAL_STORAGE_KEY, [1, 2, 3]);  
// localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([1, 2, 3]));  

// const localStorageValue = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
// console.log(`Local Storage value: ${typeof localStorageValue} ${localStorageValue}`);

// Saves the given array of entries to localStorage.
// This is the primary function for persisting the current state of our entries.
// @param {Array} entries - The array of carbon footprint entry objects to save.

// storage.js

export const saveEntries = function(entries) {
    
    // localStorage can only store strings. We must convert our JavaScript array of objects
    // into a JSON string using JSON.stringify() before saving.
    // Try Catch Block - Error Checking
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY JSON.stringify(entries));
        console.log('Data saved to localStorage Successfully!');
    } catch (error) {
        console.error(`Error saving data to localStorage: ${error} `)
    }
};

// Generates a simple, unique ID for a new entry based on the current timestamp.
// This function is now part of the storage module as it's related to data management.
// @returns {string} A unique ID string.
export const generateUniqueId = function (){
    return Date.now().toString();
};

// Loads all carbon footprint entries from localStorage.
// @returns {Array} An array of carbon footprint entry objects. Returns an empty array if no data is found or if parsing fails.
export const loadEntries = function() {
    try {
        const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (dataString) {
            // If data exists, parse the JSON string back into a JavaScript array/object.
            return JSON.parse(dataString);
        }
        // If no data is found in localStorage, return an empty array.     
        return [];
        
    } catch (e) {
        // In case of corrupted data, it's good practice to clear it to prevent continuous errors.
        console.error(`Error loading entries from localStorage: ${e}`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
};

// Clear all data from localStorage for our app.
// This function removes the specific key used by our app from localStorage.
export const clearAllEntries = function() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    console.log('All entries cleared from localStorage');
};