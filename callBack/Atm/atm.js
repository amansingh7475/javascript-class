alert("Welcome to Atm ");
// function balanced(params) {
//     let bal = 5000;
// }
let balanced = 10000;
let userPin = 8460;

var same = "yes";
let x= prompt("Confirm are you enter in atm or not ");
if (same!=x) {
    alert("you not enter the system")

}else{


    function atm(){
        let pin = parseInt(prompt("Enter your 4-digit pin"));
        if (userPin !== pin ) {
            alert("Incorrect PIN");
            return;
            
        }
        while(true) {
            let choich = parseInt(prompt("1:Checkbal \n 2:Deposit \n 3: Withdraw \n 4:Exit"))
            switch (choich) {
                case 1: console.log(balanced);
                        break;

                case 2: let x = parseInt(prompt("You are enter which amount deposit "));
                        let sum = x+balanced;
                        console.log(sum); 
                        break;

                case 3: let y = parseInt(prompt("You are enter which amount withdraw "));
                        if (balanced>=y) {
                            let count = balanced-y;
                            console.log(count);
                        }else{
                            alert("Your bank insufficient");
                        }
                        
                        break;
                        
                case 4: alert("You are exit in system");
                        break;
            
                default:
                    break;
            }
        }
    }
    atm();


}
