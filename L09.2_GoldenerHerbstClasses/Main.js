"use strict";
var L09_2_GoldenerHerbst_Classes;
(function (L09_2_GoldenerHerbst_Classes) {
    window.addEventListener("load", handleLoad);
    let imgData;
    let oneCloud = [];
    let orangeLeaf = [];
    let redLeaf = [];
    let greenLeaf = [];
    function handleLoad(_event) {
        L09_2_GoldenerHerbst_Classes.canvas = document.querySelector("canvas");
        L09_2_GoldenerHerbst_Classes.crc2 = L09_2_GoldenerHerbst_Classes.canvas.getContext("2d");
        let backGround = new L09_2_GoldenerHerbst_Classes.Background;
        console.log(backGround);
        imgData = L09_2_GoldenerHerbst_Classes.crc2.getImageData(0, 0, L09_2_GoldenerHerbst_Classes.canvas.width, L09_2_GoldenerHerbst_Classes.canvas.height);
        //push Clouds into array
        for (let i = 0; i < 6; i++) {
            let allClouds = new L09_2_GoldenerHerbst_Classes.Cloud();
            allClouds.x = Math.random() * L09_2_GoldenerHerbst_Classes.crc2.canvas.width;
            allClouds.y = Math.random() * L09_2_GoldenerHerbst_Classes.crc2.canvas.height - 410;
            allClouds.cloudSpeed = (Math.random() + 1) * 0.5;
            oneCloud.push(allClouds);
        }
        window.setTimeout(animate, 5);
        imgData = L09_2_GoldenerHerbst_Classes.crc2.getImageData(0, 0, L09_2_GoldenerHerbst_Classes.canvas.width, L09_2_GoldenerHerbst_Classes.canvas.height);
        //push Leaves into array
        for (let i = 0; i < 10; i++) {
            let allLeaves = new L09_2_GoldenerHerbst_Classes.Leaf();
            allLeaves.x = Math.random() * L09_2_GoldenerHerbst_Classes.crc2.canvas.width;
            allLeaves.y = Math.random() * L09_2_GoldenerHerbst_Classes.crc2.canvas.height + 400;
            allLeaves.leafSpeed = (Math.random() + 1) * 0.5;
            orangeLeaf.push(allLeaves);
        }
        window.setTimeout(animate, 5);
        imgData = L09_2_GoldenerHerbst_Classes.crc2.getImageData(0, 0, L09_2_GoldenerHerbst_Classes.canvas.width, L09_2_GoldenerHerbst_Classes.canvas.height);
        for (let i = 0; i < 10; i++) {
            let allLeaves = new L09_2_GoldenerHerbst_Classes.Leaf();
            allLeaves.x = Math.random() * L09_2_GoldenerHerbst_Classes.crc2.canvas.width;
            allLeaves.y = Math.random() * L09_2_GoldenerHerbst_Classes.crc2.canvas.height + 350;
            allLeaves.leafSpeed = (Math.random() + 1) * 0.5;
            redLeaf.push(allLeaves);
        }
        window.setTimeout(animate, 5);
        imgData = L09_2_GoldenerHerbst_Classes.crc2.getImageData(0, 0, L09_2_GoldenerHerbst_Classes.canvas.width, L09_2_GoldenerHerbst_Classes.canvas.height);
        for (let i = 0; i < 10; i++) {
            let allLeaves = new L09_2_GoldenerHerbst_Classes.Leaf();
            allLeaves.x = Math.random() * L09_2_GoldenerHerbst_Classes.crc2.canvas.width;
            allLeaves.y = Math.random() * L09_2_GoldenerHerbst_Classes.crc2.canvas.height + 400;
            allLeaves.leafSpeed = (Math.random() + 1) * 0.5;
            greenLeaf.push(allLeaves);
        }
        window.setTimeout(animate, 5);
    }
    //animate Clouds
    function animate() {
        L09_2_GoldenerHerbst_Classes.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < oneCloud.length; i++) {
            oneCloud[i].moveCloud();
            if (oneCloud[i].x > +1000) {
                oneCloud[i].x = L09_2_GoldenerHerbst_Classes.canvas.width - 1200;
            }
        }
        drawCloud();
        window.setTimeout(animate, 5);
        //animate Leaves
        for (let i = 0; i < orangeLeaf.length; i++) {
            orangeLeaf[i].moveLeaf();
            if (orangeLeaf[i].x > +1000) {
                orangeLeaf[i].x = L09_2_GoldenerHerbst_Classes.canvas.width - 1200;
            }
            redLeaf[i].moveLeaf2();
            if (redLeaf[i].x > +1000) {
                redLeaf[i].x = L09_2_GoldenerHerbst_Classes.canvas.width - 1200;
            }
            greenLeaf[i].moveLeaf3();
            if (greenLeaf[i].x < -10) {
                greenLeaf[i].x = L09_2_GoldenerHerbst_Classes.canvas.width + 0.5;
            }
        }
        drawLeaf();
        window.setTimeout(animate, 5);
    }
    function drawCloud() {
        for (let i = 0; i < oneCloud.length; i++)
            oneCloud[i].drawClouds();
    }
    function drawLeaf() {
        for (let i = 0; i < orangeLeaf.length; i++)
            orangeLeaf[i].drawLeaves();
        for (let i = 0; i < redLeaf.length; i++)
            redLeaf[i].drawLeaves2();
        for (let i = 0; i < greenLeaf.length; i++)
            greenLeaf[i].drawLeaves3();
    }
})(L09_2_GoldenerHerbst_Classes || (L09_2_GoldenerHerbst_Classes = {}));
//# sourceMappingURL=Main.js.map