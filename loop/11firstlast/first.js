let num = parseInt(prompt("Enter the nth term:-"));
let last;
last = num%10;
while(num>=10)
num /=10;
console.log("%d",num);
console.log("%d",last);


