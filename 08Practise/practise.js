// let str = "aman"
// let isPalindrome  = str === str.split('').reverse().join('')
// console.log(isPalindrome);

// let arr = [12,20,35,45,90];
// let arr2 = Math.max(...arr)
// let arr3 = Math.min(...arr)
// console.log(arr2);
// console.log(arr3);


//---------------------------------------------------------- check remove dublicate Array number.
// let arr = [1,2,3,4,1,2,3];
// let arr2 = [...new Set(arr)]
// console.log(arr2);


//---------------------------------------------------------- check remove dublicate Object number.


// let myObj = [
//     {
//         name:"Aman",
//         age:23,
//         email:"amansingh789@gmail.com"
//     },
//     {
//         name:"avinash",
//         age:22,
//         email:"avinashsingh789@gmail.com"
//     },
//     {
//         name:"Aman",
//         age:23,
//         email:"amansingh789@gmail.com"
//     },
//      {
//         name:"Aman",
//         age:23,
//         email:"amansingh789@gmail.com"
//     },
// ]

// let check = [...new Set(myObj.map(obj => JSON.stringify(obj)))].map(str => JSON.parse(str))
// console.log(check);

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let even = arr.filter(n=>n%2===0);
// let odd = arr.filter(n=>n%2!==0)
// console.log(even,odd);

// ------------------Reduce() method-----------

// let red = [10,20,30]
// let newRed = red.reduce((a,b)=>a+b,0);
// console.log(newRed);


// --------------------swap----------------------

// let a = 10;
// let b = 20;
// [a , b] = [b , a]
// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b);

// const product = (n)=>{
//     let fact = 1;
//     for (let i=1;i<=n;i++){
//          fact *= i;
//          console.log(fact);
         
//     }
//     return fact;
// }
// console.log(product(5));



// let arr1 = [1, 2, 3, 4];

// map
// console.log(arr1.map(n => n * 2));

// filter
// console.log(arr1.filter(n => n > 2));

// reduce
// console.log(arr1.reduce((a, b) => a + b, 0));

//  ----------------------------------------------------Reverse Number without using reverse().----------------------------------

// let str = " aman singh"
// let reverse = ""
// for (let i=str.length-1 ;i>=0;i--) {
//     reverse += str[i];
//     console.log(str[i]);
    
    
// }
// console.log(reverse);

// let str = "aman singh"
// let reverse = ""
// let i=str.length -1
// while(i>=0){
//     reverse +=str[i];
//     console.log(str[i]);
//     i--;
    
// }
// console.log(reverse);


// let str = "aman"
// let reverse = ""
// for (const i of str) {
//     reverse = i+reverse;
// }
// console.log(reverse);
// if (reverse === str) {
//     console.log("Is Palindrome");
    
// }else{
//     console.log("Is not Palindrome");
    
// }

// --------------------------------------------

// const productNew =(n)=>{
//     let fact = 1;
//     for (let i=1;i<=n;i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log(productNew(6));

// let str = 7;
// let sum = 1;
// for (let i=1;i<=str;i++) {
//     sum *=i
    
// }
// console.log(sum);


// const fact = (n)=>{
//     if(n==0 || n==1){
//         return 1;
//     }
//     return n * fact(n-1)
// }
// console.log(fact(8));

// let n = 8,a,b,c;
// a=0;b=1;c=0;
// for (let i=0;i<=n;i++) {
//     console.log(c);
//     a=b;
//     b=c;
//     c=a+b;
// }

// let arr2 = "123456865"
// console.log(arr2[3]);
// console.log(arr2.charAt(3));
// let arr3 =arr2.slice(2,6)
// console.log(arr3);


// let str = "JavaScript";
// console.log(str[0]);

// console.log(str.charAt(0)); // J
// console.log(str.charAt(4)); // S


// let str = "aman singh"
// let reversed = ""
// for (const i of str) {
//     reversed = i+reversed;
//     console.log(reversed);
    
// }
// console.log(reversed);






// /------------------------------------------------- Practice ----------------------------------------------------------------


// let obj = [
//     {
//         name:'Aman Singh',
//         age:23
//     },
//     {
//         name:'Avinash Ojha',
//         age:24
//     },
//     {
//         name:'Abhinash Saho',
//         age:23
//     },
//     {
//         name:'Aman Singh',
//         age:23
//     }
// ]
   
// let obj2 = [...new Set(obj.map(e => JSON.stringify(e)))].map(str => JSON.parse(str))

// console.log(obj2);


// let arr = [1,2,3,4,1,2,3,4,5];
// let count = [...new Set(arr.map(e => e))]
// console.log(count);

// function fact(num) {
//     let fact = 1;
//     for(let i=1;i<=num;i++){
//         fact *= i;
//     }
//     return fact;
// }

// console.log(fact(7));


// let str = 'Aman'
// let sum = str.split("").reverse().join("");
// console.log(sum);

// let reversed = "";
// for(let i=str.length - 1; i>=0; i--){
//     reversed += str[i];
// }
// console.log(reversed);

// let str = 'aman singh';
// let reversed = '';
// for (const i of str) {
//     reversed = i+reversed;
// }

// console.log(reversed);



// const arr = [12,5,661,16,499,56,3];

// const sum = arr.reduce((pre,pro)=>{
//     return pre > pro ? pre : pro;
// })

// console.log(sum);
