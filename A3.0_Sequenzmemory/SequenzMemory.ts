/*
Aufgabe: <L3.0>
Name: <Verena Rothweiler>
Matrikel: <270156>
Datum: <13.11.21.>
Quellen: <Neslisah Koc>
Leider funktioniert noch nicht alles, tut uns leid
*/
namespace Sequenzmemory {

    window.addEventListener("load", handleLoad);
    let letters: HTMLElement; //Eingabe
    let arr: string; // gemischte Eingabe
    let buildCards: number = 0;
    let showCardsArray: HTMLElement[] = [];
    let checkLast: HTMLElement[] = [];
    let gamefield: HTMLDivElement;
    let formData: FormData;
    let cardsize: number;
    let backgroundcolor: FormDataEntryValue | null;
    let cardcolor: FormDataEntryValue | null;
    let font: FormDataEntryValue | null;
    let fontcolor: FormDataEntryValue | null;



    function handleLoad(_event: Event): void {
        console.log("handleLoad");
        letters = <HTMLInputElement>document.getElementById("Button1");
        letters.addEventListener("click", enterTerm);
       // let showCards: HTMLElement = <HTMLElement>document.querySelector(".start");
       // showCards.addEventListener("click", showCards);


        const targetDiv: HTMLElement = document.getElementById("settings");
        const btn: HTMLElement = document.getElementById("Button1");
        const title2: HTMLElement = document.getElementById("title2");
        btn.onclick = function (): void {
            if (targetDiv.style.display !== "none") {
                targetDiv.style.display = "none";
                title2.style.display = "none";
            } else {
                targetDiv.style.display = "block";
                title2.style.display = "block";
            }
        };

        
    }

  /*  function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log();
        if (_event.type == "change")
            console.warn("Change: " + target.name + " = " + target.value, _event);
        else
            console.log("Input: " + target.name + " = " + target.value, _event);

        // Handling checkbox
        if (target.type == "checkbox")
            console.log("Checked: " + target.name + " = " + target.checked);

    }*/


    function enterTerm(_event: Event): void {
        let a: string = prompt("Enter some text", "");
        if (a != null) {
            let arr: string[] = a.split("");
            shuffle(arr);
            console.log(arr);


        }
        showCards();

    }
    function showCards(): void {
        gamefield = document.createElement("div");
        gamefield.style.backgroundColor = <string>formData.get("background")?.toString();
        let card: HTMLSpanElement = document.createElement("span");

        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.appendChild(gamefield);


        card.innerHTML = arr;
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


    function flipCard(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("card")) {
            buildCards++;
            if (!(buildCards > 2) && target.classList.contains("hidden") && target != showCardsArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    showCardsArray.push(target);
                }
            } else {
                buildCards--;
            }
            if (buildCards == 2) {
                setTimeout(checkCard, 500);
            }
        }
    }

    function checkCard(): void {
        if (showCardsArray[0].innerHTML == showCardsArray[1].innerHTML) {
            for (let i: number = 0; i < 2; i++) {
                showCardsArray[i].classList.remove("open");
                showCardsArray[i].classList.add("done");
            }
            checkLast.splice(0, 2);
        } else {
            for (let i: number = 0; i < showCardsArray.length; i++) {
                showCardsArray[i].classList.remove("open");
                showCardsArray[i].classList.add("hidden");
            }
        }
        showCardsArray = [];
        buildCards = 0;
        checkWin();
    }

    function checkWin(): void {
        if (checkLast.length == 0) {
            alert("You won!");
        }
    }
    // tslint:disable-next-line: no-any
    function shuffle(array: any): any {
        // tslint:disable-next-line: no-any
        var currentIndex: any = array.length, temporaryValue: any, randomIndex: any;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
}













