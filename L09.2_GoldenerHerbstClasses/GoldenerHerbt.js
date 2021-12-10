"use strict";
var L09_2_GoldenerHerbst_Classes;
(function (L09_2_GoldenerHerbst_Classes) {
    class GoldenerHerbst {
        constructor() {
            let golden = 0.62;
            let horizon = L09_2_GoldenerHerbst_Classes.crc2.canvas.height * golden;
            this.drawBackground();
            this.drawSun({ x: 850, y: 50 });
            this.drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
            this.drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
            this.drawTrees({ x: 400, y: 200 }, { x: 600, y: 200 }, "orange");
            this.drawTrees({ x: 800, y: 100 }, { x: 600, y: 200 }, "brown");
            this.drawTrees({ x: 1100, y: 150 }, { x: 600, y: 200 }, "darkgreen");
            this.drawSquirrel({ x: 300, y: 600 }, { x: 250, y: 250 });
            this.drawSquirrel({ x: 750, y: 700 }, { x: 250, y: 250 });
            this.drawSquirrel({ x: 450, y: 650 }, { x: 250, y: 250 });
            this.drawNuts({ x: 800, y: 730 }, { x: 130, y: 75 });
            this.drawFlowers({ x: 500, y: 150 }, { x: 300, y: 200 }, "lightblue");
            this.drawFlowers({ x: 700, y: 250 }, { x: 300, y: 200 }, "purple");
            this.drawFlowers({ x: 200, y: 280 }, { x: 300, y: 200 }, "pink");
        }
        drawBackground() {
            console.log("Background");
            let golden = 0.62;
            let gradient = L09_2_GoldenerHerbst_Classes.crc2.createLinearGradient(0, 0, 0, L09_2_GoldenerHerbst_Classes.crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(golden, "white");
            gradient.addColorStop(1, "darkgreen");
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = gradient;
            L09_2_GoldenerHerbst_Classes.crc2.fillRect(0, 0, L09_2_GoldenerHerbst_Classes.crc2.canvas.width, L09_2_GoldenerHerbst_Classes.crc2.canvas.height);
        }
        drawSun(_position) {
            console.log("Sun", _position);
            let r1 = 30;
            let r2 = 150;
            let gradient = L09_2_GoldenerHerbst_Classes.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            L09_2_GoldenerHerbst_Classes.crc2.save();
            L09_2_GoldenerHerbst_Classes.crc2.translate(_position.x, _position.y);
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = gradient;
            L09_2_GoldenerHerbst_Classes.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.fill();
            L09_2_GoldenerHerbst_Classes.crc2.restore();
        }
        drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
            console.log("Mountains");
            let stepMin = 50;
            let stepMax = 150;
            let x = 0;
            L09_2_GoldenerHerbst_Classes.crc2.save();
            L09_2_GoldenerHerbst_Classes.crc2.translate(_position.x, _position.y);
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            L09_2_GoldenerHerbst_Classes.crc2.moveTo(0, 0);
            L09_2_GoldenerHerbst_Classes.crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -_min - Math.random() * (_max - _min);
                L09_2_GoldenerHerbst_Classes.crc2.lineTo(x, y);
            } while (x < L09_2_GoldenerHerbst_Classes.crc2.canvas.width);
            L09_2_GoldenerHerbst_Classes.crc2.lineTo(x, 0);
            L09_2_GoldenerHerbst_Classes.crc2.closePath();
            let gradient = L09_2_GoldenerHerbst_Classes.crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.7, _colorHigh);
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = gradient;
            L09_2_GoldenerHerbst_Classes.crc2.fill();
            L09_2_GoldenerHerbst_Classes.crc2.restore();
        }
        drawTrees(_position, _size, _color) {
            //Strunk
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = "brown";
            L09_2_GoldenerHerbst_Classes.crc2.fillRect(_position.x + -300, _position.y + 400, 25, 110);
            //Tree
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = _color;
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x - 310, _position.y + 360, 50, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x - 250, _position.y + 320, 50, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x - 260, _position.y + 360, 50, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x - 300, _position.y + 320, 50, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.closePath();
            L09_2_GoldenerHerbst_Classes.crc2.fill();
            L09_2_GoldenerHerbst_Classes.crc2.restore();
        }
        drawSquirrel(_position, _size) {
            //Body
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = "brown";
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 130, _position.y + 19, 30, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 132, _position.y + -23, 20, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.closePath();
            L09_2_GoldenerHerbst_Classes.crc2.fill();
            //Eyes
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = "black";
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 125, _position.y + -27, 2.5, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 138, _position.y + -27, 2.5, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.closePath();
            L09_2_GoldenerHerbst_Classes.crc2.fill();
            //Mouth
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = "grey";
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 131, _position.y + -19, 2.5, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.closePath();
            L09_2_GoldenerHerbst_Classes.crc2.fill();
            //Ears
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = "brown";
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 143, _position.y + -38, 5, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 120, _position.y + -38, 5, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.closePath();
            L09_2_GoldenerHerbst_Classes.crc2.fill();
            //Paws
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = "grey";
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 125, _position.y + 10, 3, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 142, _position.y + 10, 3, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.closePath();
            L09_2_GoldenerHerbst_Classes.crc2.fill();
            //Paws2
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = "brown";
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 142, _position.y + 45, 5, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 120, _position.y + 45, 5, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.closePath();
            L09_2_GoldenerHerbst_Classes.crc2.fill();
            //Tail
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = "brown";
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 167, _position.y + -10, 17, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 167, _position.y + 0, 17, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 160, _position.y + 30, 17, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 165, _position.y + 10, 16, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 165, _position.y + 20, 16, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.closePath();
            L09_2_GoldenerHerbst_Classes.crc2.fill();
        }
        drawNuts(_position, _size) {
            console.log("Nuts", _position, _size);
            let nParticles = 10;
            let radiusParticles = 5;
            let particle = new Path2D();
            let gradient = L09_2_GoldenerHerbst_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
            particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
            gradient.addColorStop(0, "brown");
            L09_2_GoldenerHerbst_Classes.crc2.save();
            L09_2_GoldenerHerbst_Classes.crc2.translate(_position.x, _position.y);
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_2_GoldenerHerbst_Classes.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                L09_2_GoldenerHerbst_Classes.crc2.translate(x, y);
                L09_2_GoldenerHerbst_Classes.crc2.fill(particle);
                L09_2_GoldenerHerbst_Classes.crc2.restore();
            }
            L09_2_GoldenerHerbst_Classes.crc2.restore();
        }
        drawFlowers(_position, _size, _color) {
            //Flower
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = "green";
            L09_2_GoldenerHerbst_Classes.crc2.fillRect(_position.x + 100, _position.y + 400, 5, 20);
            L09_2_GoldenerHerbst_Classes.crc2.closePath();
            L09_2_GoldenerHerbst_Classes.crc2.fill();
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = _color;
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 100, _position.y + 382, 8, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 98, _position.y + 387, 8, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 110, _position.y + 383, 8, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 113, _position.y + 390, 8, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 113, _position.y + 395, 8, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 112, _position.y + 397, 8, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 104, _position.y + 400, 8, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 100, _position.y + 400, 8, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(_position.x + 98, _position.y + 394, 8, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.closePath();
            L09_2_GoldenerHerbst_Classes.crc2.fill();
        }
    }
    L09_2_GoldenerHerbst_Classes.GoldenerHerbst = GoldenerHerbst;
})(L09_2_GoldenerHerbst_Classes || (L09_2_GoldenerHerbst_Classes = {}));
//# sourceMappingURL=GoldenerHerbt.js.map