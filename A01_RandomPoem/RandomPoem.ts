namespace RandomPoem {
    let subjects: string[] = ["Hannah", "Nesli", "Ronja", "Steffen", "Jasmin", "Lili"];
    let predicates: string[] = ["verschüttet", "mag", "kauft", "trinkt", "klaut", "öffnet"];
    let objects: string[] = ["die Cola", "das Bier", "das Red Bull", "den Wein", "das Wasser", "den Saft"];
     
    
    for (let index: number = 5; index >= 1; index--) {
    console.log(index);

    let showPoem: string = getVerse (subjects, predicates, objects);
    console.log(showPoem);
   }

    function getVerse (  subjects: string[], predicates: string[], objects: string[]): string {
    let word1: number = Math.floor(Math.random() * subjects.length);
    let word2: number = Math.floor(Math.random() * predicates.length);
    let word3: number = Math.floor(Math.random() * objects.length);
    let words: string = subjects[word1] + " " + predicates[word2] + " " + objects[word3];
    subjects.splice(word1, 1);
    predicates.splice(word2, 1);
    objects.splice(word3, 1);
    return words;
    }
}


