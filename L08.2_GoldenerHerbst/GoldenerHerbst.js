"use strict";
/*Aufgabe: L.03_SequenmemorySettings
Name: Verena Rothweiler
Matrikel: 270156
Datum: 27.11.2021
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
        drawTrees({ x: 400, y: 200 }, { x: 600, y: 200 }, "orange");
        drawTrees({ x: 800, y: 100 }, { x: 600, y: 200 }, "brown");
        drawTrees({ x: 1100, y: 150 }, { x: 600, y: 200 }, "darkgreen");
        drawSquirrel({ x: 300, y: 600 }, { x: 250, y: 250 });
        drawSquirrel({ x: 750, y: 700 }, { x: 250, y: 250 });
        drawSquirrel({ x: 450, y: 650 }, { x: 250, y: 250 });
        drawNuts({ x: 800, y: 730 }, { x: 130, y: 75 });
        drawLeaves({ x: 500, y: 800 }, { x: 1000, y: 400 });
        drawLeaves2({ x: 500, y: 800 }, { x: 1000, y: 400 });
        drawLeaves3({ x: 500, y: 800 }, { x: 1000, y: 400 });
        drawFlowers({ x: 500, y: 150 }, { x: 300, y: 200 }, "lightblue");
        drawFlowers({ x: 700, y: 250 }, { x: 300, y: 200 }, "purple");
        drawFlowers({ x: 200, y: 280 }, { x: 300, y: 200 }, "pink");
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "darkgreen");
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
    function drawTrees(_position, _size, _color) {
        //Strunk
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(_position.x + -300, _position.y + 400, 25, 110);
        //Tree
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.arc(_position.x - 310, _position.y + 360, 50, 0, 2 * Math.PI);
        crc2.arc(_position.x - 250, _position.y + 320, 50, 0, 2 * Math.PI);
        crc2.arc(_position.x - 260, _position.y + 360, 50, 0, 2 * Math.PI);
        crc2.arc(_position.x - 300, _position.y + 320, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
    function drawSquirrel(_position, _size) {
        //Body
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(_position.x + 130, _position.y + 19, 30, 0, 2 * Math.PI);
        crc2.arc(_position.x + 132, _position.y + -23, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Eyes
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(_position.x + 125, _position.y + -27, 2.5, 0, 2 * Math.PI);
        crc2.arc(_position.x + 138, _position.y + -27, 2.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Mouth
        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.arc(_position.x + 131, _position.y + -19, 2.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Ears
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(_position.x + 143, _position.y + -38, 5, 0, 2 * Math.PI);
        crc2.arc(_position.x + 120, _position.y + -38, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Paws
        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.arc(_position.x + 125, _position.y + 10, 3, 0, 2 * Math.PI);
        crc2.arc(_position.x + 142, _position.y + 10, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Paws2
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(_position.x + 142, _position.y + 45, 5, 0, 2 * Math.PI);
        crc2.arc(_position.x + 120, _position.y + 45, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Tail
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(_position.x + 167, _position.y + -10, 17, 0, 2 * Math.PI);
        crc2.arc(_position.x + 167, _position.y + 0, 17, 0, 2 * Math.PI);
        crc2.arc(_position.x + 160, _position.y + 30, 17, 0, 2 * Math.PI);
        crc2.arc(_position.x + 165, _position.y + 10, 16, 0, 2 * Math.PI);
        crc2.arc(_position.x + 165, _position.y + 20, 16, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawNuts(_position, _size) {
        console.log("Nuts", _position, _size);
        let nParticles = 10;
        let radiusParticles = 5;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "brown");
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
    function drawLeaves(_position, _size) {
        console.log("Leave", _position, _size);
        let nParticles = 15;
        let radiusParticles = 10;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        particle.arc(0, 0, radiusParticles, 0, 0.9 * Math.PI);
        gradient.addColorStop(0, "orange");
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
    function drawLeaves2(_position, _size) {
        console.log("Leave2", _position, _size);
        let nParticles = 15;
        let radiusParticles = 10;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        particle.arc(0, 0, radiusParticles, 1, 0.8 * Math.PI);
        gradient.addColorStop(0, "red");
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
    function drawLeaves3(_position, _size) {
        console.log("Leave2", _position, _size);
        let nParticles = 15;
        let radiusParticles = 10;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        particle.arc(0, 0, radiusParticles, 1, 0.8 * Math.PI);
        gradient.addColorStop(0, "green");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.rotate(5);
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
    function drawFlowers(_position, _size, _color) {
        //Flower
        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.fillRect(_position.x + 100, _position.y + 400, 5, 20);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.arc(_position.x + 100, _position.y + 382, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 98, _position.y + 387, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 110, _position.y + 383, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 113, _position.y + 390, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 113, _position.y + 395, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 112, _position.y + 397, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 104, _position.y + 400, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 100, _position.y + 400, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 98, _position.y + 394, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
})(GoldenerHerbst || (GoldenerHerbst = {}));
//# sourceMappingURL=GoldenerHerbst.js.map