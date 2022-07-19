
let main = document.getElementById("main");
let box = document.getElementById("box");
let flgMoveDown = 1; // animation direction, Ex- 0 for animate right bottom.

const MoveBox = () => {
    let left = box.offsetLeft;
    let top = box.offsetTop;
    if ((left + 100) >= main.clientWidth || (top + 100) >=  main.clientHeight) {
        flgMoveDown = 0;
    } 
    
    if (box.offsetLeft <= 0)
    {
        flgMoveDown = 1;
    }

    if(flgMoveDown === 1){
        left = (left + 10);
        top = (top + 10);
    } else  {
        left = (left - 10);
        top = (top - 10);
    }

    box.style.left = left + "px";
    box.style.top = top + "px";

    setTimeout(function () { MoveBox() }, 1000);

}

setTimeout(function () { MoveBox() }, 1000);

