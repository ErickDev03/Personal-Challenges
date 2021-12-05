
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuBtn.classList.remove('close');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuBtn.classList.add('close');
        menuOpen = false;
    }
});

l