// Reverse Number or Reverse Word and Palindrome Word
let str = "1362"
let reversed = str.split("").reverse().join("")
// console.log(reversed);

if (str === reversed) {
    // console.log("This is Palindrome");
}else{
    // console.log("This is Not Palindrome");
}

// Maximum Number find
let arr = [10,2,0,30,4,0,50,60,102]
let Maximum = Math.max(...arr)
console.log(Maximum);

// MAP VS ForEach

// let nums = [1,2,3]

// nums.forEach((e)=> console.log(e * 2))

// const newNums = nums.map((e) => console.log(e * 2))

// Duplicate values of array

// let arr1 = [1,1,2,2,3,4,5,5]

// let unique = [...new Set(arr1)]
// console.log(unique);


// function outer() {
//   let x = 10;
//   function inner() {
//     console.log(x);
//   }
//   return inner;
// }

// let fun = outer();
// fun();


let arr2 = [3,4,5,6,78,9,985,]
let minimum = Math.min(...arr2)
console.log(minimum);
