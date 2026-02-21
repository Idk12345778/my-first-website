let count = 0;

function updatedisplay(){
    const counterElement = document.getElementById("counter");
    counterElement.innerText = count;

    if(count===0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color ="blue";
    }
}
function increase(){
    count = count +1;
    updatedisplay();
 
}

function decrease(){
    if(count >0){
        count = count-1;
    }
    updatedisplay();
    
}