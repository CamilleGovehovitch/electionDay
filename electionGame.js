let playerNumber = 2;
const players = [];
const tourTotal = 10;
let currentTour = 1;
const arrayElector = [];


function setPlayers() {
   let userInput = parseInt(window.prompt('Entrez le nombre de joueurs'));
   if (userInput !== NaN) {
       playerNumber = userInput;
   }
    for (let i = 1; i <= playerNumber; i++) {
        let name = window.prompt("Player n°" + i + " Entrez votre nom");
        players.push({
            name: name,
            money: 1000,
            supporter:[]
        });
    }
}
function runGame(){
    setPlayers();
    while(currentTour <= tourTotal){
        for(let i = 0; i < players.length; i++) {
            playTour(players[i]);
        }
        currentTour++;
    }
}
function playTour(player){
    alert(player.name + ' jouez votre tour.' + ' Tour n°' + currentTour );

}
function generateElectors(){

    for(let i = 0; i < 100; i++){
        let preferences = players.name;
       // preferences = shuffle(preferences);
        console.log(preferences);
        let currentElector = {
            index: arrayElector.length - 1,
            vote: 1,
            pref: []
        };
        for(let i = 0; i < preferences.length; i++){
            currentElector.pref.push(
                {
                    candidateId: players.name,
                    value: preferences[i]
                }
            )
        }
        arrayElector.push(currentElector);
    }
        console.log(arrayElector);
}

//runGame();

console.log(players);
