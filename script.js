
window.onscroll = function() {
    changeHeader();
};

function changeHeader() {
    let header = document.getElementById("header");
    let logo = document.querySelector('.logo')

    if (window.scrollY > 100) {  
        header.style.backgroundColor = "rgb(23, 23, 23)"; 
        header.style.height = '80px' 
        logo.style.display = 'none'
    } else {
        header.style.backgroundColor = "transparent";  
        logo.style.display = 'block'
        header.style.height = '200px'
    }
}


let img = document.querySelector('.cardImg')
let coments = document.querySelector('.coments')    

img.addEventListener('mouseenter', function () {
    coments.style.display = 'block'
    img.style.filter =  "brightness(50%)"
    
})

img.addEventListener('mouseleave', function () {
    coments.style.display = 'none'
    img.style.filter =  "none"
})

coments.addEventListener('mouseenter', function () {
    coments.style.display = 'block'
    img.style.filter =  "brightness(50%)"
    
})

coments.addEventListener('mouseleave', function () {
    coments.style.display = 'none'
    img.style.filter =  "none"
})