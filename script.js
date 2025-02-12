let card = document.querySelector('.card')

let tangyAs = document.querySelector('.tangyAs');

async function fetchMeals() {
    try {
        let response = await fetch('meals.json');
        if (!response.ok) {
            throw new Error("Api алу мумкин болмady");
        }
        let data = await response.json();
        
        data.meals.forEach(e => {
            let divElement = document.createElement('div');
            divElement.className = "card";
            divElement.innerHTML = `
                <img class="cardImg" src="${e.strMealThumb}" alt="">
                <div class="coments">
                    <p>${e.strMeal}</p>
                    <p>${e.strArea}</p>
                    <div>
                        <p>${e.strTime}</p>
                        <p>${e.strCalories}</p>
                    </div>
                </div>
            `;
            
            let img = divElement.querySelector('.cardImg');
            let coments = divElement.querySelector('.coments');
            
            divElement.addEventListener('mouseenter', function () {
                coments.style.display = 'block';
                img.style.filter = "brightness(50%)";
                img.style.transitionDuration = '1s';
                img.style.borderRadius = '20px';
            });
            
            divElement.addEventListener('mouseleave', function () {
                coments.style.display = 'none';
                img.style.filter = "none";
                img.style.transitionDuration = '1s';
                img.style.borderRadius = '100%';
            });
            
            tangyAs.appendChild(divElement);
        });
    } catch (err) {
        console.error(err);
    }
}

fetchMeals();







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
    coments.style.color = 'white'
    img.style.transitionDuration = '1s'
    img.style.borderRadius = '20px' 
})

img.addEventListener('mouseleave', function () {
    coments.style.display = 'none'
    img.style.filter =  "none"
    coments.style.color = 'white'  
    img.style.transitionDuration = '1s' 
    img.style.borderRadius = '100%' 
})

coments.addEventListener('mouseenter', function () {
    coments.style.display = 'block'
    img.style.filter =  "brightness(50%)"
    coments.style.color = 'white'
    img.style.transitionDuration = '1s' 
    img.style.borderRadius = '20px' 
})  

coments.addEventListener('mouseleave', function () {
    coments.style.display = 'none'
    img.style.filter =  "none"
    coments.style.color = 'white'
    img.style.transitionDuration = '1s' 
    img.style.borderRadius = '100%' 
})



