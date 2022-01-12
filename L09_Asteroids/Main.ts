namespace L09_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let moveables: Moveable[] = [];

    export let linewidth: number = 2;

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.lineWidth = linewidth;


        createPath();
        console.log("Asteroids paths: ", asteroidPaths);

        createAsteroids(5);
        //createShip();
        createUfo();

        canvas.addEventListener("ufoShoots", handleUfoShot);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20);
    }

    function shootProjectile(_origin: Vector): void {
        console.log("Shoot Projectile");
        let velocity: Vector = Vector.getRandom(100, 100);
        
        let projectile: Projectile = new Projectile(_origin, velocity);
        moveables.push(projectile);
    }
    function handleUfoShot(_event: Event): void {
        let ufo: Ufo = (<CustomEvent>_event).detail.ufo;
        shootProjectile(ufo.position);
    }
    function shootLaser(_event: MouseEvent): void {
        console.log("Shoot Laser");
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);

    }
    function getAsteroidHit(_hotspot: Vector): Asteroid | null {
        for (let moveable of moveables) {
            if (moveable instanceof Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function breakAsteroid(_asteroid: Asteroid): void {
        if (_asteroid.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {
                let fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);

            }
        }
        _asteroid.expandable = true;
    }
    function createAsteroids(_nAsteroids: number): void {
        console.log("create asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            let asteroid: Asteroid = new Asteroid(1.0);
            moveables.push(asteroid);
        }
    }

    function createUfo(): void {
        console.log("create Ufo");
        let ufo: Ufo = new Ufo();
        moveables.push(ufo);
    }

    function update(): void {
        //console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }

        deleteExpandables();

        //ship.draw();
        //hanldeCollisions();
        console.log("Moveable length", moveables.length);

    }
    function deleteExpandables(): void {
        for (let i: number = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expandable)
                moveables.splice(i, 1);

        }

    }
}
