let navlinks =document.querySelector('ul li')
navlinks.addEventListener('scroll',function() {
    if(scrollY>=20){
        navlinks.style.backgroundColor="#eee"
    }
})