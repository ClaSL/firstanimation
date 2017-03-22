let alvarHero = document.querySelector("#hero");
let move_btn = document.querySelector("#move_btn");
let btnOne = document.querySelector("#btn1");


move_btn.addEventListener("click", moveAction);
function moveAction(){
    alvarHero.classList.add("move");

};



alvarHero.addEventListener("animationend", removeClassJump);

function removeClassJump(){
    console.log ("I have to land");
    alvarHero.classList.remove("move");
}


