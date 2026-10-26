function digit(params) {
    let x = parseInt(prompt("Enter the number :-"));
    let sum=0,count=0;

    for(i=1;i<=x;i++){
        sum = parseInt(x%10);
        count = (count*10)+sum;
        x = parseInt(x/10);
    }
    console.log("%d",count);
    


}
digit()