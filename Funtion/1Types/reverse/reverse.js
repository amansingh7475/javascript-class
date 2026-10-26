function isReverse(params) {
    
    let x = parseInt(prompt("Enter the number:-"));
    let sum=0;
    for(i=x;i>=1;i--)
    {
        console.log("%d",i);
        sum =sum+i;
        
    }
    console.log("%d",sum);
    
}
isReverse()