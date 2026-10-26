const Num = [1,2,3,4,]

const newNum =  Num.reduce(function(acc,currentvalue) {
    // console.log(`acc : ${acc} and currentValue : ${currentvalue}`);
    return acc + currentvalue
}, 0) 

// console.log(newNum);



const newNums = Num.reduce((acc,currval) =>{
    // console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
},0)

// console.log(newNums);


// ----------------------------------- ex ------------------------------------

const shoppingCart = [
    {
        itemName : "Js Course",
        price : 2999,
    },
    {
        itemName : "React Course",
        price : 4999,
    },
    {
        itemName : "Data Science Course",
        price : 12999,
    },
    {
        itemName : "Html Course",
        price : 1999,
    },
]

const Total =  shoppingCart.reduce((acc,curr) =>{
    console.log(`acc : ${acc} and curr : ${curr}`);
    return acc + curr.price;
},0)

console.log(Total);
