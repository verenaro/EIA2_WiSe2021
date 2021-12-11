namespace L09_2_GoldenerHerbst_Classes {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement | null;
    let imgData: ImageData;
    let oneCloud: Cloud[] = [];
    let orangeLeaf: Leaf[] = [];
    let redLeaf: Leaf[] = [];
    let greenLeaf: Leaf[] = [];

    function handleLoad(_event: Event): void {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        let backGround: Background = new Background;
        console.log(backGround);
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        //push Clouds into array
        for (let i: number = 0; i < 6; i++) {
            let allClouds: Cloud = new Cloud();
            allClouds.x = Math.random() * crc2.canvas.width;
            allClouds.y = Math.random() * crc2.canvas.height - 410;
            allClouds.cloudSpeed = (Math.random() + 1) * 0.5;
            oneCloud.push(allClouds);

        }

        window.setTimeout(animate, 5);
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //push Leaves into array
        for (let i: number = 0; i < 10; i++) {
            let allLeaves: Leaf = new Leaf();
            allLeaves.x = Math.random() * crc2.canvas.width;
            allLeaves.y = Math.random() * crc2.canvas.height + 400;
            allLeaves.leafSpeed = (Math.random() + 1) * 0.5;
            orangeLeaf.push(allLeaves);

        }

        window.setTimeout(animate, 5);
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 10; i++) {
            let allLeaves: Leaf = new Leaf();
            allLeaves.x = Math.random() * crc2.canvas.width;
            allLeaves.y = Math.random() * crc2.canvas.height + 350;
            allLeaves.leafSpeed = (Math.random() + 1) * 0.5;
            redLeaf.push(allLeaves);

        }

        window.setTimeout(animate, 5);
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 10; i++) {
            let allLeaves: Leaf = new Leaf();
            allLeaves.x = Math.random() * crc2.canvas.width;
            allLeaves.y = Math.random() * crc2.canvas.height + 400;
            allLeaves.leafSpeed = (Math.random() + 1) * 0.5;
            greenLeaf.push(allLeaves);

        }

        window.setTimeout(animate, 5);

    }

    //animate Clouds
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < oneCloud.length; i++) {
            oneCloud[i].moveCloud();
            if (oneCloud[i].x > + 1000) {
                oneCloud[i].x = canvas.width - 1200;
            }
        }
        drawCloud();
        window.setTimeout(animate, 5);

        //animate Leaves
        for (let i: number = 0; i < orangeLeaf.length; i++) {
            orangeLeaf[i].moveLeaf();
            if (orangeLeaf[i].x > + 1000) {
                orangeLeaf[i].x = canvas.width - 1200;
            }
            redLeaf[i].moveLeaf2();
            if (redLeaf[i].x > + 1000) {
                redLeaf[i].x = canvas.width - 1200;
            }
            greenLeaf[i].moveLeaf3();
            if (greenLeaf[i].x < -10) {
                greenLeaf[i].x = canvas.width + 0.5;
            }
        }
        drawLeaf();
        window.setTimeout(animate, 5);

    }

    function drawCloud(): void {
        for (let i: number = 0; i < oneCloud.length; i++)
            oneCloud[i].drawClouds();

    }
    function drawLeaf(): void {
        for (let i: number = 0; i < orangeLeaf.length; i++)
            orangeLeaf[i].drawLeaves();
        for (let i: number = 0; i < redLeaf.length; i++)
            redLeaf[i].drawLeaves2();
        for (let i: number = 0; i < greenLeaf.length; i++)
            greenLeaf[i].drawLeaves3();



    }



}







