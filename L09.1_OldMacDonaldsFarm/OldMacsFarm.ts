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
        grass: 50,
        corn: 60,
        oats: 45,
        hay: 35,
        meat: 40

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
        leftFood.grass = 20;
        leftFood.corn = 30;
        leftFood.oats = 25;
        leftFood.hay = 15;
        leftFood.meat = 10;
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

        cowDiv.innerHTML += "<br>" + "I ate " + animals[0].storage + " kg of " + animals[0].food + "<br>";
        dogDiv.innerHTML += "<br>" + "I ate " + animals[1].storage + " kg of " + animals[1].food + "<br>";
        chickenDiv.innerHTML += "<br>" + "I ate " + animals[2].storage + " " + animals[2].food + "<br>";
        goatDiv.innerHTML += "<br>" + "I ate " + animals[3].storage + " kg of " + animals[3].food + "<br>";
        sheepDiv.innerHTML += "<br>" + "I ate " + animals[4].storage + " kg of " + animals[4].food + "<br>";

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
        //console.log("You have " + storageLeft.hay + " kg hay left.");
        leftFood.corn -= animals[1].storage;
        //console.log("You have " + storageLeft.meat + " kg meat left.");
        leftFood.oats -= animals[2].storage;
        //console.log("You have " + storageLeft.mice + " mice left.");
        leftFood.hay -= animals[3].storage;
        //console.log("You have " + storageLeft.corn + " kg corn left.");
        leftFood.meat -= animals[4].storage;
        //console.log("You have " + storageLeft.grass + " kg grass left.");
        let storageDiv: HTMLElement = document.getElementById("storage");
        storageDiv.innerHTML = "Storage:" + "<br>" + "<br>" + leftFood.grass + " kg grass " + "<br>" + leftFood.corn + " kg corn " + "<br>" + leftFood.oats + " kg oats " + "<br>" + leftFood.hay + " kg hay " + "<br>" + leftFood.meat + " kg grass" + "<br>";
    }
}