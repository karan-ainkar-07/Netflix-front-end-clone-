const hover_red=document.querySelectorAll(".hover")
hover_red.forEach(function(btn){
    btn.addEventListener('mouseover',function()
    {
        btn.style.backgroundColor="rgb(200,0,0)"
    })

    btn.addEventListener('mouseout',function(){
        btn.style.backgroundColor="red"
    })
})

const hover_faq=document.querySelectorAll(".faq-button")
hover_faq.forEach(function(btn){
    btn.style.transition="background-color 0.4s ease-in-out "
    btn.addEventListener('mouseover',function()
    {
        btn.style.backgroundColor="rgb(74, 74, 74)"
    })

    btn.addEventListener('mouseout',function(){
        btn.style.backgroundColor="rgb(36, 36, 36)"
    })
})

const films=document.getElementsByClassName("scrollable-films")
Array.from(films).forEach(function (film) {
    film.addEventListener('mouseover',function()
    {
        film.style.transform="scale(1.09)"
    })
    film.addEventListener('mouseout',function()
    {
        film.style.transform="scale(1)"
    })
})

// Film suggestions
let flag = 1;
if (flag == 1) {
    let slide = document.createElement('button');
    slide.style.backgroundColor = "white";
    slide.style.height="100px";
    slide.style.width="200px";
    slide.innerText="slide to next "
    let container = document.querySelector('.slide_buttons');
    
    if (container) {
        container.appendChild(slide);
    } else {
        console.error("Element with ID 'scrollable-film-suggestionse' not found.");
    }
}



