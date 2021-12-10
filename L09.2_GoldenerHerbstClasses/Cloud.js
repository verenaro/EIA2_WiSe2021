"use strict";
var L09_2_GoldenerHerbst_Classes;
(function (L09_2_GoldenerHerbst_Classes) {
    class Cloud {
        x;
        y;
        cloudSpeed;
        drawClouds() {
            L09_2_GoldenerHerbst_Classes.crc2.beginPath();
            let radiusParticle = 3000;
            let particle = new Path2D();
            let gradient = L09_2_GoldenerHerbst_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 1)");
            L09_2_GoldenerHerbst_Classes.crc2.save();
            L09_2_GoldenerHerbst_Classes.crc2.fillStyle = gradient;
            L09_2_GoldenerHerbst_Classes.crc2.arc(this.x + 10, this.y + 30, 25, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(this.x + 50, this.y + 25, 40, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(this.x + 90, this.y + 20, 35, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.arc(this.x + 130, this.y + 20, 25, 0, 2 * Math.PI);
            L09_2_GoldenerHerbst_Classes.crc2.closePath();
            L09_2_GoldenerHerbst_Classes.crc2.fill();
            L09_2_GoldenerHerbst_Classes.crc2.restore();
        }
        moveCloud() {
            this.x += this.cloudSpeed * (+0.2); // - nach links und + nach rechts           
        }
    }
    L09_2_GoldenerHerbst_Classes.Cloud = Cloud;
})(L09_2_GoldenerHerbst_Classes || (L09_2_GoldenerHerbst_Classes = {}));
//# sourceMappingURL=Cloud.js.map