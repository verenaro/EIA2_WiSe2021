namespace L10_2_GoldenerHerbstPolymorphie {
    export class Leaf extends Moveable {

        _size: number;

        constructor(_size: number, _position: Vector, _velocity: Vector) {
            super(_position, _velocity);

            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        }
        draw(): void {
            let nParticles: number = 15;
            let radiusParticles: number = 10;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

            particle.arc(0, 0, radiusParticles, 0, 0.9 * Math.PI);
            gradient.addColorStop(0, "orange");


            crc2.save();
            crc2.translate(0, 0);

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
        move(_timeslice: number): void {
            console.log("move Leaf");
        }

    }
}
