var count =0;
 
function chcount(i){
    if(i==0){
    document.getElementById('count').innerHTML = 0;
    }
    else{
    count += i;
    document.getElementById('count').innerHTML = count;
    }
}

