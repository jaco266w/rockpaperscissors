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

let mTal;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden Vises");

    buttons.classList = " ";
    p1.classList = "player";
    p2.classList = "player";


    rock.addEventListener("click", sten);
    paper.addEventListener("click", papir);
    scissors.addEventListener("click", saks);
}

function sten() {
    console.log("sten");
    rock.removeEventListener("click", sten);
    buttons.classList.add("disabled");
    p1.classList.add("shake");
    p2.classList.add("shake");
    p1.addEventListener("animationend", sten2);
}

function sten2() {
    console.log("sten2")
    p1.classList.remove("shake");
    p1.classList.add("rock");
    
    modstander();
    end();
}

function papir() {
    console.log("pair");
    rock.removeEventListener("click", papir);
    buttons.classList.add("disabled");
    p1.classList.add("shake");
    p2.classList.add("shake");
    p1.addEventListener("animationend", papir2);
}

function papir2() {
    console.log("papir2")
    p1.classList.remove("shake");
    p1.classList.add("paper");
    
    modstander();
    end();
}
function saks() {
    console.log("pair");
    rock.removeEventListener("click", saks);
    buttons.classList.add("disabled");
    p1.classList.add("shake");
    p2.classList.add("shake");
    p1.addEventListener("animationend", saks2);
}

function saks2() {
    console.log("saks2")
    p1.classList.remove("shake");
    p1.classList.add("scissors");
    
    modstander();
    end();
}

function modstander() {
    console.log("modstander");
    p2.classList.remove("shake");
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
    }
    else if (p1.classList.contains("rock") && p2.classList.contains("rock")) {
        draw.classList.remove("hidden");
    }
    
    else if (p1.classList.contains("paper") && p2.classList.contains("rock")) {
        win.classList.remove("hidden");
    }
    
    else if (p1.classList.contains("paper") && p2.classList.contains("paper")) {
        draw.classList.remove("hidden");
    }

    else if (p1.classList.contains("scissors") && p2.classList.contains("paper")) {
        win.classList.remove("hidden");
    }
    
    else if (p1.classList.contains("scissors") && p2.classList.contains("scissors")) {
        draw.classList.remove("hidden");
    }

    else {
        lose.classList.remove("hidden");
    }
}

