/**
 * C = Clubs   (Treboles)
 * D = Daimons (Diamantes)
 * H = Hearts  (Corazones)
 * S = Spades  (Espadas)
 */

let deck = [];
let playerScore = 0;
let machineScore = 0;
const newGame = document.querySelector("#new-game");
const newCard = document.querySelector("#new-card");
const stopGame = document.querySelector("#stop-game");
const buttonBox = document.querySelector("#buttons");
const playerScoreUi = document.querySelector("#player-score");
const machineScoreUi = document.querySelector("#machine-score");

/**
 * Creates a New deck
 * 
 * @param {string[]} types [ "C", "D", "H", "S" ] 
 * @param {string[]} specials [ "A", "J", "Q", "K" ]
 * @returns {void}
 */
const createDeck = (types, specials) => {
    for ( let i = 2; i <= 10; i++ ) {
        for ( let type of types ) {
            deck.push(i + type);
        }
    }

    for ( let type of types ) {
        for ( let special of specials ) {
            deck.push( special + type );
        }
    }

    // Shuffle Array
    deck = _.shuffle( deck );
};

const    types = [ "C", "D", "H", "S" ];
const specials = [ "A", "J", "Q", "K" ];

createDeck(types, specials);

/**
 * Ask a card from shuffle cards array
 * @returns {string} A card from the shuffle cards array
 */
const askCard = () => {
    if (deck.length === 0) throw "There's no more cards";
    const card = deck.pop();
    return card;
}

/**
 * Retrieve card points
 * @param {string} card Example: "2D" | "AH" | "KS"
 * @returns {number}
 */
const cardValue = ( card ) => {
    const value = card.substring(0, card.length - 1);
    return ( isNaN( Number( value ) ) )
        ? ( value === "A" ) ? 11 : 10
        : Number( value );
};

const points = cardValue( "AD" );

newCard.addEventListener("click", () => {
    const card = askCard();

    playerScore = playerScore + cardValue( card );

    playerScoreUi.innerHTML = String( playerScore );
});
