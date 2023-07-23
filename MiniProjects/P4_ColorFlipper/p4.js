const colors = ["green","red","yellow","blue"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomnumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = (colors[randomnumber])
})