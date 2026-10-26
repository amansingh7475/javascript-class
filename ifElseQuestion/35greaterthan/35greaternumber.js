let a = parseInt(prompt("Enter the number:-"));
let b = parseInt(prompt("Enter the number:-"));
let c = parseInt(prompt("Enter the number:-"));

if (a>35 && b>35 && c>35) {
    console.log("%d",a+b+c);
}else if (a>35 && b>35) {
    console.log("%d",a+b);
}else if (a>35 && c>35) {
    console.log("%d",a+c);
}else if(b>35 && c>35){
    console.log("%d",b+c);
}else if (a>35) {
    console.log("%d",a);
}else if(b>35){
    console.log("%d",b);
}else if(c>35){
    console.log("%d",c);
}else{
    console.log("all number less than 35")
}