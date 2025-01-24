let icon = document.querySelector('.icon');
let ul = document.querySelector('ul');

icon.addEventListener('click', ()=>{
    ul.classList.toggle('show');
    
    if (ul.className == "show") {
     document.getElementById("bar").className="fa-solid fa-xmark";   
    }else{
        document.getElementById("bar").className="fa-solid fa-bars";
    }
})