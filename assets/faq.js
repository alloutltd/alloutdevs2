const buttons = document.querySelectorAll('a');

buttons.forEach( a =>{
    a.addEventListener('click',()=>{
        const icon = a.children[1];

        icon.classList.toggle('rotate');
    })
} )