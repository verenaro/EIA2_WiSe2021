"use strict";
/*
Aufgabe: <L3.0>
Name: <Verena Rothweiler>
Matrikel: <270156>
Datum: <13.11.21.>
Quellen: <Neslisah Koc>
Leider funktioniert noch nicht alles, tut uns leid
*/
var Sequenzmemory;
(function (Sequenzmemory) {
    window.addEventListener("load", handleLoad);
    let letters;
    let buildCards = 0;
    let showCardsArray = [];
    let checkLast = [];
    let gamefield;
    let formData;
    let cardsize;
    let backgroundcolor;
    let cardcolor;
    let font;
    let fontcolor;
    function handleLoad(_event) {
        console.log("handleLoad");
        letters = document.getElementById("Button1");
        letters.addEventListener("click", enterTerm);
        let showCards = document.querySelector(".start");
        showCards.addEventListener("click", enterTerm);
        const targetDiv = document.getElementById("settings");
        const btn = document.getElementById("Button1");
        const title2 = document.getElementById("title2");
        btn.onclick = function () {
            if (targetDiv.style.display !== "none") {
                targetDiv.style.display = "none";
                title2.style.display = "none";
            }
            else {
                targetDiv.style.display = "block";
                title2.style.display = "block";
            }
        };
        // Install listeners on fieldsets
        let fieldsets = document.querySelectorAll("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        console.log();
        if (_event.type == "change")
            console.warn("Change: " + target.name + " = " + target.value, _event);
        else
            console.log("Input: " + target.name + " = " + target.value, _event);
        // Handling checkbox
        if (target.type == "checkbox")
            console.log("Checked: " + target.name + " = " + target.checked);
    }
    function enterTerm(_event) {
        var a = prompt("Enter some text", "");
        if (a != null) {
            let arr = a.split("");
            shuffle(arr);
            console.log(arr);
        }
    }
    function showCards(_input) {
        gamefield = document.createElement("div");
        gamefield.style.backgroundColor = formData.get("background")?.toString();
        let card = document.createElement("span");
        let body = document.querySelector("body");
        body.appendChild(gamefield);
        card.innerHTML = _input;
        card.classList.add("card");
        card.classList.add("hidden");
        showCardsArray.push(card);
        checkLast.push(card);
        card.addEventListener("click", flipCard);
        card.style.width = cardsize + "px";
        card.style.height = cardsize + "px";
        if (backgroundcolor) {
            card.style.backgroundColor = backgroundcolor.toString();
        }
        if (cardcolor) {
            card.style.background = cardcolor.toString();
        }
        if (fontcolor) {
            card.style.color = fontcolor.toString();
        }
        if (font) {
            card.style.fontFamily = font.toString();
        }
    }
    function flipCard(_event) {
        let target = _event.target;
        if (target.classList.contains("card")) {
            buildCards++;
            if (!(buildCards > 2) && target.classList.contains("hidden") && target != showCardsArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    showCardsArray.push(target);
                }
            }
            else {
                buildCards--;
            }
            if (buildCards == 2) {
                setTimeout(checkCard, 500);
            }
        }
    }
    function checkCard() {
        if (showCardsArray[0].innerHTML == showCardsArray[1].innerHTML) {
            for (let i = 0; i < 2; i++) {
                showCardsArray[i].classList.remove("open");
                showCardsArray[i].classList.add("done");
            }
            checkLast.splice(0, 2);
        }
        else {
            for (let i = 0; i < showCardsArray.length; i++) {
                showCardsArray[i].classList.remove("open");
                showCardsArray[i].classList.add("hidden");
            }
        }
        showCardsArray = [];
        buildCards = 0;
        checkWin();
    }
    function checkWin() {
        if (checkLast.length == 0) {
            alert("You won!");
        }
    }
    // tslint:disable-next-line: no-any
    function shuffle(array) {
        // tslint:disable-next-line: no-any
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
})(Sequenzmemory || (Sequenzmemory = {}));
//# sourceMappingURL=SequenzMemory.js.map