function science(fname,per) {
    return fname + " your admission is confirm in science : " + per
}
function commerce(fname,per) {
    return fname + " Your admission is confirm in commerce :" + per 
}
function art(fname,per) {
    return fname + " Your admission is confirm in arts :" + per
}
var name = prompt("Enter name:-")
let percentage = parseInt(prompt("Enter the percentage"))
let output;
if (percentage>90) {
    output = science(name,percentage)
} else if(percentage>70) {
    output = commerce(name,percentage)
}else if(percentage>50){
    output = art(name,percentage)
}else{
    console.log(per + "less than your marks:");
    
}
console.log(output);

