//Challenge 1 Your Age in Days
function AgeInDays(){
    var birthYear = prompt("Enter Your Birth Year.. bitch");
    var ageindays = (2020 - birthYear) * 365;
    var h1 = document.createElement('h4');
    var textans = document.createTextNode('Your are Approximately '+ ageindays +' days old buddy...');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textans);
    document.getElementById('flex-box-result').appendChild(h1);
}
 
function reset(){
    document.getElementById('ageindays').remove();
}

//Challenge 2 Cat Image Generator

function generate(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    image.heigth = 150;
    image.width = 150; 
    div.appendChild(image);
}

//Challenge 3 Rock, Paper, Scissors
function finalMessage(yourScore){
    if (yourScore === 0){
        return {'message':'Looooseerrr', 'color':'red'};
    }
    else if (yourScore === 0.5){
        return {'message': "It's a TIE", 'color': 'yellow'};
    }
    else{
        return {'message': "Winner Winner", 'color':'Green'};
    }
}

function randomRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numbertoChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice){
    var rpsDatabase = {
        'rock':{'scissors':1, 'rock':0.5, 'paper': 0,},
        'paper':{'scissors':0, 'rock':1, 'paper':0.5},
        'scissors':{'scissors':0.5, 'rock':0, 'paper':1},
    };
    var myScore = rpsDatabase[humanChoice][botChoice];
    return myScore;
}

function rpsFrontEnd(humanChoice, botChoice, message){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,
    };

    //lets remove all of our Images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>" ;
    botDiv.innerHTML = "<img src='" + imagesDatabase[botChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>" ;
    messageDiv.innerHTML = "<h3 style='color:" + message['color'] + "; font-size:40px; padding:30px;'>" + message['message'] + "</h3>"
   
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}

function rpsGame(choice){
    var humanChoice = choice.id;
    var botChoice  = numbertoChoice(randomRpsInt()); // math.random generates a number b/t 0-1
    result = decideWinner(humanChoice, botChoice);
    message = finalMessage(result); 
    rpsFrontEnd(humanChoice, botChoice, message);
}
