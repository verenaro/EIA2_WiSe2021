"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    L09_Asteroids.shapeAsteroids = [
        [
            [30, 1], [50, 15], [71, 1], [88, 31], [67, 40], [84, 63], [59, 93], [30, 79], [19, 87], [2, 63], [15, 42]
        ],
        [
            [39, 1], [53, 28], [78, 15], [91, 41], [76, 59], [91, 41], [76, 59], [78, 82], [44, 94], [15, 83], [1, 55]
        ],
        [
            [30, 0], [57, 26], [68, 7], [86, 31], [88, 70], [53, 58], [54, 96], [26, 91], [28, 76], [2, 56], [15, 19]
        ],
        [
            [37, 3], [70, 14], [62, 34], [83, 31], [78, 76], [55, 96], [20, 84], [7, 67], [5, 27], [20, 15], [39, 39]
        ]
    ];
    function createPath() {
        L09_Asteroids.asteroidPaths = createAsteroidPaths(L09_Asteroids.shapeAsteroids);
        //ufoPath = createUfoPath();
    }
    L09_Asteroids.createPath = createPath;
    function createAsteroidPaths(_shapes) {
        let paths = [];
        for (let type of _shapes) {
            let path = new Path2D();
            let first = true;
            // console.group (type);
            for (let coordinates of type) {
                //console.log(coordinates);
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            //console.groupEnd();
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Paths.js.map