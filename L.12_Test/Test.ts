namespace Test {
        interface Greet {
            greet: string;
        }
        let greets: Greet[] = [{ greet: "Hi" }, { greet: "Hallo" }, { greet: "Servus" }];
    
        try {
            let input: string | null = prompt("Lass dich grüßen!", "Gib hier eine Zahl ein");
            let greet: string = greets[Number(input)].greet;
            alert(greet);
        } catch (_error) {
            alert("Tschüss!");
            console.log(_error);
        }
        console.log("Done");
    }