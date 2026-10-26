// console.log("1. Synchronous Start");

// setTimeout(() => {
//   console.log("2. Macrotask (Timeout)");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3. Microtask (Promise 1)");
// }).then(() => {
//   console.log("4. Microtask (Promise 2)");
// });

// queueMicrotask(() => {
//   console.log("5. Microtask (queueMicrotask)");
// });

// console.log("6. Synchronous End");

// const user = {
//   name: "Aman",

//   greet() {
//     const arrow = () => {
//       console.log(this.name);
//     };

//     arrow();
//   }
// };

// user.greet();



// Call:- 

// const user = {
//     name:"Aman Singh"
// }


// function greet(city,country) {
//     console.log(`My Self ${this.name} from ${city}, ${country}`);
    
// }

// greet.call(user,"Surat","India");


// Apply

// const user = {
//     name:"Aman Singh"
// }


// function greet(city,country) {
//     console.log(`My Self ${this.name} from ${city}, ${country}`);
    
// }

// greet.apply(user,["Surat","India"]);



// bind

// const user = {
//     name:"Aman Singh"
// }


// function greet(city,country) {
//     console.log(`My Self ${this.name} from ${city}, ${country}`);
    
// }

// const arr =  greet.bind(
//     user,
//     "Surat",
//     "India"
// )

// arr();


// What is prototypal inheritance?

// let papa = {
//     home:true,
//     wallet: "$14645"
// }

// let beta = {
//     mojMasti :true
// }

// beta.__proto__ = papa;

// console.log(beta.home);
// console.log(beta.wallet);


// let king = {
//     properties:"Mehal",
//     khila:4
// }

// let son = {
//     mehal:10
// }

// son.__proto__ = king;

// console.log(son);
// console.log(son.__proto__);
// console.log(son.khila);


// Shallow Copy

// let original = {
//     name:"Aman Singh",
//     address:{city:"Surat"}
// }

// let shallow = {...original}

// original.address.city = "Dindoli"
// console.log(shallow);

// console.log(shallow.address.city);



// let num;

// let str = null;

// console.log(str === num)


// const arr = [5, 2, 9, 1, 7, 3];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

// console.log(arr);


// let arr = [4,1,9,5,2,8,3,10,7,6];

//     for(let i=0;i< arr.length; i++){
//         for(let j= i+1; j< arr.length; j++){
//             if (arr[i] > arr[j]) {
//                 arr[i] = arr[i] + arr[j];
//                 arr[j] = arr[i] - arr[j];
//                 arr[i] = arr[i] - arr[j];
//             }
//         }
//     }

// console.log(arr);


// let arr = [4,1,9,5,2,8,3,10,7,6];


// function sum(arr) {
//     for(let i=0;i< arr.length; i++){
//         for(let j= i+1; j< arr.length; j++){
//             if (arr[i] > arr[j]) {
//                 arr[i] = arr[i] + arr[j];
//                 arr[j] = arr[i] - arr[j];
//                 arr[i] = arr[i] - arr[j];
//             }
//         }
//     }
//     return arr;
// }

    

// console.log(arr);

// console.log(sum(arr));



// let str = "Aman Singh";

// let sum = str.split("").reverse().join("");

// console.log(sum);



// let str =  "Aman Singh";

// function reversed(str){
//     let reversed = " ";

//     for(let i=str.length - 1; i>=0; i--){
//         reversed  += str[i];
//     }
//     return reversed;
// }


// console.log(reversed("Hello"));


// function findMissingNumber(arr,n) {
//     let total = (n*(n+1))/2;
//     let sum = 0;

//     for (let i=0; i<arr.length; i++) {
//         sum += arr[i];

//     }
//     return total - sum;
// }


// console.log(findMissingNumber([1,2,4,5],5));
