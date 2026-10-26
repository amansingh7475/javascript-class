var ch = prompt("Enter the word:-");
if (ch>='a' && ch<='z') {
    if (ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u') {
        console.log("%c Is Lower case Vowels",ch);
    } else {
        console.log("%c Is Lower Case Consonant",ch);
    }
}else if (ch>='A' && ch<='Z') {
    if (ch=='A' || ch=='E' || ch=='I'|| ch=='O' || ch=='U') {
        console.log("%c is Upper case Vowels",ch);
    } else {
        console.log("%c is Upper case Consonant",ch);
    }
}else if(ch>='0' && ch<='9'){
    console.log("%d Is number:-",ch)
}else if (ch=='1' ||ch=='@' || ch=='#' || ch=='$' || ch=='%' || ch=='^' ||ch=='&' || ch=='*' ||ch=='(' ||ch==')'||ch=='_') {
    console.log(" %s Is Special Characters",ch);
} else {
    console.log("is Invalid number")
}