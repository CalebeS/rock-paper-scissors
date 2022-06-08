let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['pedra', 'papel', 'tesoura']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'pedra' && computerSelection == 'tesoura') ||
        (playerSelection == 'tesoura' && computerSelection == 'papel') ||
        (playerSelection == 'papel' && computerSelection == 'pedra')) {

        playerScore += 1
        result = ('Você venceu!' + playerSelection + ' ganha de ' + computerSelection
            + "<br><br>Pontos do jogador: " + playerScore + "<br>Pontos da máquina: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>Você ganhou o jogo! Recarregue a página para jogar novamente'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('É um empate. Vocês dois escolheram' + playerSelection
            + "<br><br>Pontos do jogador: " + playerScore + "<br>Pontos da máquina: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('Você perdeu! ' + computerSelection + ' ganha de ' + playerSelection
            + "<br><br>Pontos do jogador: " + playerScore + "<br>Pontos da máquina: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>Eu venci o jogo! Recarregue a página para jogar novamente'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
})