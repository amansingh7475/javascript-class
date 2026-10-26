function sum(params) {
    let x = parseInt(prompt("Enter the number:-"));

    let sum,count=0;
    while (x>0) {
        sum = parseInt(x%10);
        count = count+sum;
        x = parseInt(x/10);
        
    }
    console.log("%d",count);
    
}
sum()