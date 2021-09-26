
"use strict";

const gameBlock = document.querySelector(".game");
const gameTitle = document.querySelector(".game-title");

//modal
const modalWinner = document.querySelector(".modal-action");
const winnerText = document.querySelector(".winner");
const closeModalWinner = document.querySelector(".submit-winner");
const backgroundModal = document.querySelector(".background-modal");

const gameBlockItems = gameBlock.children;

//regame
const regame = document.querySelector(".refresh-game");

regame.addEventListener("click", () => {
    lastElem = null;
    lastTarget = null;

    for (let elem of gameBlockItems) {

        elem.classList.remove("has-image");

        if (elem.classList.contains("cross")) {
            elem.classList.remove("cross");
        }

        if (elem.classList.contains("zero")) {
            elem.classList.remove("zero");
        }

        let child = elem.firstElementChild;
        if (child === null) continue;
        child.remove();

    }
});

//массив элементов
let arr = [];

for (let elem of gameBlockItems) {
    arr.push(elem);
}

const cross = "Images/cross.svg";
const zero = "Images/zero.svg";

//создание массивов ходов

//элементы первой горизонтали
let upOneElems = [];
upOneElems.push(gameBlockItems[0]);
upOneElems.push(gameBlockItems[1]);
upOneElems.push(gameBlockItems[2]);

//элементы второй горизонтали
let upTwoElems = [];
upTwoElems.push(gameBlockItems[3]);
upTwoElems.push(gameBlockItems[4]);
upTwoElems.push(gameBlockItems[5]);

//элементы третей горизонтали
let upThreeElems = [];
upThreeElems.push(gameBlockItems[6]);
upThreeElems.push(gameBlockItems[7]);
upThreeElems.push(gameBlockItems[8]);

//элементы первого края
let edgeOneElems = [];
edgeOneElems.push(gameBlockItems[0]);
edgeOneElems.push(gameBlockItems[3]);
edgeOneElems.push(gameBlockItems[6]);

//элементы второго края
let edgeTwoElems = [];
edgeTwoElems.push(gameBlockItems[1]);
edgeTwoElems.push(gameBlockItems[4]);
edgeTwoElems.push(gameBlockItems[7]);

//элементы третьего края
let edgeThreeElems = [];
edgeThreeElems.push(gameBlockItems[2]);
edgeThreeElems.push(gameBlockItems[5]);
edgeThreeElems.push(gameBlockItems[8]);

//элементы первой диагонали
let diagonalOneElems = [];
diagonalOneElems.push(gameBlockItems[0]);
diagonalOneElems.push(gameBlockItems[4]);
diagonalOneElems.push(gameBlockItems[8]);

//элементы второй диагонали
let diagonalTwoElems = [];
diagonalTwoElems.push(gameBlockItems[2]);
diagonalTwoElems.push(gameBlockItems[4]);
diagonalTwoElems.push(gameBlockItems[6]);

let lastElem = null;
let lastTarget = null;

gameBlock.addEventListener("click", (event) => {
    let target = event.target;

    if (!target.classList.contains("game-item")) return;

    //проверка на двойной клик по одной и той же ячейке
    if (target.classList.contains("has-image")) return;

    //первая отыгровочка
    if (!lastElem) {

        let imageCross = document.createElement("img");
        imageCross.src = cross;
        imageCross.classList.add("insert-image");
        target.append(imageCross);
        setTimeout( () => imageCross.classList.add("animate-image"), 0 );
        lastElem = "cross";
        target.classList.add("has-image");
        target.classList.add("cross");
        return;

    }

    //смена крестика и нолика
    if (lastElem === "cross") {

        let imageZero = document.createElement("img");
        imageZero.src = zero;
        imageZero.classList.add("insert-image");
        target.append(imageZero);
        setTimeout( () => imageZero.classList.add("animate-image"), 0 );
        lastElem = "zero";
        target.classList.add("has-image");
        target.classList.add("zero");
        getWinner();

    } else {

        let imageCross = document.createElement("img");
        imageCross.src = cross;
        imageCross.classList.add("insert-image");
        target.append(imageCross);
        setTimeout( () => imageCross.classList.add("animate-image"), 0 );
        lastElem = "cross";
        target.classList.add("has-image");
        target.classList.add("cross");
        getWinner();

    }


});

