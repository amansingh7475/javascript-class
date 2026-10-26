let a = parseInt(prompt("Enter the Cost Price:-"));
let b = parseInt(prompt("Enter the Selling Price:-"));

if (a<b) {
    console.log("%d Profit",b-a);
} else {
    console.log("%d Loss",a-b);
}