// create

let user = [];
function create(name) {
    user.push(name);
    // console.log("User Added : ",user);
    
}
create("Aman")
create("Avinash")

// display

function readUser() {
    console.log("All Users:",user);
    
}
readUser();

// Update

function update(oldName,newName) {
    let index = user.indexOf(oldName);
    if (index !== -1) {
        user[index] = newName;
        console.log("User Update",user);
    }else{
        console.log("User NOt Found");
        
    }
    
}

update("Aman","Aman Singh")