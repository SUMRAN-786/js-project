
let cards=[];
let sum=0;
let message="";
let hasBlackJack=false;
let isAlive=false;

let newMsg = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');



let player={
    playerName : "per",
    playerChip :  "0"

}
let playerEl = document.getElementById('player-el');
playerEl.textContent= player.playerName + ": $" + player.playerChip;





function startGame(){
    isAlive=true;
    let firstNo=getRandomCard();
    let secondNo=getRandomCard();
    cards=[firstNo,secondNo]
    sum=firstNo+secondNo;
    renderGame();

}


function newCard(){
if(isAlive===true && hasBlackJack===false ){
   let newNo=getRandomCard();
   sum += newNo;
   cards.push(newNo);
   renderGame();
}

}

function getRandomCard(){
    let randomNo = Math.floor(Math.random()*13)+1;
    if(randomNo>10){
        return 10;
    }
    else if(randomNo===1){
        return 11;
    }
    else{
        return randomNo;
    }
}



function renderGame(){
    cardEl.textContent ="cards: ";
    for ( i =0 ; i < cards.length ; i ++){
        cardEl.textContent += cards[i]+" ";
        console.log(cards[i]);
        };
    
    sumEl.textContent = "sum :" + sum;
    console.log("hello");
    if(sum <= 20){
        message="Want to draw a new card?";
       
    }else if(sum === 21){
        message="You've got Blackjack! ";
        hasBlackJack=true;

    }else {
        message="You're out of the game! ";
        isAlive=false;

    }

    if(hasBlackJack===true){
        playerEl.textContent= player.playerName + ": $145" ;
    }
    newMsg.textContent=message;

    console.log(message);


}


