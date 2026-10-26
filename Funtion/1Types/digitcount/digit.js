function count(params) {
    let x = parseInt(prompt("Enter the num ber:-"));
    let sum =0;
    while (x!=0) {
        x = parseInt(x/10);
        sum++;
    }
    console.log("%d",sum);
    
}
count()