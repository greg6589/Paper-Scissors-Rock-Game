const hands = [...document.querySelectorAll('.select img')];
const startGameBtn = document.querySelector('.start');
const gameNumbers = document.querySelector('.numbers span');
const winsDisplay = document.querySelector('.wins span');
const lossesDisplay = document.querySelector('.losses span');
const drawsDisplay = document.querySelector('.draws span');
const playerChose = document.querySelector('[data-summary="your-choice"]');
const aiChose = document.querySelector('[data-summary="ai-choice"]');
const winnerDisplay = document.querySelector('[data-summary="who-win"]');

hands.forEach(hand => {
    hand.addEventListener('click', playerHandChose);
})

const activeHands = {
    playerHand: '',
    aiHand: '',
}

const scores = {
    gameCount: 0,
    wins: 0,
    losses: 0,
    draws: 0
}


function aiHandChose() {
    activeHands.aiHand = hands[Math.floor(Math.random() * hands.length)].dataset.option;
    aiChose.textContent = activeHands.aiHand;
    return activeHands.aiHand;
}

function playerHandChose() {
    activeHands.playerHand = this.dataset.option;
    playerChose.textContent = activeHands.playerHand
    hands.forEach(hand => {
        hand.style.boxShadow = '';
    })
    this.style.boxShadow = '0 0 0 4px red';
    winnerDisplay.textContent = '';
    aiChose.textContent = '';
    return activeHands.playerHand;
}

function publishResult(winner) {
    gameNumbers.textContent = scores.gameCount;
    winsDisplay.textContent = scores.wins;
    lossesDisplay.textContent = scores.losses;
    drawsDisplay.textContent = scores.draws;
    winnerDisplay.textContent = winner
}

function resetGame() {
    activeHands.playerHand = '';
    hands.forEach(hand => {
        hand.style.boxShadow = '';
    });
    activeHands.aiHand = '';
}

const checkResult = () => {
    if (!activeHands.playerHand) {
        return alert('Pleas chose hand!')
    };
    let winner = '';
    activeHands.aiHand = aiHandChose();
    scores.gameCount++;
    if (activeHands.playerHand === activeHands.aiHand) {
        scores.draws++;
        winner = 'Draw'

    } else if (activeHands.playerHand === 'paper' && activeHands.aiHand === 'rock' || activeHands.playerHand === 'scissors' && activeHands.aiHand === 'paper' || activeHands.playerHand === 'rock' && activeHands.aiHand === 'scissors') {
        scores.wins++;
        winner = 'You won!'
    } else {
        scores.losses++;
        winner = 'Computer won!'
    }
    publishResult(winner);
    resetGame()
}

startGameBtn.addEventListener('click', checkResult)