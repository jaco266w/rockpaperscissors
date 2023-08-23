"use strict";

const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const buttons = document.querySelector("#buttons");
const p1 = document.querySelector("#player1");
const p2 = document.querySelector("#player2"); 

let element;
let mTal;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden Vises");

    buttons.classList = " ";
    p1.classList = "player";
    p2.classList = "player";

    rock.addEventListener("click", start);
    paper.addEventListener("click", start);
    scissors.addEventListener("click", start);
}

function start() {
    console.log("start");
    console.log(this);
    
    buttons.classList = " ";
    p1.classList = "player";
    p2.classList = "player";

    win.classList.add("hidden");
    draw.classList.add("hidden");
    lose.classList.add("hidden");

    rock.removeEventListener("click", start);
    paper.removeEventListener("click", start);
    scissors.removeEventListener("click", start);
    
    element = this;

    buttons.classList.add("disabled");
    p1.classList.add("shake");
    p2.classList.add("shake");
    p1.addEventListener("animationend", show);
}

function show() {
    console.log("show")
    console.log(element);
    p1.classList = "player";
    if (element.classList.contains("rock")) {
        p1.classList.add("rock");
    }
    else if (element.classList.contains("paper")) {
        p1.classList.add("paper");
    }
    else {
        p1.classList.add("scissors");
    }
    
    modstander();
    end();
}

function modstander() {
    console.log("modstander");
    p2.classList = "player";
     mTal = Math.floor(Math.random() * 3) + 1;
     console.log(mTal);
    if (mTal == 1) {
        p2.classList.add("rock");
    } else if (mTal == 2) {
        p2.classList.add("paper");
    } else {
        p2.classList.add("scissors");
    }
}

function end() {
    console.log("end");
    if (p1.classList.contains("rock") && p2.classList.contains("scissors")) {
        win.classList.remove("hidden");
        draw.classList.add("hidden");
        lose.classList.add("hidden");
    }
    else if (p1.classList.contains("rock") && p2.classList.contains("rock")) {
        draw.classList.remove("hidden");
        win.classList.add("hidden");
        lose.classList.add("hidden");
    }
    
    else if (p1.classList.contains("paper") && p2.classList.contains("rock")) {
        win.classList.remove("hidden");
        draw.classList.add("hidden");
        lose.classList.add("hidden");
    }
    
    else if (p1.classList.contains("paper") && p2.classList.contains("paper")) {
        draw.classList.remove("hidden");
        win.classList.add("hidden");
        lose.classList.add("hidden");
    }

    else if (p1.classList.contains("scissors") && p2.classList.contains("paper")) {
        win.classList.remove("hidden");
        draw.classList.add("hidden");
        lose.classList.add("hidden");
    }
    
    else if (p1.classList.contains("scissors") && p2.classList.contains("scissors")) {
        draw.classList.remove("hidden");
        win.classList.add("hidden");
        lose.classList.add("hidden");
    }

    else {
        lose.classList.remove("hidden");
        draw.classList.add("hidden");
        win.classList.add("hidden");
    }
    restart();
}

function restart() {
    console.log("restart");
    buttons.classList.remove("disabled");
    rock.addEventListener("click", start);
    paper.addEventListener("click", start);
    scissors.addEventListener("click", start);
}

