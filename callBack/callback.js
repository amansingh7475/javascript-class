function science(option){
    console.log(option.fname + " Admission is confirm your science " + option.per);
}

function commerce(option) {
     console.log(option.fname + " Admission is confirm your commerce " + option.per);
}
    
function arts(option) {
    console.log(option.fname + " Admission is confirm your arts " + option.per);
    
}

function admission(fname,per,cb) {
    cb({
        fname:fname,
        per:per
    })
}
let percentage = parseInt(prompt("Enter the number:-"));
let name = prompt("Enter the name:-");
//let percentage = parseInt(prompt("Enter the percentage:-"));
// let name = prompt("Enter the name:-");

if (percentage>90) {
    admission(name,percentage,science);
    
} else if(percentage>70) {
    admission(name,percentage,commerce);
}else if(percentage>50){
    admission(name,percentage,arts);
}else{
    console.log("your marks is less than 50 you are not eligible any course");
}