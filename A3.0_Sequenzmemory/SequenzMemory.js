"use strict";
/*
Aufgabe: <L3.0>
Name: <Verena Rothweiler>
Matrikel: <270156>
Datum: <Datum der letzten Bearbeitung>
Quellen: <Neslisah Koc>
*/
var Sequenzmemory;
(function (Sequenzmemory) {
    window.addEventListener("load", handleLoad);
    let letters;
    let letterArray;
    let showCards = 0;
    let showCardsArray = [];
    let nodeList;
    let checkLast = [];
    function handleLoad(_event) {
        console.log("handleLoad");
        letters = document.getElementById("Button1");
        letters.addEventListener("click", promptLetters);
        let fieldsets = document.querySelectorAll("fieldset");
        let showCards = document.querySelector(".start");
        showCards.addEventListener("click", main);
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
    let formData;
    let cardsize;
    let backgroundcolor;
    let cardcolor;
    let fontcolor;
    let font;
    function createCard(_cardContent) {
        let card = document.createElement("div");
        card.innerHTML = "<p>" + _cardContent + "</p>";
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
            showCards++;
            if (!(showCards > 2) && target.classList.contains("hidden") && target != showCardsArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    showCardsArray.push(target);
                }
            }
            else {
                showCards--;
            }
            if (showCards == 2) {
                setTimeout(checkCard, 500);
            }
        }
    }
    function checkCard() {
        if (showCardsArray[0].innerHTML == letterArray[1].innerHTML) {
            for (let i = 0; i < 2; i++) {
                showCardsArray[i].classList.remove("open");
                showCardsArray[i].classList.add("done");
            }
            checkLast.splice(0, 2);
        }
        else {
            for (let i = 0; i < letterArray.length; i++) {
                showCardsArray[i].classList.remove("open");
                showCardsArray[i].classList.add("hidden");
            }
        }
        showCardsArray = [];
        showCards = 0;
        checkWin();
    }
    function checkWin() {
        if (checkLast.length == 0) {
            alert("You won!");
        }
    }
    function shuffleArray(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }
    function main(_event) {
        let fieldset = document.querySelector(".fsAdjustment");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }
        formData = new FormData(document.forms[0]);
        console.log(FormData);
        cardsize = Number(FormData.get("Slider"));
        backgroundcolor = FormData.get("BGColor");
        cardcolor = FormData.get("CColor");
        fontcolor = FormData.get("FColor");
        font = FormData.get("Radiogroup");
        for (let i = 0; i; i++) {
            createCard(letterArray[i]);
            createCard(letterArray[i]);
        }
        shuffleArray(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            let user = document.getElementById("user");
            user.appendChild(cardArray[i]);
        }
    }
    function promptLetters(_event) {
        var a = prompt("Enter some text", "");
        if (a != null) {
            document.getElementById("para").innerHTML = a;
        }
    }
})(Sequenzmemory || (Sequenzmemory = {}));
//# sourceMappingURL=SequenzMemory.js.map