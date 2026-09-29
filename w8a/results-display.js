// This module handles displaying and hiding the calculated carbon footprint results on the page.

// Get references to the HTML elements where we will display the results.

const resultsContainer = document.getElementById('results');

// Now, we use resultsContainer.querySelector() to get elements inside the resultsContainer.

const totalFootprintDisplay = resultsContainer.querySelector('#totalFootprint')
const householdFootprintDisplay = resultsContainer.querySelector('#householdFootprint')
const homeSizeFootprintDisplay = resultsContainer.querySelector('#homeSizeFootprint')
const foodDietFootprintDisplay = resultsContainer.querySelector('#foodDietFootprint')
const foodPackagingFootprintDisplay = resultsContainer.querySelector('#foodPackagingFootprint')

// Displays the calculated carbon footprint results in the results section.
// @param {Object} results - An object containing the calculated footprint values (points).
// Update the text content of each display element with the calculated points

// results-display.js

export const displayResults = function(results) {
    totalFootprintDisplay.textContent = `${results.totalFootprint.toFixed(0)} Points`;
    householdFootprintDisplay.textContent = `Household Size: ${results.householdFootprint.toFixed(0)} Points`;
    homeSizeFootprintDisplay.textContent = `House Size: ${results.homeSizeFootprint.toFixed(0)} Points`; //fixed error: homeSizeFootprint is correct property
    foodDietFootprintDisplay.textContent = `Food Diet: ${results.dietTypeFootprint.toFixed(0)} Points`;
    foodPackagingFootprintDisplay.textContent = `Food Packaging: ${results.foodPackagingFootprint.toFixed(0)} Points`;

    resultsContainer.style.display = 'block';
};

// Hides the entire results section.
export const hideResults = function() {
    resultsContainer.style.display = 'none';
};


