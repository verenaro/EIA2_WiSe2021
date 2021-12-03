"use strict";
/*Aufgabe: L.03_SequenmemorySettings
Name: Verena Rothweiler
Matrikel: 270156
Datum: 04.12.2021
Quellen: Zusammenarbeit mit Neslisah Koc
*/
var L091_OldMacsFarm;
(function (L091_OldMacsFarm) {
    class Animal {
        species;
        noise;
        food;
        storage;
        constructor(_species, _noise, _food, _storage) {
            //console.log("constructor");
            this.species = _species;
            this.noise = _noise;
            this.food = _food;
            this.storage = _storage;
        }
        feed(_species, _food, _storage) {
            console.log(this.species + "ate" + this.storage + this.food);
        }
        sing(_noise) {
            console.log(this.noise);
        }
    }
    L091_OldMacsFarm.Animal = Animal;
})(L091_OldMacsFarm || (L091_OldMacsFarm = {}));
//# sourceMappingURL=FarmAnimals.js.map