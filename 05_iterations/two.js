const arr = [1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
// }

const str = {
    name:"Aman Singh"
}

// for (const i in str) {
//     console.log(str);
// }

// const greeting = "Hello World"
// for (const greet of greeting) {
//     console.log(`value of ${greet}`);
//     continue;
// }

// --------------------------------- MAPS ----------------------------------------------------------------------
// Maps unique value ke liye jani jati hai. aur jis order main enter kiya hai ussi order main rahte hai.

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United states of America')
map.set('Un', "United Nation")
map.set('IN', "India")

// console.log(map) 

for (const [key, value] of map) {
    // console.log(key, ":-" , value);
    
}

// Object main for of kaam nhi karega uske liye humye for in lagana padega.

const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by Apple"
}

for (const key in myObject) {
    // console.log(`${key} value shortcut is ${myObject[key]}`);
}

const programming = ["js", "Ruby", "py", "cpp","java"]

for (const key in programming) {
    // console.log(`${key} ${programming[key]}`);
    
    
}

//  Array per jab loop lagana rahega toh for of laga denge .
//  or jab object per loop lagana rahega toh for in loop laga denge.


// ForEach() method:-

const coding = ["js", "Ruby", "py", "cpp","java"]

// coding.forEach( (item)=>{
//     console.log(item);
    
// })

// coding.forEach( (item , index , arr)=>{
//     console.log(item , index , arr);
    
// })

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "Js"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach((e)=>{
    console.log(e.languageFileName, "value of ",e.languageName);
    // console.log(e.languageName);
    
    
})



