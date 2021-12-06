const hands = [...document.querySelectorAll('.select img')];
const startGameBtn = document.querySelector('.start');

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
    return activeHands.aiHand;

}

function playerHandChose() {
    activeHands.playerHand = this.dataset.option;
    hands.forEach(hand => {
        hand.style.boxShadow = '';
    })
    this.style.boxShadow = '0 0 0 4px red';
    return activeHands.playerHand;
}

const checkResult = () => {
    if (!activeHands.playerHand) {
        return alert('Pleas chose hand!')
    }
    activeHands.aiHand = aiHandChose();
    console.log(activeHands.aiHand);
    scores.gameCount++;
    if (activeHands.playerHand === activeHands.aiHand) {
        scores.draws++

    } else if (activeHands.playerHand === 'paper' && activeHands.aiHand === 'rock' || activeHands.playerHand === 'scissors' && activeHands.aiHand === 'paper' || activeHands.playerHand === 'rock' && activeHands.aiHand === 'scissors') {
        scores.wins++
    } else {
        scores.losses++
    }
}




startGameBtn.addEventListener('click', checkResult)