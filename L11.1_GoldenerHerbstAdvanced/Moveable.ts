namespace L11_1_GoldenerHerbst_Advanced {
    export abstract class Moveable {
        public position: Vector;
        public velocity: Vector;
        public size: number;
       

        constructor(_position: Vector) {
            //console.log("Moveable constructor");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);


        }
        public move(_timeslice: number): void {
            //console.log("Moveable move");
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

        }
        public draw(): void {
            // console.log("Movable draw");

        }
        
    }





}