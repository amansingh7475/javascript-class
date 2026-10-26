// Filter se aaram se hogya.
// const Num = [1,2,3,4,5,6,7,8,9,10]

// const newNums =  Num.filter((e) =>{
//     return e > 5;
// })

// console.log(newNums);


// ForEach se condition lagana padta hai.
// const num = [1,2,3,4,5,6,7,8,9,10]
// const myNum = []
// num.forEach((e) =>{
    // if (e>5) {
    //     myNum.push(e);
    // }

//     myNum.push(e)
// })
// console.log(myNum);




//  ForEach se hai
// const n = [1,2,3,4,5,6,7,8,9,]

// const num = []

// n.forEach( (e) =>{
//     if (e > 4) {
//         num.push(e)
//     }
// })
// console.log(num);



// ----------------------------------- Filter Real world question ----------------------------------------------------

const book = [
    {title : "Book One" , genre : " History" , publish : 1981 , edition : 2000},
    {title : "Book Two" , genre : " Fiction" , publish : 1992 , edition : 2005},
    {title : "Book Three" , genre : " Non- Fiction" , publish : 1995 , edition : 2008},
    {title : "Book Four" , genre : " Math" , publish : 1985 , edition : 2006},
    {title : "Book Five" , genre : " History" , publish : 1995 , edition : 2012},
    {title : "Book Six" , genre : " Fiction" , publish : 1990 , edition : 2022},
    {title : "Book Seven" , genre : " Science" , publish : 2000 , edition : 2018},
    {title : "Book Eight" , genre : " History" , publish : 1999 , edition : 2006},
    {title : "Book Nine" , genre : " Math" , publish : 1998 , edition : 2009},
    {title : "Book Ten" , genre : " Science" , publish : 1989 , edition : 2010},
];

// const newBook =  book.filter( (bk) => {
//     return bk.genre === 'Science'
// });
// console.log(newBook);

// const userBook = book.filter( (bk) => {
//     return bk.publish >= 1995 && bk.edition >= 2005
// })
// console.log(userBook);


// const num = [1,2,3,4,5,6,7,8,9,10]

// const newNums = num.map((e) =>{
//     return e * 10
// }).filter((e) => e >= 50).map((e)=> e + 1)

// console.log(newNums);



// const num = [1,2,3,4,5,6,7,8,9,10];

// const sum = num.map((e)=>{
//     return e * e;
// }).filter((e)=> e> 20).map((e)=> e + e)

// console.log(sum);



// practise question
// const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNum =  nums.map((e,ind,arr) =>{
//     return e * 2;
    // return arr;
    // return ind;
// })

// console.log(newNum);

// let arr = [1,5,9,4,6]

// const newArr =  arr.map((e) =>{
//     return e.toString(2);
// })

// console.log(newArr);


// let arr = [1,2,3,4,5]

// const newArr =  arr.reduce((acc,currval) =>{
//     return currval+=acc;
// },0)
// console.log(newArr);

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const sum = arr.reduce((acc,curVal)=>{
//     return acc+curVal
// },0)

// console.log(sum);



// let str = "AbbA"
// let newStr = str.split("").reverse().join("")
// console.log(newStr);
// if (str === newStr) {
//     console.log("Yes This is Palindrome");
// } else {
//     console.log("Not This is Palindrome");   
// }

// let str = "AbbA";
// let rev = "";

// for(let i=str.length -1;i>=0;i--){
//     rev += str[i];
// }
// console.log(rev);
// if (str === rev) {
//     console.log("Palindrome");
    
// }else{
//     console.log("Not PAlindrome  ");
    
// }

// console.log(10 * '2');
// console.log('2' * 10);
// console.log(10 / '2');
// console.log('2' - 10);
// console.log('2' + '2');


// setTimeout(() =>{
//     console.log(10);
    
// },3000)


// let user = parseInt(prompt("Enter the values :-"));

// let reverse = ""

// for (const i of user) {
//     reverse = i+reverse
// }
// console.log(reverse);


