//  ForEach return nhi karta hai.
// forEach or Filter dono apne ander CallBack hi late hai.
// Lekin forEach kuch bhi return nhi karta hai aur Filter return karta hai.

//  jab bhi hum Filter use karte hai uske ander hume callback function milega jiske ander har value ko Each access kiya jayega.
// Lekin uske baad hume dine padti hai Condition jo value condition ko setisfify karegi or value true hogi o value ko return kar dega.


const newArray = [1,2,3,4,5,6,7,8,9,10]  

const MyArray =  newArray.forEach((e)=>{
    // console.log(e);
    
})
// console.log(MyArray);

// in Short baat yah hai ki forEach return nhi karta hai.

// ----------------------------------- Filter -------------------------------------------------

// filter ke ander phele hum callback karenge uske baad hum condition dalenge.
const myNum = [1,2,3,4,5,6,7,8,9,10]

// first tarika 
const NewNum = myNum.filter((e)=> e>6)
console.log(NewNum);

// second tarika 
const newNum =  myNum.filter( (e)=>{
   return e > 4
    
})

console.log(newNum);

