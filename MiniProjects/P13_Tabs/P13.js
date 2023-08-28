const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const contents = document.querySelectorAll(".content");

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const id=e.target.dataset.id;
        btns.forEach((b)=>{
            b.classList.remove("active");
        });
        e.target.classList.add("active");
        contents.forEach((article)=>{
            article.classList.remove("active");
        })
        const k=document.getElementById(id);
        console.log(k)
        k.classList.add("active");
    })
})
