const priceElement = document.querySelector("#price");
const glazingSelection = document.querySelector("#glazing");
const packSizeSelection = document.querySelector("#pack-size");
const basePrice = 2.49;
let glazingPrice = 0;
let packPrice = 1;
let updatePrice;

let glazes = [
  {
    option: "Keep original",
    priceAdaption: 0,
  },
  {
    option: "Sugar milk",
    priceAdaption: 0,
  },
  {
    option: "Vanilla milk",
    priceAdaption: 0.5,
  },
  {
    option: "Double chocolate",
    priceAdaption: 1.5,
  },
];

let packSizes = [
  {
    option: "1",
    priceAdaption: 1,
  },
  {
    option: "3",
    priceAdaption: 3,
  },
  {
    option: "6",
    priceAdaption: 5,
  },
  {
    option: "12",
    priceAdaption: 10,
  },
];

for (let i = 0; i < glazes.length; i++) {
  var option = document.createElement("option");
  option.text = glazes[i].option;
  option.value = glazes[i].priceAdaption;
  glazingSelection.add(option);
}

for (let i = 0; i < packSizes.length; i++) {
  var option = document.createElement("option");
  option.text = packSizes[i].option;
  option.value = packSizes[i].priceAdaption;
  packSizeSelection.add(option);
}

function glazingChange(element) {
  // get value of selected glazing option
  glazingPrice = parseFloat(element.value);
  console.log(element.value);

  // add your code to do update the price ...
  updatePrice = (basePrice + glazingPrice) * packPrice;
  priceElement.innerHTML = updatePrice.toFixed(2); 
// External Source: Looked up ways to keep the digits to 2 https://stackoverflow.com/questions/14490496/how-to-multiply-in-javascript-problems-with-decimals

}

function packSizeChange(element) {
  // get value of selected glazing option
  packPrice = parseInt(element.value);

  // add your code to do update the price ...
  updatePrice = (basePrice + glazingPrice) * packPrice;
  priceElement.innerHTML = updatePrice.toFixed(2);
}

priceElement.innerHTML = basePrice;
