function dubai(option) {
    console.log(option.fname + " your trip is confirm dubai " + option.price);
}
function goa(option) {
    console.log(option.fname + "your trip is confirm goa " + option.price);
}
function singapore(option) {
    console.log(option.fname + "your trip is confirm singapore " + option.price);
}
function germany(option) {
    console.log(option.fname + "your trip is confirm germany " + option.price);
}


function budget(fname,price,cb) {
    cb({
        fname:fname,
        price:price
    })
}

let package = parseInt(prompt("Enter the budget:-"));

if (package>10000) {
    budget("aman",package,dubai);
    
} else if(package>8000) {
    budget("aman",package,goa);

}else if(package>6000) {
    budget("aman",package,singapore);

}else if(package>5000) {
    budget("aman",package,germany);

}else{
    console.log("your budget is 5000 less than u r not going");
}
