"use strict";

const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");
const rock = document.querySelector(".rock");
const p1 = document.querySelector("#player1");
const p2 = document.querySelector("#player2");
const knap = document.querySelectorAll("button"); 
console.log(knap);
let element;
let mTal;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden Vises");

    knap.forEach(knap => {
        knap.addEventListener("click", start);
    });
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

    knap.forEach(knap => {
        knap.removeEventListener("click", start);
    });
    
    element = event.target;

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
     mTal = parseInt(Math.floor(Math.random() * 3) + 1);
     console.log(mTal);
    if (mTal === 1) {
        p2.classList.add("rock");
    } else if (mTal === 2) {
        p2.classList.add("paper");
    } else {
        p2.classList.add("scissors");
    }
}

function end() {
    console.log("end");
    if (p1.classList.contains("rock") && p2.classList.contains("scissors")) {
       vind();
    }
    else if (p1.classList.contains("rock") && p2.classList.contains("rock")) {
        uaf();
    }
    
    else if (p1.classList.contains("paper") && p2.classList.contains("rock")) {
        vind();
    }
    
    else if (p1.classList.contains("paper") && p2.classList.contains("paper")) {
        uaf();
    }

    else if (p1.classList.contains("scissors") && p2.classList.contains("paper")) {
        vind();
    }
    
    else if (p1.classList.contains("scissors") && p2.classList.contains("scissors")) {
        uaf();
    }

    else {
        tab();
    }
    restart();
}

function restart() {
    console.log("restart");
    buttons.classList.remove("disabled");
    
    knap.forEach(knap => {
        knap.addEventListener("click", start);
    });
}

function vind() {
    console.log("win");
    win.classList.remove("hidden");
    draw.classList.add("hidden");
    lose.classList.add("hidden");
}

function uaf() {
    console.log("draw");
    draw.classList.remove("hidden");
    win.classList.add("hidden");
    lose.classList.add("hidden");
}

function tab() {
    console.log("lose");
    lose.classList.remove("hidden");
    draw.classList.add("hidden");
    win.classList.add("hidden");
}
