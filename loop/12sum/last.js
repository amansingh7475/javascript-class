let num1 = parseInt(prompt("Enter the number:-"));
let last = 0;
let sum = 0;
last = num1%10;
while(num1>=10)
num1/=10;
console.log("%d",num1);
console.log("%d",last);
sum = num1+last;
console.log("%d",sum);



