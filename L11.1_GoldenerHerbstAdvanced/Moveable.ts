namespace L11_1_GoldenerHerbst_Advanced {
    export class Moveable {
        public position: Vector;
        public velocity: Vector;
        public size: number;
        public expendable: boolean = false;
        protected eatRadius: number = 0;

        constructor(_position?: Vector) {
            //console.log("Moveable constructor");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(750, 470);

            this.velocity = new Vector(1000, 0);


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
        public isEatenBy(_squirrel: Moveable): boolean {
            let difference: Vector = Vector.getDifference(this.position, _squirrel.position);
            if (this.eatRadius + _squirrel.eatRadius < difference.length)
                return false;

            return true;
        }

        public eat(): void {
            console.log("Eat", this);
            this.expendable = true;
        }
    }





}