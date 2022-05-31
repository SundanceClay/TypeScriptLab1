// TALLEST MOUNTAIN
interface Mountain{
    name:string;
    height:number;
}

let mountains:Array<Mountain> = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];

function findNameOfTallestMountain(mountainArray:Array<Mountain>):string
{
    let tallest:number = 0;
    let tallMountain:string ='';
    for(let i=0; i<mountainArray.length; i++){
        if(mountainArray[i].height > tallest){
            tallest = mountainArray[i].height;
            tallMountain = mountainArray[i].name;
        }
    }
    return tallMountain;
}

console.log(findNameOfTallestMountain(mountains));

//  PRODUCTS
 interface Product{
    name:string;
    price:number;
}

let product:Array<Product> = [
    { name: "camshaft", price: 10.05 },
    { name: "sender", price: 12.49 },
    { name: "mirror", price: 1.00 },
];

function calcAverageProductPrice(myProductArray:Array<Product>):number
{
    let avgPrice:number = 0;

    for(let i=0; i<myProductArray.length; i++)
        avgPrice += myProductArray[i].price;

    return avgPrice / myProductArray.length;
}
let avgPriceStored = calcAverageProductPrice(product);
console.log(avgPriceStored);

// INVENTORY
interface InventoryItem{
    product:Product;
    quantity:number;
}

let inventory:Array<InventoryItem> = [
    { product:{name:"motor", price: 10.00}, quantity: 10 }, 
    { product:{name:"sensor", price: 12.50}, quantity: 4 }, 
    { product:{name:"LED", price: 1.00}, quantity: 20 }, 
 
];

function calcInventoryValue(myInventoryArray:Array<InventoryItem>):number
{
    let totalValueAll:number = 0;

    for(let i=0; i<myInventoryArray.length; i++)
    {
    totalValueAll += (myInventoryArray[i].product.price * myInventoryArray[i].quantity);
    }
    return totalValueAll;
}

let totalValueAllInventoryItems = calcInventoryValue(inventory);
console.log(totalValueAllInventoryItems);
