const body = document.querySelector('body');
const button = document.querySelectorAll('.button');

button.forEach(function (i) {
    console.log(i);
    i.addEventListener('click',function (e) {
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'pink') {
            body.style.background = e.target.id;
        }
        if (e.target.id === 'red') {
            body.style.background = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.background = e.target.id;    
        }
        if (e.target.id === 'green') {
            body.style.background = e.target.id;    
        }
        
        
    })
    
})