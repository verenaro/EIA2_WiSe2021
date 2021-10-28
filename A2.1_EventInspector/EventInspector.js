"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let mouse = document.querySelector("#div0");
        let mouse0 = document.querySelector("#div1");
        mouse.addEventListener("keyup", logInfo);
        mouse.addEventListener("click", logInfo);
        mouse0.addEventListener("keyup", logInfo);
        mouse0.addEventListener("click", logInfo);
        document.addEventListener("mousemove", setInfoBox);
        document.body.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.offsetX;
        let y = _event.offsetY;
        let mousePosition = document.querySelector("span");
        let mouse0 = _event.target;
        mousePosition.innerHTML = mouse0 + "";
    }
    function logInfo(_event) {
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map