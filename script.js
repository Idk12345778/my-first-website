let count = 0;
function increase(){
    count = count +1;
    document.getElementById("counter").innerText = count;
    document.getElementById("counter").style.color = "blue";
 
}

function decrease(){
    if(count >0){
        count = count-1;
        document.getElementById("counter").innerText = count;
        document.getElementById("counter").style.color = "blue";

    }

    else{
        document.getElementById("counter").style.color = "red";
    }
    
}