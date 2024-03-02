const submitButton = document.querySelector('.submit');
const firstCard = document.querySelector('.card-1');
const secondCard = document.querySelector('.card-2');

let selectedScore = 0;

function buttonPress(score) {
    selectedScore = score;
}

function submitScore() {
    if (selectedScore!==0) {
        const scoreText = secondCard.querySelector('.card-2-p');
        scoreText.textContent = `You selected ${selectedScore} out of 5`;
        
        firstCard.style.display = "none";
        secondCard.style.display = "block";
    }
    else {
        alert("Select a score before submission.");
    }
}

