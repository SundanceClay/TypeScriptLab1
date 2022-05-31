"use strict";
let mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
function findNameOfTallestMountain(mountainArray) {
    let tallest = 0;
    let tallMountain = '';
    for (let i = 0; i < mountainArray.length; i++) {
        if (mountainArray[i].height > tallest) {
            tallest = mountainArray[i].height;
            tallMountain = mountainArray[i].name;
        }
    }
    return tallMountain;
}
console.log(findNameOfTallestMountain(mountains));
let product = [
    { name: "camshaft", price: 10.05 },
    { name: "sender", price: 12.49 },
    { name: "mirror", price: 1.00 },
];
function calcAverageProductPrice(myProductArray) {
    let avgPrice = 0;
    for (let i = 0; i < myProductArray.length; i++)
        avgPrice += myProductArray[i].price;
    return avgPrice / myProductArray.length;
}
let avgPriceStored = calcAverageProductPrice(product);
console.log(avgPriceStored);
let inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 },
];
function calcInventoryValue(myInventoryArray) {
    let totalValueAll = 0;
    for (let i = 0; i < myInventoryArray.length; i++) {
        totalValueAll += (myInventoryArray[i].product.price * myInventoryArray[i].quantity);
    }
    return totalValueAll;
}
let totalValueAllInventoryItems = calcInventoryValue(inventory);
console.log(totalValueAllInventoryItems);
