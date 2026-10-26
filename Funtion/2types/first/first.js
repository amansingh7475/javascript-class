//There are four types of functions in JavaScript
// 1. without return type without argument
// 2. without return type with argument
// 3. with return type without argument
// 4. with return type with argument

// 2. without return type with argument

// function add(a,b) {
//     console.log("Addition =",a+b);
    
// }
 //add("aman","singh")

// let a = parseInt(prompt("Enter the first number:-"))
// let b = parseInt(prompt("Enter the second number:-"))

// add(a,b)


//find reverse number:-
 
// function reverse(){
//     let x = parseInt(prompt("Enter the number"));
//     let rem=0;
//     while (x!=0) {
//         let rev = x%10;
//         rem = (rem*10)+rev;
//         x = Math.floor(x/10);
//     }console.log(rem)
    
// }
// reverse()


//3. with return type without argument


// function greet() {
    //return "how r u ?"
  // return 456;

// }

// let x = greet();
// console.log(x);


// 4. with return type with argument

// function mul(x,y) {
//     return "multiplcation =" + x*y 
// }
// let x = mul(90,4);
// console.log(x);


// prime number

function inPrime(num) {
    for(let i=2;i<=num;i++)
    {
        if (num%i==0) {
             return false;
        }
    }
    return true 
}
let x = inPrime (10) == true ? "Prime number" : "Not Prime number"
console.log(x== true ? "prime number" : "not prime number");
