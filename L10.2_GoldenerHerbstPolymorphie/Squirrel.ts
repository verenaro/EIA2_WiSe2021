namespace L10_2_GoldenerHerbstPolymorphie {
    export class Squirrel extends Moveable {
        constructor(_position: Vector, _velocity: Vector) {
            super(_position);

        }
        draw(): void {
            //Body
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.arc(130, 19, 30, 0, 2 * Math.PI);
            crc2.arc(132, -23, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(125, -27, 2.5, 0, 2 * Math.PI);
            crc2.arc(138, -27, 2.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Mouth
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(131, -19, 2.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Ears
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.arc(143, -38, 5, 0, 2 * Math.PI);
            crc2.arc(+ 120, + -38, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Paws
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(125, 10, 3, 0, 2 * Math.PI);
            crc2.arc(142, 10, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Paws2
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.arc(142, 45, 5, 0, 2 * Math.PI);
            crc2.arc(120, 45, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Tail
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.arc(167, -10, 17, 0, 2 * Math.PI);
            crc2.arc(167, 0, 17, 0, 2 * Math.PI);
            crc2.arc(+ 160, 30, 17, 0, 2 * Math.PI);
            crc2.arc(165, 10, 16, 0, 2 * Math.PI);
            crc2.arc(165, 20, 16, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();



        }
        move(_timeslice: number): void {
            console.log("move Squirrel");
        }

    }

}