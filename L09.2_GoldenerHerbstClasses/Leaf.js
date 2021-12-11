"use strict";
var L09_2_GoldenerHerbst_Classes;
(function (L09_2_GoldenerHerbst_Classes) {
    class Leaf {
        x;
        y;
        _size;
        leafSpeed;
        constructor() {
            this.drawLeaves();
            this.drawLeaves2();
            this.drawLeaves3();
        }
        drawLeaves() {
            let nParticles = 15;
            let radiusParticles = 10;
            let particle = new Path2D();
            let gradient = L09_2_GoldenerHerbst_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
            particle.arc(0, 0, radiusParticles, 0, 0.9 * Math.PI);
            gradient.addColorStop(0, "orange");
            L09_2_GoldenerHerbst_Classes.crc2.save();
            L09_2_GoldenerHerbst_Classes.crc2.translate(this.x, this.y);
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_2_GoldenerHerbst_Classes.crc2.save();
                L09_2_GoldenerHerbst_Classes.crc2.restore();
                let x = (Math.random() - 0.5) * this._size;
                let y = -(Math.random() * this._size);
                L09_2_GoldenerHerbst_Classes.crc2.translate(x, y);
                L09_2_GoldenerHerbst_Classes.crc2.fill(particle);
                L09_2_GoldenerHerbst_Classes.crc2.restore();
            }
            L09_2_GoldenerHerbst_Classes.crc2.restore();
        }
        drawLeaves2() {
            let nParticles = 15;
            let radiusParticles = 10;
            let particle = new Path2D();
            let gradient = L09_2_GoldenerHerbst_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
            particle.arc(0, 0, radiusParticles, 1, 0.8 * Math.PI);
            gradient.addColorStop(0, "red");
            L09_2_GoldenerHerbst_Classes.crc2.save();
            L09_2_GoldenerHerbst_Classes.crc2.translate(this.x, this.y);
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_2_GoldenerHerbst_Classes.crc2.save();
                L09_2_GoldenerHerbst_Classes.crc2.restore();
                let x = (Math.random() - 0.5) * this._size;
                let y = -(Math.random() * this._size);
                L09_2_GoldenerHerbst_Classes.crc2.translate(x, y);
                L09_2_GoldenerHerbst_Classes.crc2.fill(particle);
                L09_2_GoldenerHerbst_Classes.crc2.restore();
            }
            L09_2_GoldenerHerbst_Classes.crc2.restore();
        }
        drawLeaves3() {
            let nParticles = 15;
            let radiusParticles = 10;
            let particle = new Path2D();
            let gradient = L09_2_GoldenerHerbst_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
            particle.arc(0, 0, radiusParticles, 1, 0.8 * Math.PI);
            gradient.addColorStop(0, "green");
            L09_2_GoldenerHerbst_Classes.crc2.save();
            L09_2_GoldenerHerbst_Classes.crc2.translate(this.x, this.y);
            L09_2_GoldenerHerbst_Classes.crc2.rotate(5);
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_2_GoldenerHerbst_Classes.crc2.save();
                L09_2_GoldenerHerbst_Classes.crc2.restore();
                let x = (Math.random() - 0.5) * this._size;
                let y = -(Math.random() * this._size);
                L09_2_GoldenerHerbst_Classes.crc2.translate(x, y);
                L09_2_GoldenerHerbst_Classes.crc2.fill(particle);
                L09_2_GoldenerHerbst_Classes.crc2.restore();
            }
            L09_2_GoldenerHerbst_Classes.crc2.restore();
        }
        moveLeaf() {
            this.x += this.leafSpeed * (+0.3);
        }
        moveLeaf2() {
            this.x += this.leafSpeed * (+0.2);
        }
        moveLeaf3() {
            this.x += this.leafSpeed * (-0.5);
        }
    }
    L09_2_GoldenerHerbst_Classes.Leaf = Leaf;
})(L09_2_GoldenerHerbst_Classes || (L09_2_GoldenerHerbst_Classes = {}));
//# sourceMappingURL=Leaf.js.map