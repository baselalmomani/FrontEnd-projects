let image = document.getElementById("main-img");
let container = document.querySelector('.container');

function phones(phone){
    image.src = phone;
}


function colors(color){
    container.style.background = color;
}