function rectAngle(params) {
    let a = parseInt(prompt("Enter the first number"));
    let b = parseInt(prompt("Enter the second number"));
    let c = parseInt(prompt("Enter the third number"));
    let d = parseInt(prompt("Enter the forth number"));

    if (a==c && b==d) {
        console.log("is Rectangle" );
        
    } else {
        console.log("is not Rectangle");
        
    }
}
rectAngle()