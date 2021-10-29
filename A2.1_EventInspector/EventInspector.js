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
        let x = _event.pageX;
        let y = _event.pageY;
        let mousePosition = document.querySelector("span");
        let mouse0 = _event.target;
        mousePosition.innerHTML = "target:" + mouse0 + "" + "<br>" + "x:" + x + "<br>" + "y:" + y;
        mousePosition.style.left = x + 3 + "px";
        mousePosition.style.top = y + 3 + "px";
    }
    function logInfo(_event) {
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map