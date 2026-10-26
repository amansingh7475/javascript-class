// 2. without return type with argument

function science(name,per) {
    console.log(name + " your admission confirm is Science  with per :" +per);
    
}
function commerce(name,per) {
    console.log(name + " your admission confirm is Commerce  with per :" +per);
    
}
function art(name,per) {
    console.log(name + " your admission confirm is Art  with per :" +per);
    
}
var fname = prompt("Enter the name")
let percentage = parseInt(prompt("Enter the percentage"))

if (percentage>90) {
    science(fname,percentage);
    
} else if(percentage>70){
    commerce(fname,percentage);
    
}else if(percentage>50){
    art(fname,percentage);
    
}else{
    console.log("percentage is less than 50");

}