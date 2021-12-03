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