function square(params) {
    let a = parseInt(prompt("Enter the first number"));
    let b = parseInt(prompt("Enter the second number"));
    let c = parseInt(prompt("Enter the third number"));
    let d = parseInt(prompt("Enter the forth number"));

    if (a==b && b==c && c==d) {
        console.log("is Square");
        
    } else {
        console.log("is not Square");
        
    }
}
square()