class aGamePossibly {
    constructor() {
        this.startGame();
    }

    startGame() {
        document.write("<br><br><br><br>");
        this.makeChoice();
    }

    makeChoice() 
    {

        var userInput = 'o';
        userInput = prompt("Is this a video game? (Y or y for yes and n or N for no)");

        if (userInput == 'y' || userInput == 'Y') 
        {

            document.write("You say it is a video game.<br>");
            document.write("Okay, thanks... <br>");
            this.itIsAVideoGame();

        } 
        else if (userInput == 'n' || userInput == 'N') 
        {

            document.write("You say it's not a video <br>");
            document.write("Hmm, interesting<br>");
            this.itsNotAVideoGame();

        } 
        else 
        {

            document.body.innerHTML = "";
            new aGamePossibly();

        }
    }

    
    itIsAVideoGame() 
    {

        document.write("&emsp;&emsp;&emsp;Down <br>&emsp;&emsp;Down <br>Down the rabbit hole we go<br>");

        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;\\&emsp;&emsp;\\<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;|&emsp;&emsp;|<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;|&emsp;&emsp;|<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;\\&emsp;&emsp;\\<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;|&emsp;&emsp;|<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp|&emsp;&emsp;|<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;/&emsp;&emsp;/<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;|&emsp;&emsp;|<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;/&emsp;&emsp;/<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;\\&emsp;&emsp;\\<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;/&emsp;&emsp;/<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;\\&emsp;&emsp;\\<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;/&emsp;&emsp;/<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;\\&emsp;&emsp;\\<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;|&emsp;&emsp;|<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;|&emsp;&emsp;|<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;|&emsp;&emsp;|<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;|&emsp;&emsp;|<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;|&emsp;&emsp;|<br>");
        document.write("&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;|&emsp;&emsp;|<br>");
        
        document.write("~=~=~=~=~=~=~=~=~=~=~&emsp;&emsp;&nbsp;~~=~=~=~=~=~=~=~=~=~=~<br>");
        document.write("{&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;(\\(\\ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;{}<br>");
        document.write("}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;(=':')&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&hairsp;{}{}<br>");
        document.write("{&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;(,(\")(\")&emsp;&emsp;&emsp;&emsp;<==K&emsp;&emsp;&emsp;&hairsp;{}{}{}<br>");
        document.write("~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=<br>");

        this.videoGameEnding();

    } 

    itsNotAVideoGame() 
    {
    
        document.write("So it's not a video game.<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write(".<br>");
        document.write("&emsp;Okay<br>");
        document.write("&emsp;&ensp;.<br>");
        document.write("&emsp;&ensp;.<br>");
        document.write("&emsp;&ensp;.<br>");
        this.notAVideoGameEnding();

    }
    

    videoGameEnding() 
    {
        
        document.write("&emsp;&emsp;&emsp;&ensp;&nbsp;Thanks for sharing, here's an easter (bunny) egg!");

    }

    notAVideoGameEnding() 
    {

        document.write("Get refreshed and pop back in<br>");

    }
}

// Start the game
new aGamePossibly();
