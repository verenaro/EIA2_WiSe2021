"use strict";
var Übung08;
(function (Übung08) {
    let crc2;
    window.addEventListener("load", handleload);
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#FF0000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.beginPath();
        crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.moveTo(20, 0);
        //let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);
        /*gradient.addColorStop(0, "black");
        gradient.addColorStop(.5, "red");
        gradient.addColorStop(1, "gold");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 200, 100);*/
    }
    /*crc2.fillStyle = "#FF000";
    crc2.fillRect(250, 250, crc2.canvas.width, crc2.canvas.height);
    crc2.beginPath();
    crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
    crc2.closePath();
    crc2.stroke();*/
})(Übung08 || (Übung08 = {}));
//# sourceMappingURL=index.js.map