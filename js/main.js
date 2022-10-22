const mobileNav = document.getElementById('mobile-nav')


const change = function (){
    if(mobileNav.style.display === 'none'){
        mobileNav.style.display = 'block'
    }else{
        mobileNav.style.display = 'none'
    }
}