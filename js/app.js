// Declare Variables
var cardlist = ['card-red', 'card-yellow', 'card-green', 
                'card-purple', 'card-pink', 'card-brown',
                'card-red', 'card-yellow', 'card-green', 
                'card-purple', 'card-pink', 'card-brown',
                'card-blue', 'card-blue','card-orange', 'card-orange'];
var cards = "";
var card;
var openedCards = [];
var lockedCards =[];

// Shuffle function for cards
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Shuffle and load cards on page
function loadCards(){
    cardlist = shuffle(cardlist);
    for (card in cardlist) {
        cards += `<div class="card `+ cardlist[card]+`">` + cardlist[card] + `</div>`;
     }
     document.getElementById("card-grid").innerHTML = cards;
}

 // Card Clicked | TODO Create into Function
    // Get card class on click
    $('.card').click(function() {
        var cardClass = $(this).attr('class');
        cardClass = cardClass.split(' ').pop();
        openedCards.push(cardClass);
        console.log( openedCards );
    });


// Display card Symbol (Color) with a function (Display from open cards?)
        // For card in open cards add flipped class to card
 
        // Add card to list of open card if list is < 2
        // if list is 2 and cards match 
            // Lock flipped (locked_list)

function openCard(card){
    openedCards.push(card);
    if(openedCards.length == 2) {
        if (card == openedCards[0]){
            console.log("It Was A Match!")
            // lockCards()
            openedCards=[]
        }
    }
    console.log( "Openedcards: " + openedCards );
}

        // if cards do not match remove from list and hide symbol(color)
    // Add + 1 to moveCounter

// Initial states and elements for game
// Loads State on page load
function initialGame() {
    loadCards();

    $('.card').click(function() {
        var cardClass = $(this).attr('class');
        cardClass = cardClass.split(' ').pop();
        openCard(cardClass);
    });

}

initialGame();
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 * 
 * Logic notes:
 * 
 * Winning:
 * If length of card list == locked cards player wins
 * 
 * Retsart:
 *     Shuffle cards
 *     reset stars, timer, and moves
 *      
 */

