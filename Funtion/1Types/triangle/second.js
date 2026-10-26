function triangle(params) {
    let a = parseInt(prompt("Enter the first number"));
    let b = parseInt(prompt("Enter the second number"));
    let c = parseInt(prompt("Enter the third number"));

    if (180== a+b+c && a>0 && b>0 && c>0) {
        console.log("is triangle");
        
    } else {
        console.log("is not triangle");
        
    }
}
triangle()
