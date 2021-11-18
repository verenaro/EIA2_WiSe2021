namespace L08_1_GenerativeKunst {
    interface Vector {
        x: number;
        y: number;
    }
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        showBubbles({ x: 800, y: 600 }, { x: 800, y: 600 });
        showBiggerBubbles({ x: 800, y: 600 }, { x: 800, y: 600 });
        //drawEllipse( 400, 300 );
        drawLines({ x: 0, y: 600 }, 300, 50);
        drawTest();
        



        for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * 400;
            let y: number = Math.random() * 200;
            drawSquares(x, y);
        }









    }
    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "blue");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function showBubbles(_position: Vector, _size: Vector): void {
        console.log("Bubbles", _position, _size);
        let shownParticles: number = 100;
        let radiusParticles: number = 5;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < shownParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 1) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function showBiggerBubbles(_position: Vector, _size: Vector): void {
        console.log("BigBubbles", _position, _size);
        let shownParticles: number = 100;
        let radiusParticles: number = 25;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "lightblue");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < shownParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 1) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawLines(_position: Vector, _min: number, _max: number): void {
        console.log("Lines");
        let stepMin: number = 5;
        let stepMax: number = 30;
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
        gradient.addColorStop(1, "white");
        gradient.addColorStop(0.9, "lightblue");
        gradient.addColorStop(0, "blue");

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawSquares(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.rotate(20 * Math.PI / 180);
        crc2.fillStyle = "purple";
        crc2.fillRect(_x + 100, 200, _y + 30, 30);
        crc2.closePath();
        crc2.fill();
        console.log(_x, _y);
    }

    function drawTest(): void {

        crc2.beginPath();
        crc2.moveTo(2.1, 1);
        crc2.lineTo(2.1, 10);
        crc2.moveTo(4.5, 1);
        crc2.lineTo(4.5, 10);
        crc2.moveTo(7.5, 1);
        crc2.lineTo(10.5, 10);
        crc2.stroke();
    }
    /*function drawEllipse(_x: number, _y: number): void {


        crc2.beginPath();
        crc2.ellipse(60, 75, 50, 30, Math.PI * .25, 0, Math.PI * 1.5);
        crc2.fillStyle = "red";
        crc2.fill();

        crc2.fillStyle = "blue";
        crc2.beginPath();
        crc2.ellipse(150, 75, 50, 30, Math.PI * .25, 0, Math.PI);
        crc2.fill();

        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
        crc2.fill();

        
        }
    }*/
}
