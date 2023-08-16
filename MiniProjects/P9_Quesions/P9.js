//using selectors inside the element
//Here we are selecting particular question i.e. quest from all the three articles.
const questions = document.querySelectorAll(".question");

questions.forEach((quest)=>{
    // console.log(e);
    const btn = quest.querySelector(".question-btn");
    btn.addEventListener("click",(e)=>{
        questions.forEach(function (item){
           if(item!==quest){
            item.classList.remove("show-text");
           }
        })
        quest.classList.toggle("show-text");
    })
});



// traversing the dom

// const questiontext = document.querySelector(".question-text");
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click",(e)=>{
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
//     })
// })