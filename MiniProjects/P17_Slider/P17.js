const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100 }%`
});

let counter = 0;

nextBtn.addEventListener("click",()=>{
    counter++;
    //1st functionlity

    // if(counter>=slides.length){
    //     counter=0;
    // }
    carousel();
})

prevBtn.addEventListener("click",()=>{
    counter--;
    //1st functionlity

    // if(counter<0){
    //     counter=slides.length-1;
    // }
    carousel();
})

function carousel(){

    //2nd functionality.
    if(counter < slides.length-1){
        nextBtn.style.display = "block"
    }
    else{
        nextBtn.style.display = "none"
    }
    if(counter >0){
        prevBtn.style.display="block"
    }
    else{
        prevBtn.style.display="none"

    }

    
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

prevBtn.style.display = "none"