const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(b){
    b.addEventListener('click',  function(e){
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = 'pink';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'lightblue';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
        }
    })
})

