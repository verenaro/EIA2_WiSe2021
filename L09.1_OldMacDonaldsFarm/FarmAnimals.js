"use strict";
/*Aufgabe: L.09.1_OldMcDonalsFarm
Name: Verena Rothweiler
Matrikel: 270156
Datum: 04.12.2021
Quellen: Zusammenarbeit mit Neslisah Koc
*/
var L091_OldMacsFarm;
(function (L091_OldMacsFarm) {
    class Animal {
        species;
        name;
        noise;
        food;
        storage;
        constructor(_species, _name, _noise, _food, _storage) {
            //console.log("constructor");
            this.species = _species;
            this.name = _name;
            this.noise = _noise;
            this.food = _food;
            this.storage = _storage;
        }
    }
    L091_OldMacsFarm.Animal = Animal;
})(L091_OldMacsFarm || (L091_OldMacsFarm = {}));
//# sourceMappingURL=FarmAnimals.js.map