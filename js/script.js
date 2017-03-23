/*My hero*/
let alvarHero = document.querySelector("#hero");

/*Move Button*/
let move_btn = document.querySelector("#move_btn");

move_btn.addEventListener("click", moveAction);

function moveAction() {
    alvarHero.classList.add("move");
}

/*Remove Move*/

alvarHero.addEventListener("animationend", removeClassMove);

function removeClassMove() {
    console.log("I stopp move");
    alvarHero.classList.remove("move");
}


/*Move 30% Button*/
let moveingthirty = document.querySelector("#moveThirty");

moveingthirty.addEventListener("click", moveingtoAction);

function moveingtoAction() {
    console.log("I move to")
    alvarHero.classList.add("movetothirty");
}

/*Remove 30% Button*/

alvarHero.addEventListener("animationend", removeClassMoveTo);

function removeClassMoveTo(){
    console.log("I stop here");
    alvarHero.classList.remove("movetothirty");

}

/*Move from 30% Button*/

let movefrom = document.querySelector("#moveFromThirty");

movefrom.addEventListener("click", moveFromAction);

function moveFromAction () {
    console.log("I move from here");
    alvarHero.classList.add("movefromthirty");
}

/*Remove from 30% Button*/

alvarHero.addEventListener("animationend", removeMoveThirty);

function removeMoveThirty(){
    console.log("I go back to 30");
    alvarHero.classList.remove("movefromthirty");
}

/*Jump once*/

let oneJump = document.querySelector("#oneJump_btn");

oneJump_btn.addEventListener("click", makeHeroJump);

function makeHeroJump() {
    console.log("it was clicked");
    alvarHero.classList.add("oneJump");
}


/*Remove Jump once*/

alvarHero.addEventListener("animationend", removeClassJump);

function removeClassJump() {
    console.log("I have to land");
    alvarHero.classList.remove("oneJump");
}

/*Fade Button*/
let fade = document.querySelector("#fade");

fade.addEventListener("click", fadeHero);

function fadeHero (){
    console.log("I fade");
    alvarHero.classList.add("fadecss");
}


/*Remove Fade Button*/

alvarHero.addEventListener("animationend", fadeRemove);

function fadeRemove (){
    console.log ("I'll be back");
    alvarHero.classList.remove("fadecss");
}

/*SOUND*/

let MovieSound = document.querySelector("#moviesound");
MovieSound.addEventListener("ended", fadeHero);

