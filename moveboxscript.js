

let flgMoveDown = 1; // 1: Move down-right, 0: Move down-right

const MoveBox = () => {
    // Full window
    let main = document.getElementById("main");

    // Box
    let box = document.getElementById("box");

    let left = box.offsetLeft;
    let top = box.offsetTop;
    if ((left + 100) >= main.clientWidth || (top + 100) >=  main.clientHeight) {
        // If box location at at bottom or at right corner
        flgMoveDown = 0;
    } 
    
    if (box.offsetLeft <= 0)
    {
        flgMoveDown = 1;
    }

    if(flgMoveDown === 1){
        // Move down-right
        left = (left + 10);
        top = (top + 10);
    } else  {
        // Move down-right
        left = (left - 10);
        top = (top - 10);
    }

    box.style.left = left + "px";
    box.style.top = top + "px";
}

setInterval(function () { MoveBox() }, 1000);

