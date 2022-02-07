/**
 * C = Clubs   (Tréboles)
 * D = Daimons (Diamantes)
 * H = Hearts  (Corazones)
 * S = Spades  (Espadas)
 */

const myModule = (function() {
    'use strick'
    
    let deck = [];

    /** @type {number[]} */
    let playersScore = [];    

    const    types = [ "C", "D", "H", "S" ];
    const specials = [ "A", "J", "Q", "K" ];
    
    /* =================== UI Elements =================== */
    
    /** @type HTMLButtonElement | null **/
    const newCardBtn = document.querySelector("#new-card");

    /** @type HTMLButtonElement | null **/
    const stopGameBtn = document.querySelector("#stop-game");

    /** @type NodeListOf<HTMLSpanElement> */
    const playerScoresUi = document.querySelectorAll(".player-scores");

    /* =================== Player Elements =================== */

    /** @type NodeListOf<HTMLImageElement> */
    const cardsUi = document.querySelectorAll(".player-cards");
    
    /* =================== Machine Elements =================== */

    /** @type Element | null */
    const machineCards = document.querySelector("#machine-cards");

    /**
     * Game initialization
     * 
     * @param {number=} playersQuantity
     * @returns {void} Calls "createDeck()"
     */
    const initializeGame = ( playersQuantity = 2 ) => {
        deck = createDeck();

        playersScore = [];

        for ( let i = 0; i < playersQuantity; i++) {
            playersScore.push(0);
        }

        playerScoresUi.forEach( playerScoreUi => playerScoreUi.innerHTML = "0");

        cardsUi.forEach( cardUi => cardUi.innerHTML = "" );

        newCardBtn  && ( newCardBtn.disabled = false );
        stopGameBtn && ( stopGameBtn.disabled = false );

        newCardBtn  && ( newCardBtn.classList.replace("btn-secondary", "btn-primary") );
        stopGameBtn && ( stopGameBtn.classList.replace("btn-secondary", "btn-primary") );
    };

    /**
     * Creates a New deck
     * 
     * @returns {string[]}
     */
    const createDeck = () => {
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
    
        // @ts-ignore
        // Shuffle Array
        return _.shuffle( deck );
    };
    
    /**
     * Ask a card from shuffle cards array
     * @returns {string} A card from the shuffle cards array
     */
    const askCard = () => {
        if (deck.length === 0) throw "There's no more cards";
        return deck.pop();
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
    
    /**
     * Accumulate score in array.
     * 
     * @param {string} card Card example: "2D" | "AH" | "KS"
     * @param {number} turn Player number
     * @returns {number} Player Score
     */
    const accumulateScore = ( card, turn ) => {
        playersScore[ turn ] = playersScore[ turn ] + cardValue( card );
        playerScoresUi[ turn ].innerHTML = String( playersScore[ turn ] );

        return playersScore[ turn ];
    };

    /**
     * Append card to ui.
     * 
     * @param {string} card example: "2D" | "AH" | "KS"
     * @param {number} turn Player turn
     * @returns {void}
     */
    const cardCreate = ( card, turn ) => {
        const cardImage = document.createElement("img");
        cardImage.src = `assets/cards/${card}.png`;
        cardImage.classList.add("game-card");
        cardImage.alt = "Card";
        cardsUi[ turn ].append( cardImage );
    };

    /**
     * Set who won the game.
     * 
     * @param {number} machineScore
     * @param {number} minimumScore
     * @returns {void}
     */
    const setWinner = () => {
        const [ minimumScore, machineScore ] = playersScore;

        setTimeout(() => {
            if (machineScore === minimumScore ) {
                alert("Nobody Won!");
            } else if ( minimumScore > 21 ) {
                alert("You Loose!");
            } else if ( minimumScore === 21 ) {
                alert("You Won!");
            } else if ( machineScore > 21 ) {
                alert("You Won!");
            } else {
                alert("You Loose!");
            }
        }, 300);
    }

    /* =================== Machine =================== */

    /**
     * Computer add cards to board.
     * @param {number} minimumScore Player Score
     * @returns {void}
     */
    const machineTurn = ( minimumScore ) => {
        let machineScore = 0;

        do {
            const card = askCard();
            machineScore = accumulateScore( card, 1 );
            cardCreate(card, 1);
        } while( ( machineScore < minimumScore ) && ( minimumScore < 21 ) );
    
        setWinner();
    };
    
    newCardBtn && newCardBtn.addEventListener("click", () => {        
        const card = askCard();
        const playerScore = accumulateScore( card, 0 );

        cardCreate(card, 0);
    
        if ( playerScore > 21 ) {
            newCardBtn && (newCardBtn.disabled = true);
            stopGameBtn && (stopGameBtn.disabled = true);
            newCardBtn.classList.replace("btn-primary", "btn-secondary");
            stopGameBtn && stopGameBtn.classList.replace("btn-primary", "btn-secondary");
            machineTurn( playerScore );
        } else if ( playerScore === 21 ) {
            newCardBtn.disabled = true;
            stopGameBtn && (stopGameBtn.disabled = true);
            newCardBtn.classList.replace("btn-primary", "btn-secondary");
            if (stopGameBtn) stopGameBtn.classList.replace("btn-primary", "btn-secondary");
            machineTurn( playerScore );
        }
    });
    
    stopGameBtn && stopGameBtn.addEventListener("click", () => {
        newCardBtn && (newCardBtn.disabled = true);
        stopGameBtn.disabled = true;
        newCardBtn && newCardBtn.classList.replace("btn-primary", "btn-secondary");
        stopGameBtn.classList.replace("btn-primary", "btn-secondary");
        machineTurn( playersScore[0] );
    });
   
    return {
        newGame: initializeGame
    };
})();
