"use strict";
var L10_2_GoldenerHerbstPolymorphie;
(function (L10_2_GoldenerHerbstPolymorphie) {
    class Leaf extends L10_2_GoldenerHerbstPolymorphie.Moveable {
        _size;
        constructor(_size, _position, _velocity) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_2_GoldenerHerbstPolymorphie.Vector(0, 0);
            this.velocity = new L10_2_GoldenerHerbstPolymorphie.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        draw() {
            let nParticles = 15;
            let radiusParticles = 10;
            let particle = new Path2D();
            let gradient = L10_2_GoldenerHerbstPolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
            particle.arc(0, 0, radiusParticles, 0, 0.9 * Math.PI);
            gradient.addColorStop(0, "orange");
            L10_2_GoldenerHerbstPolymorphie.crc2.save();
            L10_2_GoldenerHerbstPolymorphie.crc2.translate(0, 0);
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_2_GoldenerHerbstPolymorphie.crc2.save();
                L10_2_GoldenerHerbstPolymorphie.crc2.restore();
                let x = (Math.random() - 0.5) * this._size;
                let y = -(Math.random() * this._size);
                L10_2_GoldenerHerbstPolymorphie.crc2.translate(x, y);
                L10_2_GoldenerHerbstPolymorphie.crc2.fill(particle);
                L10_2_GoldenerHerbstPolymorphie.crc2.restore();
            }
            L10_2_GoldenerHerbstPolymorphie.crc2.restore();
        }
        move(_timeslice) {
            console.log("move Leaf");
        }
    }
    L10_2_GoldenerHerbstPolymorphie.Leaf = Leaf;
})(L10_2_GoldenerHerbstPolymorphie || (L10_2_GoldenerHerbstPolymorphie = {}));
//# sourceMappingURL=Leaf.js.map