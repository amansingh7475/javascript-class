// let a=0, b=1;
// for (let i=0;i<=10;i++) {
//     console.log(a);
//     let c = a+b;
//     a = b;
//     b = c;
    
// }

// let str = "Aman"
// let reversed = str.split("").reverse().join("")
// console.log(reversed);
// if (str == reversed) {
//     console.log("Yes This Is Palindrome");
// } else {
//     console.log("No This Is Not Palindrome");   
// }


// let a=5, b=10;

// a = a+b;
// console.log(a,b);
// b = a-b;
// console.log(a,b);
// a = a-b;
// console.log(a,b);




// let str = "abba"

// let change = str.split("").reverse().join("");

// console.log(change);

// if (str === change) {
//     console.log("This is Palindrome",change);
    
// } else {
//     console.log("This is Not a Palindrome",change);
// }


// let str =  "Aman Singh";

function reversed(str){
    let reversed = " ";

    for(let i=str.length - 1; i>=0; i--){
        reversed  += str[i];
    }
    return reversed;
}


console.log(reversed("Hello"));