//сам процесс игры
function getWinner() {

    let countActionCross = 0;
    let countActionZero = 0;

    //one up
    for (let elem of upOneElems) {

        if (elem.classList.contains("cross")) countActionCross++;
        if (elem.classList.contains("zero")) countActionZero++;

    }

    if (countActionCross === 3) return openModal("крестики", "x");
    if (countActionZero === 3) return openModal("нолики", "0");

    countActionCross = 0;
    countActionZero = 0;

    //two up
    for (let elem of upTwoElems) {

        if (elem.classList.contains("cross")) countActionCross++;
        if (elem.classList.contains("zero")) countActionZero++;

    }

    if (countActionCross === 3) return openModal("крестики", "x");
    if (countActionZero === 3) return openModal("нолики", "0");

    countActionCross = 0;
    countActionZero = 0;

    //three up
    for (let elem of upThreeElems) {

        if (elem.classList.contains("cross")) countActionCross++;
        if (elem.classList.contains("zero")) countActionZero++;

    }

    if (countActionCross === 3) return openModal("крестики", "x");
    if (countActionZero === 3) return openModal("нолики", "0");

    countActionCross = 0;
    countActionZero = 0;

    //edge one
    for (let elem of edgeOneElems) {

        if (elem.classList.contains("cross")) countActionCross++;
        if (elem.classList.contains("zero")) countActionZero++;

    }

    if (countActionCross === 3) return openModal("крестики", "x");
    if (countActionZero === 3) return openModal("нолики", "0");

    countActionCross = 0;
    countActionZero = 0;

    //edge two
    for (let elem of edgeTwoElems) {

        if (elem.classList.contains("cross")) countActionCross++;
        if (elem.classList.contains("zero")) countActionZero++;

    }

    if (countActionCross === 3) return openModal("крестики", "x");
    if (countActionZero === 3) return openModal("нолики", "0");

    countActionCross = 0;
    countActionZero = 0;

    //edge three
    for (let elem of edgeThreeElems) {

        if (elem.classList.contains("cross")) countActionCross++;
        if (elem.classList.contains("zero")) countActionZero++;

    }

    if (countActionCross === 3) return openModal("крестики", "x");
    if (countActionZero === 3) return openModal("нолики", "0");

    countActionCross = 0;
    countActionZero = 0;

    //diagonal one
    for (let elem of diagonalOneElems) {

        if (elem.classList.contains("cross")) countActionCross++;
        if (elem.classList.contains("zero")) countActionZero++;

    }

    if (countActionCross === 3) return openModal("крестики", "x");
    if (countActionZero === 3) return openModal("нолики", "0");

    countActionCross = 0;
    countActionZero = 0;

    //diagonal two
    for (let elem of diagonalTwoElems) {

        if (elem.classList.contains("cross")) countActionCross++;
        if (elem.classList.contains("zero")) countActionZero++;

    }

    if (countActionCross === 3) return openModal("крестики", "x");
    if (countActionZero === 3) return openModal("нолики", "0");

    countActionCross = 0;
    countActionZero = 0;

    //обработка ничьи
    let checkNobody = arr.every(function (elem) {

        if (elem.classList.contains("has-image")) {
            return true;
        }
    
    });
    
    if (checkNobody) {
        openModal("ничья", "");
        return;
    }

}

const startGame = document.querySelector(".start-game");
startGame.addEventListener("click", () => {
    startGame.style.display = "none";
    gameTitle.classList.add("elems-active");
    gameBlock.classList.add("elems-active");
    regame.classList.add("refresh-game-active");
});;

function openModal(winnerGame, signBgc) {
    gameTitle.classList.remove("elems-active");
    gameBlock.classList.remove("elems-active");
    regame.classList.remove("refresh-game-active");

    winnerText.textContent = winnerGame;
    backgroundModal.textContent = signBgc;

    modalWinner.classList.add("modal-active");

    closeModalWinner.addEventListener("click", () => {

        lastElem = null;
        lastTarget = null;

        for (let elem of gameBlockItems) {

            elem.classList.remove("has-image");

            if (elem.classList.contains("cross")) {
                elem.classList.remove("cross");
            }

            if (elem.classList.contains("zero")) {
                elem.classList.remove("zero");
            }

            let child = elem.firstElementChild;
            if (child === null) continue;
            child.remove();

        }

        modalWinner.classList.remove("modal-active");
        gameTitle.classList.add("elems-active");
        gameBlock.classList.add("elems-active");
        regame.classList.add("refresh-game-active");
    });

}










