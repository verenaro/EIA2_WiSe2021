"use strict";
var L08_1_GenerativeKunst;
(function (L08_1_GenerativeKunst) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        showBubbles({ x: 800, y: 600 }, { x: 800, y: 600 });
        showBiggerBubbles({ x: 800, y: 600 }, { x: 800, y: 600 });
        drawLines({ x: 0, y: 600 }, 300, 50);
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * 400;
            let y = Math.random() * 200;
            drawSquares(x, y);
        }
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "blue");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function showBubbles(_position, _size) {
        console.log("Bubbles", _position, _size);
        let shownParticles = 100;
        let radiusParticles = 5;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < shownParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 1) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function showBiggerBubbles(_position, _size) {
        console.log("BigBubbles", _position, _size);
        let shownParticles = 100;
        let radiusParticles = 25;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "lightblue");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < shownParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 1) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawLines(_position, _min, _max) {
        console.log("Lines");
        let stepMin = 5;
        let stepMax = 30;
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
        gradient.addColorStop(1, "white");
        gradient.addColorStop(0.9, "lightblue");
        gradient.addColorStop(0, "blue");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawSquares(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.fillRect(-_x + 100, 200, _y + 30, 30);
        crc2.closePath();
        crc2.fillStyle = "purple";
        crc2.fill();
    }
})(L08_1_GenerativeKunst || (L08_1_GenerativeKunst = {}));
//# sourceMappingURL=GenerativeKunst.js.map