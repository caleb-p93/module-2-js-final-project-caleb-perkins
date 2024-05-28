class aGamePossibly {
    constructor() {
        this.startGame();
    }

    startGame() {
        var userInput = 'o';

        userInput = prompt("Is this a video game? (Y or y for yes and n or N for no)\n");
        
        if ( ( userInput == 'y' ) || ( userInput == 'Y' ) )
        {
        console.log("Okay, thanks\n");
        }
        else if ( ( userInput == 'n' ) || ( userInput == 'N' ) )
        {
        console.log("Hmm, interesting\n");
        }
        else
        {
        console.log("It doesn't seem you want to find out.\n");
        
        /*console.log("You find yourself in a dark forest. You can go north, south, east, or west.");
        this.state = { location: 'forest' };
        this.makeChoice();*/
    }/*

    makeChoice() {
        let choice = prompt("Which direction do you want to go? (north/south/east/west)").toLowerCase();
        switch (this.state.location) {
            case 'forest':
                this.forest(choice);
                break;
            case 'cave':
                this.cave(choice);
                break;
            case 'mountain':
                this.mountain(choice);
                break;
            case 'lake':
                this.lake(choice);
                break;
            default:
                console.log("Invalid location.");
                this.startGame();
        }
    }

    forest(choice) {
        if (choice === 'north') {
            console.log("You head north and find a cave.");
            this.state.location = 'cave';
        } else if (choice === 'south') {
            console.log("You head south and reach a mountain.");
            this.state.location = 'mountain';
        } else if (choice === 'east') {
            console.log("You head east and discover a lake.");
            this.state.location = 'lake';
        } else if (choice === 'west') {
            console.log("You head west but find nothing of interest. You return to the forest.");
        } else {
            console.log("Invalid choice. Try again.");
        }
        this.makeChoice();
    }

    cave(choice) {
        if (choice === 'south') {
            console.log("You leave the cave and return to the forest.");
            this.state.location = 'forest';
        } else {
            console.log("The cave is dark and scary. You decide to go back.");
        }
        this.makeChoice();
    }

    mountain(choice) {
        if (choice === 'north') {
            console.log("You climb the mountain and find a treasure chest!");
            console.log("Congratulations, you've won the game!");
            this.endGame();
        } else if (choice === 'north') {
            console.log("You can't go that way. Try another direction.");
        } else {
            console.log("You decide to head back to the forest.");
            this.state.location = 'forest';
        }
        this.makeChoice();
    }

    lake(choice) {
        if (choice === 'west') {
            console.log("You leave the lake and return to the forest.");
            this.state.location = 'forest';
        } else {
            console.log("The lake is peaceful, but you can't stay here forever. You go back.");
        }
        this.makeChoice();
    }

    endGame() {
        console.log("Thanks for playing the Adventure Game!");
    }*/
}
}
// Start the game
new aGamePossibly();
