let alvarHero = document.querySelector("#hero");

let jumpBtn = document.querySelector("#jumpbutton");

let btnOne = document.querySelector("#btn1");

btnOne.addEventListener("click", moveAction);
function moveAction(){
    alvarHero.classList.add("move");
};

/*jumpBtn.addEventListener("click", alvarmove);
function alvarmove(){
    console.log("im working");
}*/
