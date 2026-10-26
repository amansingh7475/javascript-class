function demo() {
    console.log("demo function called...");
    
}

function test(x) {
    x()
}

//test(456)
//test("Aman")

test(demo)