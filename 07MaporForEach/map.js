// --------------------------------------- forEach --------------------------------------------------------

const arr = [45,56,21];
const b = arr.forEach((e,index,array)=>{
    // console.log(e,index,array);
    // console.log(e);
    
    
})
// console.log(b);
// forEach return nhi karta hai
// forEach mein hum return kar ke naya array nhi bana sakte hai


// ------------------------------------- Map ------------------------------------------------------------------

const newOne = [49,62,20];

const a = newOne.map((e,index,array)=>{
            // console.log(e,index,array);
            // return e + 1;
            // return e + index;
    
    })

// console.log(a);
// Map function return karta hai uss per hum kuch bhi return karwa sakte hai 
// aur return kaise karna hota hai new variable mein leke dekhenge. return hota hai ki nhi.


// -------------------------------------- Filter ---------------------------------------------------------------------

const arr2 = [50,12,65,41,10,45,25,16];

const c = arr2.filter((e)=>{
    return e>=25;
})
// console.log(c);

// Filter bhi return karta hai Map jaisa lekin Filter ka used hum karte hai Condition dalne ke liye.



// ------------------------------------------ Reduce ------------------------------------------------------------------------

const arr3 = [1,2,3,4,5,3];

const d =  arr3.reduce((e1,e2)=>{
    return e1 + e2;

})
// console.log(d);



// ------------------------------------------------------ Array.From----------------------------------------------------------

let name = "Aman Singh Rajput"
// const new1 =  Array.from(name);
// console.log(new1);

// string se array bana deta hai Array.From iska used hum HTML collection mein karte hai Dom se jab hum manuplute karte hai .


// ------------------------------------------------------- For  of -----------------------------------------------------------

const numOne = [1,2,3,4,5,6,7,8,9,10]
for (const i of numOne) {
    // console.log(i);
    
}


// -----------------------------------------------------------For in-----------------------------------------
const num = [1,2,3,4,5];
for (const e in num) {
//    console.log(e,num[e]);
    
}
// iska index number batata hai




const arrr5 = [1,2,3,4,5]

const arr6 = arrr5.forEach((e,index,array)=>{
//    console.log(e,index,array);
})


const arr7 = [1,3,5,7,9];

const arrr7 = arr7.reduce((e,f)=>{
    return e > f ? e : f;
})

console.log(arrr7);



const num1 = [4,8,9,46,1,19,5,86];

const sum = num1.reduce((small,large)=>{
    return small > large ? small : large;
})
// console.log(sum);

const cart = [
    {name: "Laptop", price: 56000},
    {name: "Mobile", price: 15500},
    {name: "Smart", price: 26850}
]

const total = cart.reduce((sum,item)=>{
    return sum + item.price;
},0)

// console.log(total);



const str = [1,2,3,4,5,6,7,8];

for (const element of str) {
    // console.log(str);
    
}
// for of ko use karte hai print karwane ke liye 

const str1 = [1,2,3,4,5,6,7,8];

for (const element in str) {
    // console.log(str);
    
}

// for in ka use karte hai index print kar wane ke liye 

var a1 = 10;
// console.log(a1);

var a1 = 20;
// console.log(a1);

a1 = 30;
// console.log(a1);


let a2 = 10;
// console.log(a2);

a2 = 20
// console.log(a2);

const a3 = 10
// console.log(a3);

// a3 = 20
// console.log(a3);


// const a4;
// console.log(a4);
// a4 = 10;
