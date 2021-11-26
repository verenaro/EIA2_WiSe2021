/*Aufgabe: L.03_SequenmemorySettings
Name: Verena Rothweiler
Matrikel: 270156
Datum: 27.11.2021
Quellen: Zusammenarbeit mit Neslisah Koc
*/
namespace GoldenerHerbst {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let horizon: number = crc2.canvas.height * golden;



        drawBackground();
        drawSun({ x: 850, y: 50 });
        drawClouds({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawClouds({ x: 200, y: 200 }, { x: 250, y: 75 });
        drawClouds({ x: 800, y: 300 }, { x: 250, y: 75 });
        drawSun({ x: 850, y: 50 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawTrees(600, 200);
        drawSquirrel(600, 700);
        drawNuts({ x: 880, y: 750 }, { x: 130, y: 75 });
        drawLeaves({ x: 500, y: 800 }, { x: 1000, y: 400 });
        drawLeaves2({ x: 500, y: 800 }, { x: 1000, y: 400 });
        drawLeaves3({ x: 500, y: 800 }, { x: 1000, y: 400 });
        drawFlowers(1000, 800);











    }
    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "orange");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position: Vector): void {
        console.log("Sun", _position);
        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();


    }
    function drawClouds(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);
        let nParticles: number = 40;
        let radiusParticles: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();


        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }
    function drawTrees(_x: number, _y: number): void {
        //Baum1
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(300, 600, 25, 110);

        crc2.beginPath();
        crc2.fillStyle = "orange";
        crc2.arc(290, 590, 50, 0, 2 * Math.PI);
        crc2.arc(300, 550, 50, 0, 2 * Math.PI);
        crc2.arc(330, 550, 50, 0, 2 * Math.PI);
        crc2.arc(340, 590, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Baum2
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(600, 550, 20, 80);

        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.arc(600, 550, 25, 0, 2 * Math.PI);
        crc2.arc(620, 530, 25, 0, 2 * Math.PI);
        crc2.arc(600, 530, 25, 0, 2 * Math.PI);
        crc2.arc(625, 545, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Baum3
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(850, 550, 20, 90);

        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.arc(880, 550, 25, 0, 2 * Math.PI);
        crc2.arc(840, 550, 25, 0, 2 * Math.PI);
        crc2.arc(850, 540, 30, 0, 2 * Math.PI);
        crc2.arc(875, 540, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Baum4
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(700, 700, 30, 100);

        crc2.beginPath();
        crc2.fillStyle = "orange";
        crc2.arc(700, 700, 50, 0, 2 * Math.PI);
        crc2.arc(690, 650, 50, 0, 2 * Math.PI);
        crc2.arc(750, 650, 50, 0, 2 * Math.PI);
        crc2.arc(760, 700, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

    }
    function drawSquirrel(_x: number, _y: number): void {
        //Body
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(550, 745, 30, 0, 2 * Math.PI);
        crc2.arc(550, 710, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Eyes
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(543, 705, 2.5, 0, 2 * Math.PI);
        crc2.arc(560, 705, 2.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Mouth
        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.arc(550, 715, 2.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Ears
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(540, 694, 5, 0, 2 * Math.PI);
        crc2.arc(560, 694, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Paws
        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.arc(540, 740, 3, 0, 2 * Math.PI);
        crc2.arc(560, 740, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Paws2
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(540, 772, 5, 0, 2 * Math.PI);
        crc2.arc(560, 772, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Tail
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(580, 752, 17, 0, 2 * Math.PI);
        crc2.arc(587, 712, 17, 0, 2 * Math.PI);
        crc2.arc(587, 722, 17, 0, 2 * Math.PI);
        crc2.arc(587, 732, 17, 0, 2 * Math.PI);
        crc2.arc(587, 742, 17, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //SecondSquirrel
        //Body
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(450, 600, 20, 0, 2 * Math.PI);
        crc2.arc(450, 575, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Eyes
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(445, 573, 2.5, 0, 2 * Math.PI);
        crc2.arc(458, 573, 2.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Mouth
        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.arc(450, 580, 2.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Ears
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(457, 563, 5, 0, 2 * Math.PI);
        crc2.arc(443, 563, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Paws
        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.arc(445, 595, 3, 0, 2 * Math.PI);
        crc2.arc(455, 595, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Paws2
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(440, 615, 5, 0, 2 * Math.PI);
        crc2.arc(460, 615, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Tail
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(465, 605, 12, 0, 2 * Math.PI);
        crc2.arc(470, 600, 12, 0, 2 * Math.PI);
        crc2.arc(475, 595, 12, 0, 2 * Math.PI);
        crc2.arc(480, 590, 12, 0, 2 * Math.PI);

        crc2.closePath();
        crc2.fill();

    }
    function drawNuts(_position: Vector, _size: Vector): void {
        console.log("Nuts", _position, _size);
        let nParticles: number = 10;
        let radiusParticles: number = 5;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "brown");


        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawLeaves(_position: Vector, _size: Vector): void {
        console.log("Leave", _position, _size);
        let nParticles: number = 15;
        let radiusParticles: number = 10;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

        particle.arc(0, 0, radiusParticles, 0, 0.9 * Math.PI);
        gradient.addColorStop(0, "orange");


        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();


    }
    function drawLeaves2(_position: Vector, _size: Vector): void {
        console.log("Leave2", _position, _size);
        let nParticles: number = 15;
        let radiusParticles: number = 10;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

        particle.arc(0, 0, radiusParticles, 1, 0.8 * Math.PI);
        gradient.addColorStop(0, "red");


        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();


    }
    function drawLeaves3(_position: Vector, _size: Vector): void {
        console.log("Leave2", _position, _size);
        let nParticles: number = 15;
        let radiusParticles: number = 10;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

        particle.arc(0, 0, radiusParticles, 1, 0.8 * Math.PI);
        gradient.addColorStop(0, "green");


        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.rotate(5);


        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();



    }
    function drawFlowers(_x: number, _y: number): void {
        //Flower1
        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.fillRect(200, 600, 5, 20);


        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.arc(192, 600, 7, 0, 2 * Math.PI);
        crc2.arc(193, 593, 7, 0, 2 * Math.PI);
        crc2.arc(205, 590, 7, 0, 2 * Math.PI);
        crc2.arc(210, 600, 7, 0, 2 * Math.PI);
        crc2.arc(200, 605, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "purple";
        crc2.arc(202, 600, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
}
