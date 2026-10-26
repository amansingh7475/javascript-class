const body = document.querySelector('body');
const button = document.querySelectorAll('.button');

button.forEach(function(button) {
    console.log(button);
    button.addEventListener('click',function (normal) {
        console.log(normal);
        console.log(normal.target);
        if(normal.target.id === 'grey'){
            body.style.background = normal.target.id;
        }
        if(normal.target.id === 'white'){
            body.style.background = normal.target.id;
        }
        if(normal.target.id === 'blue'){
            body.style.background = normal.target.id;
        }
        if(normal.target.id === 'yellow'){
            body.style.background = normal.target.id;
        }
        
    })
    
})