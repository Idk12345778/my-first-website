let count = 0;
function increase(){
    count = count +1;
    document.getElementById("counter").innerText = count;
}

function decrease(){
    if(count >0){
        count = count-1;
        document.getElementById("counter").innerText = count;

    }
    
}