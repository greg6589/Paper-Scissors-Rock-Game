const hands = [...document.querySelectorAll('.select img')];


hands.forEach(hand => {
    hand.addEventListener('click', playerHandChose);
})

const handSelection = {
    playerHand: '',
    aiHand: '',
}


function playerHandChose() {
    handSelection.playerHand = this.dataset.option
    console.log(handSelection.playerHand)
    hands.forEach(hand => {
        hand.style.boxShadow = '';
    })
    this.style.boxShadow = '0 0 0 4px red'
}