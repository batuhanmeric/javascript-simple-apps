const leftArr = document.getElementById("left-arrow");
const rightArr = document.getElementById("right-arrow");
const textDiv = document.querySelector(".text");
let index = 0;

const texts = [
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor, sit amet",
    "Lorem ipsum dolor sit amet."
]

gsap.from(".text", .8, {y: '-100%'});


function slideLeft(){
   if(index == 0) index = texts.length-1;
   else index--;
    gsap.to(".images", .3, {x: `${-index*100}%`})
   
    textDiv.textContent = texts[index];
    gsap.from(textDiv, .5, {y: -20, opacity: 0, ease: 'power3.out'}) 
}


function slideRight(){
    
    if(index == texts.length-1) index = 0;
    else index++;
    gsap.to(".images", .3, {x: `${-index*100}%`})
   
    textDiv.textContent = texts[index];
    gsap.from(textDiv, .5, {y: -20, opacity: 0, ease: 'power3.out'}) 
}




leftArr.addEventListener("click",slideLeft);


rightArr.addEventListener("click",slideRight);