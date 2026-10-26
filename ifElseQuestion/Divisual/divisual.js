let a = parseInt(prompt("Enter the number:-"));
if (a%5==0 && a%11==0) {
    console.log(" is divide by both 5 or 11");
} else if(a%11==0){
    console.log(" is divide by 11 only");
}else if(a%5==0 ){
    console.log(" is divide by 5 only");
}