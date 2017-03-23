/*My hero*/
let alvarHero = document.querySelector("#hero");

/*SOUND*/

let MovieSound = document.querySelector("#moviesound");
let soundJumpBtn = document.querySelector("#playJump");

soundJumpBtn.addEventListener("click", playAndJump);

function playAndJump(){
    console.log("Play and Jump")
    MovieSound.addEventListener("ended", jumpHero);
    MovieSound.play();
}
function jumpHero(){
    alvarHero.classList.add("oneJump");
}

/*Move Button*/
let move_btn = document.querySelector("#move_btn");

move_btn.addEventListener("click", moveAction);

function moveAction() {
    alvarHero.classList.toggle("move");
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
let fade = document.querySelector("#fade_btn");

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


/*SCALE BUTTON*/

let scaleing = document.querySelector("#scale_btn");

scaleing.addEventListener("click", startScale);

function startScale (){
    console.log("I scale")
    alvarHero.classList.add("scaleanimation");
}

/*Remove Scale Button*/

alvarHero.addEventListener("animationend", scaleRemove);

function scaleRemove () {
    console.log ("scale stop");
    alvarHero.classList.remove("scaleanimation");
}

/*Falldown*/

let fallingDown = document.querySelector("#falldown_btn");

fallingDown.addEventListener("click", startFall);

function startFall () {
    console.log ("I fall!");
    alvarHero.classList.add("fall");

}

/*remove Falldown*/

alvarHero.addEventListener("animationend", removeFall);

function removeFall (){
    console.log("I am back");
    alvarHero.classList.remove("fall");
}

/*SHAKE*/

let heroShake = document.querySelector("#shake_btn");

heroShake.addEventListener("click", startShake);

function startShake (){
    console.log("I am shakeing");
    alvarHero.classList.add("shake");
}

/*remove shake*/

alvarHero.addEventListener("animationend", removeShake);

function removeShake (){
    console.log("I stop to shake");
    alvarHero.classList.remove("shake");
}

/*GLOW*/
let heroGlow = document.querySelector("#glow_btn")

heroGlow.addEventListener("click", startGlow);

function startGlow (){
    console.log("I glow");
    alvarHero.classList.add("heroglowing");
}

/*remove GLOW*/

alvarHero.addEventListener("animationend", removeGlow);

function removeGlow (){
    console.log("I stop glowing");
    alvarHero.classList.remove("heroglowing");
}

/*MIRROR*/

let heroMirror = document.querySelector("#mirror_btn")

heroMirror.addEventListener("click", startMirror);

function  startMirror (){
    console.log("Mirror me");
    alvarHero.classList.add("mirrorhero");
}

/*remove MIRROR*/

alvarHero.addEventListener("animationend", removeMirror);

function removeMirror (){
    console.log("I stop mirroring");
    alvarHero.classList.remove("mirrorhero");
}
