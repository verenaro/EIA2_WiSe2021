/*Aufgabe: L.03_SequenmemorySettings
Name: Verena Rothweiler
Matrikel: 270156
Datum: 04.12.2021
Quellen: Zusammenarbeit mit Neslisah Koc
*/
namespace L091_OldMacsFarm {

    let crc2: CanvasRenderingContext2D;

    let animals: Animal[] = [];

    interface Food {
        grass: number;
        corn: number;
        oats: number;
        hay: number;
        meat: number;
    }
    let leftFood: Food = {
        grass: 200,
        corn: 300,
        oats: 400,
        hay: 550,
        meat: 350

    };
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }

        console.log(canvas);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2);

        showAnimals();
        singSong();
        feedAnimals();
        leftFood.grass = 190;
        leftFood.corn = 270;
        leftFood.oats = 375;
        leftFood.hay = 538;
        leftFood.meat = 345;
        document.querySelector("#newday").addEventListener("click", feedAnimals);

    }
    function showAnimals(): void {
        console.log("Animals");
        let cow: Animal = new Animal("cow", "Muh", "grass", 10);
        let dog: Animal = new Animal("dog", "Wuff", "meat", 5);
        let chicken: Animal = new Animal("chicken", "Boak", "corn", 30);
        let goat: Animal = new Animal("goat", "Ähhh", "hay", 12);
        let sheep: Animal = new Animal("sheep", "Määh", "oats", 25);

        animals.push(cow);
        animals.push(dog);
        animals.push(chicken);
        animals.push(goat);
        animals.push(sheep);

        let cowDiv: HTMLElement = document.getElementById("cow");
        let dogDiv: HTMLElement = document.getElementById("dog");
        let chickenDiv: HTMLElement = document.getElementById("chicken");
        let goatDiv: HTMLElement = document.getElementById("goat");
        let sheepDiv: HTMLElement = document.getElementById("sheep");

        cowDiv.innerHTML = cow.species + "<br>";
        dogDiv.innerHTML = dog.species + "<br>";
        chickenDiv.innerHTML = chicken.species + "<br>";
        goatDiv.innerHTML = goat.species + "<br>";
        sheepDiv.innerHTML = sheep.species + "<br>";
    }
    function feedAnimals(): void {
        console.log("click");

        let cowDiv: HTMLElement = document.getElementById("cow");
        let dogDiv: HTMLElement = document.getElementById("dog");
        let chickenDiv: HTMLElement = document.getElementById("chicken");
        let goatDiv: HTMLElement = document.getElementById("goat");
        let sheepDiv: HTMLElement = document.getElementById("sheep");

        cowDiv.innerHTML += "<br>" + "The cow ate " + animals[0].storage + " kg of " + animals[0].food + "<br>";
        dogDiv.innerHTML += "<br>" + "The dog ate " + animals[1].storage + " kg of " + animals[1].food + "<br>";
        chickenDiv.innerHTML += "<br>" + "The chicken ate " + animals[2].storage + " " + animals[2].food + "<br>";
        goatDiv.innerHTML += "<br>" + "The goat ate " + animals[3].storage + " kg of " + animals[3].food + "<br>";
        sheepDiv.innerHTML += "<br>" + "The sheep ate " + animals[4].storage + " kg of " + animals[4].food + "<br>";

        showFood();
    }
    function singSong(): void {
        let cowDiv: HTMLElement = document.getElementById("cow");
        let dogDiv: HTMLElement = document.getElementById("dog");
        let chickenDiv: HTMLElement = document.getElementById("chicken");
        let goatDiv: HTMLElement = document.getElementById("goat");
        let sheepDiv: HTMLElement = document.getElementById("sheep");

        cowDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[0].noise + " " + animals[0].noise + "<br>";
        dogDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[1].noise + " " + animals[1].noise + "<br>";
        chickenDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[2].noise + " " + animals[2].noise + "<br>";
        goatDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[3].noise + " " + animals[3].noise + "<br>";
        sheepDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm. " + animals[4].noise + " " + animals[4].noise + "<br>";
    }
    function showFood(): void {
        leftFood.grass -= animals[0].storage;
        leftFood.meat -= animals[1].storage;
        leftFood.corn -= animals[2].storage;
        leftFood.hay -= animals[3].storage;
        leftFood.oats -= animals[4].storage;
        
        let storageDiv: HTMLElement = document.getElementById("storage");
        storageDiv.innerHTML = "Storage:" + "<br>" + "<br>" + leftFood.grass + " kg grass " + "<br>" + leftFood.corn + " kg corn " + "<br>" + leftFood.oats + " kg oats " + "<br>" + leftFood.hay + " kg hay " + "<br>" + leftFood.meat + " kg meat" + "<br>";
    }
}