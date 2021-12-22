"use strict";
var L10_2_GoldenerHerbstPolymorphie;
(function (L10_2_GoldenerHerbstPolymorphie) {
    class Moveable {
        position;
        velocity;
        constructor(_velocity, _position) {
            //console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_2_GoldenerHerbstPolymorphie.Vector(0, 0);
            if (_velocity)
                this.velocity = _velocity.copy();
            else
                this.velocity = new L10_2_GoldenerHerbstPolymorphie.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("Moveable move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_2_GoldenerHerbstPolymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_2_GoldenerHerbstPolymorphie.crc2.canvas.height;
            if (this.position.x > L10_2_GoldenerHerbstPolymorphie.crc2.canvas.width)
                this.position.x -= L10_2_GoldenerHerbstPolymorphie.crc2.canvas.width;
            if (this.position.y > L10_2_GoldenerHerbstPolymorphie.crc2.canvas.height)
                this.position.y -= L10_2_GoldenerHerbstPolymorphie.crc2.canvas.height;
        }
        draw() {
            // console.log("Movable draw");
        }
    }
    L10_2_GoldenerHerbstPolymorphie.Moveable = Moveable;
})(L10_2_GoldenerHerbstPolymorphie || (L10_2_GoldenerHerbstPolymorphie = {}));
//# sourceMappingURL=Moveable.js.map