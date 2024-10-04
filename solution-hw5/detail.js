//Update page content based on URL parameter

// 1. get the query string from the href URL
// known as search parameters
// begins with a question mark, e.g. ?roll=apple
const queryString = window.location.search;

// 2. use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

// 3. access the parameter we want using the "get" method
const rollType = params.get('roll');

// Update the header text
const rollTitle = document.querySelector('#detail-title');
rollTitle.innerText = `${rollType} Cinnamon Roll`

// Update the image
const rollImage = document.querySelector('#detail-image');
rollImage.src = `../assets/products/${rolls[rollType].imageFile}`;

//Update the base price
const priceElement = document.querySelector("#price");
priceElement.innerText = `${rolls[rollType].basePrice}`
const basePrice = rolls[rollType].basePrice;