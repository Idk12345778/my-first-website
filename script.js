let count = 0;
function increase(){
    count = count +1;
    document.getElementById("counter").innerText = count;
}

function decrease(){
    if(count >0){
        count = count-1;
        document.getElementById("counter").innerText = count;
        document.getElementById("counter").style.color = "white";
    }

    else{
        document.getElementById("counter").style.color = "red";
    }
    
}