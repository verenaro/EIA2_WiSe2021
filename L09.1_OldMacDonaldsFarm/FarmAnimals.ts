/*Aufgabe: L.03_SequenmemorySettings
Name: Verena Rothweiler
Matrikel: 270156
Datum: 04.12.2021
Quellen: Zusammenarbeit mit Neslisah Koc
*/
namespace L091_OldMacsFarm {

    export class Animal {
        species: string;
        noise: string;
        food: string;
        storage: number;

        constructor(_species: string, _noise: string, _food: string, _storage: number) {
            //console.log("constructor");
            this.species = _species;
            this.noise = _noise;
            this.food = _food;
            this.storage = _storage;
        }
        feed(_species: string, _food: string, _storage: number): void {
            console.log(this.species + "ate" + this.storage + this.food);
        }
        sing(_noise: string): void { 
            console.log(this.noise);
        }
    }
}