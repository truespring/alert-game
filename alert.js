var catchRatio = undefined;
var exp = undefined;

swal("A wild Pikachu appeared! What do you want to do?", {
    buttons: {
        cancel: "Run away!",
        catch: {
        text: "Throw Pokéball!",
        value: "catch",
        },
        defeat: true,
    },
    })
    .then((value) => {
    switch (value) {
    
        case "defeat":
            swal("Pikachu fainted! You gained 500 XP!");
            exp += 500;
        break;
        case "catch":
            catchRatio = Math.floor(Math.random() * 100);
            if (catchRatio >= 10) {
                swal("Gotcha!", "Pikachu was caught!", "success");
            } else {
                swal("Damn it!", "Pikachu was escape!", "warning")
            }
        break;
    
        default:
        swal("Got away safely!");
    }
});