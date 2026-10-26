let a = parseInt(prompt("Enter the first number:-"));
let b = parseInt(prompt("Enter the second number:-"));

let choich = parseInt(prompt("1:add\n2:sub\n3:mul\n4:div"));

switch (choich) {
    case 1:
        console.log("%d",a+b);
        break;

    case 2:
        console.log("%d",a-b);
        break;
        
    case 3:
        console.log("%d",a*b);
        break;

    case 4:
        console.log("%d",a/b);
        break;

    default:
        console.log("invalid number :-");
        break;
}