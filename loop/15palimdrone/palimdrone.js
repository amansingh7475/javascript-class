let num = parseInt(prompt("Enter the number:-"));
let sum,rem=0;
let cnum = num;
while(num!=0){
    sum = Math.floor(num%10);
    rem = (rem*10)+sum;
    num = Math.floor(num/10);
}
console.log("%d",rem);
if (rem ==cnum) {
    console.log("%d Is Palindrome:- ",rem);
}else{
    console.log("%d Is not Palindrome:-",rem);
    
}
