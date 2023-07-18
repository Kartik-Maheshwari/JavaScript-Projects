var ind = 0;

chimg(ind);
function chimg(i){
    ind+=i;

    var im = document.getElementsByClassName("imgd");

    var dots = document.getElementsByClassName("dot");

    for(i =0;i<im.length;i++){
        im[i].style.display = "none";
    }

    for(i =0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    if(ind>im.length -1){
        ind = 0;
    }
    if(ind <0){
        ind = im.length -1;
    }

    im[ind].style.display = "block";
    dots[ind].className += "active";
}