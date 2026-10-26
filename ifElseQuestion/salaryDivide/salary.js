let a = parseInt(prompt("Enter Your Salary:-"));
if (a<=10000) {
    console.log("HRA :-%d",a/100*20);
    console.log("DA :-%d",a/100*80);
} else if(a<=20000) {
    console.log("HRA :-%d",a/100*25);
    console.log("DA :-%d",a/100*75);
} else{
    console.log("HRA :-%d",a/100*30);
    console.log("DA :-%d",a/100*70);
}