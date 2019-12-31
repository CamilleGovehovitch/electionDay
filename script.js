let result = document.getElementById('result');


let arrayResult = [
    {
        candidat: 1,
        votants: [],
        monney: 1000
    },
    {
        candidat: 2,
        votants: [],
        monney: 1000
    },
    {
        candidat: 3,
        votants: [],
        monney: 1000
    },
    {
        candidat: 4,
        votants: [],
        monney: 1000
    }
];
let arrayElector = [];
function generateElectors(){
    for(let i = 0; i < 100; i++){
        let preferences = [1, 2, 3, 4];
        preferences = shuffle(preferences);

        let currentElector = {
            index: arrayElector.length - 1,
            vote: 1,
            pref: []
        };
        for(let i = 0; i < preferences.length; i++){
            currentElector.pref.push({
                candidateId: i,
                value: preferences[i]
            })
        }
        arrayElector.push(currentElector);
    };
}
function randomPushElector(){
    while(arrayElector.length > 0){
        let currentElector = arrayElector[0];
        console.log(currentElector);
        let randomCandidateIndex = Math.floor(Math.random() * 4);
        let favoriteCandidate = {candidateId: 0,value: 0};
        for(let i = 0; i < currentElector.pref.length; i++) {
            console.log(currentElector.pref[i], i);
            if(currentElector.pref[i].value > favoriteCandidate.value){
                favoriteCandidate = currentElector.pref[i];
            }
        };
        //console.log(favoriteCandidate);
        let availableChoices = [randomCandidateIndex, favoriteCandidate.candidateId];
        let finalChoiceIndex = Math.floor(Math.random() * 100);
        let finalChoice = availableChoices[finalChoiceIndex  < 50 ? 0 : 1];
        arrayResult[finalChoice].votants.push(currentElector);
        arrayElector.shift();
    }
    //console.log(arrayResult);
}

function countScore() {
    arrayResult.sort(function (a, b) {
        return a.votants.length - b.votants.length;
    }).reverse();
    let participation = arrayResult[0].votants.length + arrayResult[1].votants.length + arrayResult[2].votants.length + arrayResult[3].votants.length;
    let abstention = 100 - participation;
    let message = "Il y'a eu fraude! Election annulée";
    if(participation > 100){
        result.style.color = "red";
        result.innerText = message;
    }else{
        let winner = arrayResult[arrayResult.length - 1];
        for(let i = 0; i < arrayResult.length; i++){
            result.style.color = "black";
            let currentCandidat = arrayResult[i];
            result.innerHTML += "<li>Candidat n°" + currentCandidat.candidat + " votre score est de " + currentCandidat.votants.length + "%. " + computeCandidateResult(currentCandidat) + "</li>";
        }
        result.innerHTML += "<li>Le taux de participation est de: " + participation + "%" + "</li>";
        result.innerHTML += "<li>Le taux d'abstention est de : " + abstention + "%" + "</li>";
    }

}
function computeCandidateResult(candidat){
    let result = "";
    if(candidat.votants.length >= 50){
        result = "Vous avez gagné";
    }else if(candidat.votants.length >= 12.5 && candidat.votants.length < 50 ){
        result = "Vous êtes en balotage positif";
    }else if(candidat.votants.length < 12.5 && candidat.votants.length >= 5){
        result = "Vous êtes en balotage négatif";
    }else{
        result = "Vous avez perdu";
    }
    return result;
}
function shuffle(array) {
    var length = array.length, temporary, i;
    // While there remain elements to shuffle…
    while (length) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * length--);
        // And swap it with the current element.
        temporary = array[length];
        array[length] = array[i];
        array[i] = temporary;
    }
    return array;
}
function startGame(){

}
function updateLoop(){

}
function drawGame(){

}
function setPlayers(){
    window.prompt('Entrez le nombre de joueur');
}

generateElectors();
randomPushElector();
countScore();
console.log(shuffle([1,2,3,4,5]), 'shuffle');