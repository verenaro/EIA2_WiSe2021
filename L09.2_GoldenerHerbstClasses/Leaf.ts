namespace L09_2_GoldenerHerbst_Classes {

    export class Leaf {
        x: number;
        y: number;
        _position: number;
        _size: number;
        leafSpeed: number;
        leafColor: string;
        nParticles: number;
        radiusParticles: number;
    

        constructor() {
            this.drawLeaves();
            this.drawLeaves2();
            this.drawLeaves3();

        }

        drawLeaves(): void {
            let nParticles: number = 15;
            let radiusParticles: number = 10;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

            particle.arc(0, 0, radiusParticles, 0, 0.9 * Math.PI);
            gradient.addColorStop(0, "orange");


            crc2.save();
            crc2.translate(this.x, this.y);

            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                crc2.restore();
                let x: number = (Math.random() - 0.5) * this._size;
                let y: number = - (Math.random() * this._size);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();


        }
        drawLeaves2(): void {
            let nParticles: number = 15;
            let radiusParticles: number = 10;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

            particle.arc(0, 0, radiusParticles, 1, 0.8 * Math.PI);
            gradient.addColorStop(0, "red");


            crc2.save();
            crc2.translate(this.x, this.y);

            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                crc2.restore();
                let x: number = (Math.random() - 0.5) * this._size;
                let y: number = - (Math.random() * this._size);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();


        }
        drawLeaves3(): void {
            let nParticles: number = 15;
            let radiusParticles: number = 10;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

            particle.arc(0, 0, radiusParticles, 1, 0.8 * Math.PI);
            gradient.addColorStop(0, "green");


            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.rotate(5);


            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                crc2.restore();
                let x: number = (Math.random() - 0.5) * this._size;
                let y: number = - (Math.random() * this._size);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();



        }
        moveLeaf(): void {
            this.x += this.leafSpeed * (+0.3); // - nach links und + nach rechts           
        }
        moveLeaf2(): void {
            this.x += this.leafSpeed * (+0.2); // - nach links und + nach rechts           
        }
        moveLeaf3(): void {
            this.x += this.leafSpeed * (-0.5); // - nach links und + nach rechts         
        }
    }
}