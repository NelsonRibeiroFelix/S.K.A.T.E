document.addEventListener('DOMContentLoaded', () => {
    // Referências para os elementos do HTML
    const setupScreen = document.getElementById('setup-screen');
    const gameScreen = document.getElementById('game-screen');
    const endScreen = document.getElementById('end-game-screen');
    const player1Input = document.getElementById('player1-name');
    const player2Input = document.getElementById('player2-name');
    const startBtn = document.getElementById('start-btn');
    const turnDisplay = document.getElementById('turn-display');
    const gameMessage = document.getElementById('game-message');
    const trickInputArea = document.getElementById('trick-input-area');
    const trickNameInput = document.getElementById('trick-name');
    const submitTrickBtn = document.getElementById('submit-trick-btn');
    const trickResultArea = document.getElementById('trick-result-area');
    const currentTrickDisplay = document.getElementById('current-trick-display');
    const successBtn = document.getElementById('success-btn');
    const failBtn = document.getElementById('fail-btn');
    const copyTrickArea = document.getElementById('copy-trick-area');
    const trickToCopyDisplay = document.getElementById('trick-to-copy-display');
    const copySuccessBtn = document.getElementById('copy-success-btn');
    const copyFailBtn = document.getElementById('copy-fail-btn');
    const player1ScoreDisplay = document.getElementById('player1-score');
    const player2ScoreDisplay = document.getElementById('player2-score');
    const winnerDisplay = document.getElementById('winner-display');
    const restartBtn = document.getElementById('restart-btn');

    // Elementos de áudio
    const startSound = document.getElementById('start-sound');
    const successSound = document.getElementById('success-sound');
    const failSound = document.getElementById('fail-sound');

    // Variáveis do jogo
    let player1Name, player2Name;
    let player1Letters, player2Letters;
    let activePlayer, passivePlayer;
    let currentTrick;
    const skateWord = "SKATE";

    // Funções de controle do jogo
    const updateScoreboard = () => {
        player1ScoreDisplay.textContent = `${player1Name}: ${player1Letters || 'Nenhum'}`;
        player2ScoreDisplay.textContent = `${player2Name}: ${player2Letters || 'Nenhum'}`;
    };

    const nextTurn = (continues) => {
        if (!continues) {
            [activePlayer, passivePlayer] = [passivePlayer, activePlayer];
        }
        trickInputArea.classList.remove('hidden');
        trickResultArea.classList.add('hidden');
        copyTrickArea.classList.add('hidden');
        trickNameInput.value = '';
        turnDisplay.textContent = `Vez de ${activePlayer.name}`;
        gameMessage.textContent = `${activePlayer.name}, mande sua manobra!`;
    };

    const playSound = (sound) => {
        sound.currentTime = 0;
        sound.play();
    };

    const checkWinCondition = () => {
        if (player1Letters.length === skateWord.length) {
            winnerDisplay.textContent = `${player2Name} venceu! ${player1Name} levou um S.K.A.T.E. completo.`;
            gameScreen.classList.add('hidden');
            endScreen.classList.remove('hidden');
            return true;
        }
        if (player2Letters.length === skateWord.length) {
            winnerDisplay.textContent = `${player1Name} venceu! ${player2Name} levou um S.K.A.T.E. completo.`;
            gameScreen.classList.add('hidden');
            endScreen.classList.remove('hidden');
            return true;
        }
        return false;
    };

    // Event Listeners
    startBtn.addEventListener('click', () => {
        playSound(startSound);
        player1Name = player1Input.value.trim() || "Jogador 1";
        player2Name = player2Input.value.trim() || "Jogador 2";
        
        player1Letters = "";
        player2Letters = "";
        
        // Sorteia quem começa
        const players = [{ name: player1Name, letters: player1Letters }, { name: player2Name, letters: player2Letters }];
        [activePlayer, passivePlayer] = Math.random() < 0.5 ? players : players.reverse();

        setupScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        updateScoreboard();
        nextTurn(true);
    });

    submitTrickBtn.addEventListener('click', () => {
        currentTrick = trickNameInput.value.trim() || 'manobra';
        if (currentTrick) {
            gameMessage.textContent = `Boa sorte com o ${currentTrick}!`;
            trickInputArea.classList.add('hidden');
            trickResultArea.classList.remove('hidden');
            currentTrickDisplay.textContent = `E aí, ${activePlayer.name}, você acertou o ${currentTrick}?`;
        }
    });

    successBtn.addEventListener('click', () => {
        playSound(successSound);
        gameMessage.textContent = `MUITO BOM, ${activePlayer.name}! Agora é a vez de ${passivePlayer.name} tentar a cópia.`;
        trickResultArea.classList.add('hidden');
        copyTrickArea.classList.remove('hidden');
        trickToCopyDisplay.textContent = `${passivePlayer.name}, acertou o ${currentTrick}?`;
    });

    failBtn.addEventListener('click', () => {
        playSound(failSound);
        gameMessage.textContent = `Ah, que pena, ${activePlayer.name} errou o ${currentTrick}! Ele passa a vez.`;
        nextTurn(false);
    });

    copySuccessBtn.addEventListener('click', () => {
        playSound(successSound);
        gameMessage.textContent = `IRADO! ${passivePlayer.name} também acertou o ${currentTrick}!`;
        nextTurn(true);
    });

    copyFailBtn.addEventListener('click', () => {
        playSound(failSound);
        
        if (passivePlayer.name === player1Name) {
            player1Letters += skateWord[player1Letters.length];
            passivePlayer.letters = player1Letters;
        } else {
            player2Letters += skateWord[player2Letters.length];
            passivePlayer.letters = player2Letters;
        }
        
        gameMessage.textContent = `DROGA, ${passivePlayer.name} errou o ${currentTrick}! Ele(a) agora tem a letra ${skateWord[passivePlayer.letters.length - 1]}.`;
        
        if (passivePlayer.name === player1Name) {
            player1Letters = passivePlayer.letters;
        } else {
            player2Letters = passivePlayer.letters;
        }

        updateScoreboard();

        if (!checkWinCondition()) {
            nextTurn(true);
        }
    });

    restartBtn.addEventListener('click', () => {
        endScreen.classList.add('hidden');
        setupScreen.classList.remove('hidden');
        player1Input.value = '';
        player2Input.value = '';
    });
});