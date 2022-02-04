/**
 * C = Clubs   (Treboles)
 * D = Daimons (Diamantes)
 * H = Hearts  (Corazones)
 * S = Spades  (Espadas)
 */

(function() {
    'use strick'
    
    let deck = [];
    let playerScore = 0;
    let machineScore = 0;
    
    // UI Elements
    
    /** @type HTMLButtonElement | null */
    const newGameBtn = document.querySelector("#new-game");
    
    /** @type HTMLButtonElement | null */
    const newCardBtn = document.querySelector("#new-card");
    
    /** @type HTMLButtonElement | null */
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
    
        // Shuffle Array
        deck = _.shuffle( deck );
    
        return deck;
    };
    
    const    types = [ "C", "D", "H", "S" ];
    const specials = [ "A", "J", "Q", "K" ];
    
    createDeck();
    
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
     * Computer add cards to board.
     * @param {number} minimumScore Player Score
     * @returns {void}
     */
    const machineTurn = ( minimumScore ) => {
        do {
            const card = askCard();
    
            machineScore = machineScore + cardValue( card );
            machineScoreUi && (machineScoreUi.innerHTML = String( machineScore ));
    
            const cardImage = document.createElement("img");
            cardImage.src = `assets/cards/${card}.png`;
            cardImage.classList.add("game-card");
            cardImage.alt = "Card";
            machineCards && (machineCards.append( cardImage ));
    
            if ( minimumScore > 21 ) break;
    
        } while( ( machineScore < minimumScore ) && ( minimumScore < 21 ) );
    
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
    };
    
    newCardBtn && newCardBtn.addEventListener("click", () => {
        const card = askCard();
    
        playerScore = playerScore + cardValue( card );
        if (playerScoreUi) playerScoreUi.innerHTML = String( playerScore );
    
        const cardImage = document.createElement("img");
        cardImage.src = `assets/cards/${card}.png`;
        cardImage.classList.add("game-card");
        cardImage.alt = "Card";
        if (playerCards) playerCards.append( cardImage );
    
        if ( playerScore > 21 ) {
            newCardBtn.disabled = true;
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
        machineTurn( playerScore );
    });
    
    newGameBtn && newGameBtn.addEventListener("click", () => {
        deck = [];
        deck = createDeck();
        playerScore  = 0;
        machineScore = 0;
        playerScoreUi  && (playerScoreUi.innerHTML = String( playerScore ));
        machineScoreUi && (machineScoreUi.innerHTML = String( machineScore ));
    
        playerCards  && (playerCards.innerHTML = "");
        machineCards && (machineCards.innerHTML = "");
       
        newCardBtn  && (newCardBtn.disabled = false);
        stopGameBtn && (stopGameBtn.disabled = false);
        newCardBtn  && (newCardBtn.classList.replace("btn-secondary", "btn-primary"));
        stopGameBtn && (stopGameBtn.classList.replace("btn-secondary", "btn-primary"));
    });
})();
