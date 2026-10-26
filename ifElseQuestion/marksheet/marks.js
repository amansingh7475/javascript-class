let a = parseInt(prompt("Enter your English Marks:-"));
let b = parseInt(prompt("Enter your Math Marks:-"));
let c = parseInt(prompt("Enter your Science Marks:-"));
let d = parseInt(prompt("Enter your S.S Marks:-"));
let e = parseInt(prompt("Enter your Hindi Marks"));
let f = parseInt(prompt("Enter the Gujarati Marks:-"));

sum = a+b+c+d+e+f;
console.log(" Total Marks :- %d",sum);
percentage = sum/6;
console.log(" Percentage :- %f%",percentage);
if (a>35 && b>35 && c>35 && d>35 && e>35 && f>35 && a<=100 && b<=100 && c<=100 && d<=100 && e<=100 && f<=100) {
    if (percentage<35) {
    console.log(" Fail : ");
    } else if(percentage<40){
    console.log(" Grade F ");
    }else if(percentage<50){
    console.log(" Grade E ");
    }else if(percentage<60){
    console.log(" Grade D ");
    }else if(percentage<70){
    console.log(" Grade C ");
    }else if(percentage<80){
    console.log(" Grade B ");
    }else if(percentage<90){
    console.log(" Grade A ");
    }else {
    console.log(" Grade A++ ");
    }


} else {
    console.log(" Invalid Marks")
}
