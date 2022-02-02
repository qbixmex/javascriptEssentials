/**
 * C = Clubs   (Treboles)
 * D = Daimons (Diamantes)
 * H = Hearts  (Corazones)
 * S = Spades  (Espadas)
 */

let deck = [];
let playerScore = 0;
let machineScore = 0;

// UI Elements

/** @type HTMLButtonElement */
const newGameBtn = document.querySelector("#new-game");

/** @type HTMLButtonElement */
const newCardBtn = document.querySelector("#new-card");

/** @type HTMLButtonElement */
const stopGameBtn = document.querySelector("#stop-game");

const buttonsBox = document.querySelector("#buttons");

// Player Elements
const playerScoreUi = document.querySelector("#player-score");
const playerCards = document.querySelector("#player-cards");

// Machine Elements
const machineScoreUi = document.querySelector("#machine-score");
const machineCards = document.querySelector("#machine-cards");

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

// Machine

/**
 * 
 * @param {number} minimumScore Player Score
 * @returns {void}
 */
const machineTurn = ( minimumScore ) => {
    do {
        const card = askCard();

        machineScore = machineScore + cardValue( card );
        machineScoreUi.innerHTML = String( machineScore );

        const cardImage = document.createElement("img");
        cardImage.src = `assets/cards/${card}.png`;
        cardImage.classList.add("game-card");
        cardImage.alt = "Card";
        machineCards.append( cardImage );

        if ( minimumScore > 21 ){
            break;
        }

    } while( ( machineScore < minimumScore ) && ( minimumScore < 21 ) );
};

newCardBtn.addEventListener("click", () => {
    const card = askCard();

    playerScore = playerScore + cardValue( card );
    playerScoreUi.innerHTML = String( playerScore );

    const cardImage = document.createElement("img");
    cardImage.src = `assets/cards/${card}.png`;
    cardImage.classList.add("game-card");
    cardImage.alt = "Card";
    playerCards.append( cardImage );

    if ( playerScore > 21 ) {
        console.warn( "You Loose!" );
        newCardBtn.classList.replace("btn-primary", "btn-secondary")
        newCardBtn.disabled = true;
        stopGameBtn.disabled = true;
        machineTurn( playerScore );
    } else if ( playerScore === 21 ) {
        console.warn("21, You Won!");
        newCardBtn.classList.replace("btn-primary", "btn-secondary")
        newCardBtn.disabled = true;
        stopGameBtn.disabled = true;
        machineTurn( playerScore );
    }
});

stopGameBtn.addEventListener("click", () => {
    newCardBtn.disabled = true;
    stopGameBtn.disabled = true;
    machineTurn( playerScore );
});
