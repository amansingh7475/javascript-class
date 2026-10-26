let num = parseInt(prompt("Enter the number:-"));
let sum,rem=0;
while(num!=0){
    sum = Math.floor(num%10);
    rem = (rem * 10)+sum;
    num=Math.floor(num/10);
}
console.log("%d",rem);
