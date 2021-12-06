const hands = [...document.querySelectorAll('.select img')];


hands.forEach(hand => {
    hand.addEventListener('click', playerHandChose);
})

const activeHands = {
    playerHand: '',
    aiHand: '',
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