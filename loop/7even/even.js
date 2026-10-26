let num = parseInt(prompt("Enter the nth term:-"));
sum = 0;

for(i=1;i<=num;i++){
    if (i%2==0) {
        sum+=i;
        console.log("%d",sum);
        
    }
}