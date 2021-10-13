"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subjects = ["Hannah", "Nesli", "Ronja", "Steffen", "Jasmin", "Lili"];
    let predicates = ["verschüttet", "mag", "kauft", "trinkt", "klaut", "öffnet"];
    let objects = ["die Cola", "das Bier", "das Red Bull", "den Wein", "das Wasser", "den Saft"];
    for (let index = 5; index >= 1; index--) {
        //console.log(index);
        let showPoem = getVerse(subjects, predicates, objects);
        console.log(showPoem);
    }
    function getVerse(subjects, predicates, objects) {
        let word1 = Math.floor(Math.random() * subjects.length);
        let word2 = Math.floor(Math.random() * predicates.length);
        let word3 = Math.floor(Math.random() * objects.length);
        let words = subjects[word1] + " " + predicates[word2] + " " + objects[word3];
        subjects.splice(word1, 1);
        predicates.splice(word2, 1);
        objects.splice(word3, 1);
        return words;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map