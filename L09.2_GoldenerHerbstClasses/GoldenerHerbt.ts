namespace L09_2_GoldenerHerbst_Classes {
    export interface Vector {
        x: number;
        y: number; }
        
    export class GoldenerHerbst {


        constructor() {
            let golden: number = 0.62;
            let horizon: number = crc2.canvas.height * golden;
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
        drawBackground(): void {
            console.log("Background");
            let golden: number = 0.62;
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(golden, "white");
            gradient.addColorStop(1, "darkgreen");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
        drawSun(_position: Vector): void {
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

        drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
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
        drawTrees(_position: Vector, _size: Vector, _color: string): void {
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
        drawSquirrel(_position: Vector, _size: Vector): void {
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
        drawNuts(_position: Vector, _size: Vector): void {
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
        drawFlowers(_position: Vector, _size: Vector, _color: string): void {
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




    }

}
