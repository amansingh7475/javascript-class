//  ------------------------------------------ Slice Methods -------------------------------------------------------

// let arr = [1,2,3,4,5]
// const arr2 = arr.slice(-5)
// console.log(arr2);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);
 
// const str = "The quick brown fox jumps over the lazy dog.";

// const quick = str.slice(4,9);
// console.log(quick);

// const endOfString = str.slice(31);
// console.log(endOfString);

// const fromEnd = str.slice(-4);
// console.log(fromEnd);

// ----------------------------------------- Splice Methods --------------------------------------------------------

// const months = ["january","february","march","april","may","june"]
// months.splice(6,0,"july","august")
// months.splice(0,0,"Months Names :-")

// const newOne = months.splice(2,1)

// Remove with starting with delete

// months.splice(0,2,"monday","tuesday")
// output: ["monday","tuesday","march","april","may","june"]

// Remove with End with delect.

// months.splice(4,2,"monday","tuesday")

// months.splice(-2,2)

// console.log(months);

//  NOTES : it return NOT new array

// ---------------------------------------- toSpliced Methods ----------------------------------------------

// const months = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
// const months2 = months.toSpliced(1, 0, "Feb");
// console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
// const months3 = months2.toSpliced(2, 2);
// console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
// const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
// console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
// console.log(months); // ["Jan", "Mar", "Apr", "May"]


//  NOTES : it return new array

// ---------------------------------------- Reversed Methods -------------------------------------------------

// const arr = ["one","two","three","four"]
// arr.reverse()
// console.log("Array :",arr);


// const numbers = [3, 2, 4, 1, 2];
// const reversed = numbers.reverse();
// console.log(reversed);

// reversed[3] = 5;
// console.log(numbers); // 5

// console.log([1, , 3].reverse()); // [3, empty, 1]
// console.log([1,"" ,"" , 3, 4].reverse()); // [4, 3, empty, 1]

//  NOTES : reverse method value ko return nhi karta hai. q ki isko agar hum 1 variable mein leke reverse kare aur jo main array 
//           hai oh dono same hi rahega jab ki dono alag chiz print kara raha ho toh dono alag alag print hona chahiye. 

// ---------------------------------------- toReversed() Methods --------------------------------------------

// const items = [1, 2, 3];
// console.log(items); 

// const reverseItem = items.toReversed()
// console.log(reverseItem); 

// console.log(items); 

// NOTES : toReversed method value ko return karta hai aur dusra variable main toReversed() used karenge use baad dono ko print
//          karayenge jo main wala hai items aur jo humne banaya reverseItem dono ka value alag alag hoga.

// ----------------------------------------- ConCat Method() ----------------------------------------

// let one = ["a","b","c"]
// const two = ["d","e","f"]
// const three = ["g","h","i"];
// const arr3 = one.concat(two,three,"j","k");
// console.log(arr3);

// const num1 = [[1]];
// const num2 = [2,[3]];
// const num3 = num1.concat(num2)
// console.log(num3);
// num1[0].push(4)
// console.log(num3);


// -------------------------------------- Copy withIn method() --------------------------------------------

// const array = ["a","b","c","d","e"]
// array.copyWithin(1,3,4)
// console.log(array);

// ---------------------------------------- entries method() --------------------------------------------

const array = ["a","b","c"]
const newOne = array.entries()

for (const i of newOne) {
    console.log(i);
    
}