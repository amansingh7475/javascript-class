// const min = 1000;
// let max = 10000;

// console.log(Math.round(Math.random() * (max-min+1) + min));

// console.log(Math.round(Math.random() * 10000 *10000).toString(16));


// const str = "Hello"

// const reversed = str.split("").reverse().join("");

// console.log(reversed);


// const str = "AbbAA"

// let reversed = ""

// for(let i = str.length -1 ; i >= 0 ; i--){
//     reversed += str[i];
// }

// console.log(reversed);

// if (str === reversed) {
//     console.log("This Is Palindrome");
    
// }else{
//     console.log("This Is Not Palindrome");
// }


// let str = "hello"

// let reversed = ""

// for(let i of str){
//     reversed = i + reversed
//     console.log(i);
    
// }
// console.log(reversed);


// let arr = [12,5,64,226,4642,22,3];

// let sum = arr.reduce((pre,pro)=>{
//     return pre > pro ? pre : pro
// })

// console.log(sum);

// const arr2 = Math.max(...arr);
// const arr3 = Math.min(...arr)
// console.log(arr2);
// console.log(arr3);



// let arr = [1,2,3,4,3,2,1]

// let sum = [...new Set(arr)]

// console.log(sum);


// let sum = arr.reduce((a,b) => a+b, 0)
// console.log(sum);


// let a = 5;
// let b = 10;
// console.log("Print A Value = ",a);
// console.log("Print B Value = ",b);
// a = a+b;
// b = a-b;
// a = a-b;
// console.log("Print A Value = ",a);
// console.log("Print B Value = ",b);


// let arr = 5;
// let reversed = "";

// for(let i=1;i<=arr;i++){
//     for(let j=1;j<=i;j++){
//         reversed += "*";
//     }
//     reversed += "\n"
// }

// console.log(reversed);


// let arr = [0,12,4,2,0,16];

// let j = 0;

// for(let i = 0; i< arr.length ; i++){
//     if (arr[i] !== 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;

//         j++;
//     }
    
// }
// console.log(arr);


