"use strict";
/*Aufgabe: L.03_SequenmemorySettings
Name: Verena Rothweiler
Matrikel: 270156
Datum:
Quellen: Zusammenarbeit mit Neslisah Koc
*/
var GoldenerHerbst;
(function (GoldenerHerbst) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        drawBackground();
        drawSun({ x: 850, y: 50 });
        drawClouds({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawClouds({ x: 200, y: 200 }, { x: 250, y: 75 });
        drawClouds({ x: 800, y: 300 }, { x: 250, y: 75 });
        drawSun({ x: 850, y: 50 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawTrees(600, 200);
        drawSquirrel(600, 200);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "orange");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawClouds(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 40;
        let radiusParticles = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawTrees(_x, _y) {
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
        crc2.fillStyle = "lightgreen";
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
        crc2.fillStyle = "green";
        crc2.arc(700, 700, 50, 0, 2 * Math.PI);
        crc2.arc(690, 650, 50, 0, 2 * Math.PI);
        crc2.arc(750, 650, 50, 0, 2 * Math.PI);
        crc2.arc(760, 700, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawSquirrel(_x, _y) {
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
        crc2.fillStyle = "white";
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
    }
})(GoldenerHerbst || (GoldenerHerbst = {}));
//# sourceMappingURL=GoldenerHerbst.js.map