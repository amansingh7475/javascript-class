let a = parseInt(prompt("Enter the Your age:-"));
if (a<0) {
    console.log("%d Is invalid age",a);
}else if (a<12) {
    console.log("%d is Children",a);
} else if (a<18) {
    console.log("%d is Teen Age ",a);
} else if (a<60) {
    console.log("%d is Adults",a);
}else {
    console.log("%d is Senior citizen",a)
}
    
