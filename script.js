let player1 = 0
let player2 = 0
let player3 = 0
let player4 = 0

let totalScore = 0

let player = 1

document.getElementById('finalScore').innerHTML = finalScore

function getRandomInt() {
  let finalScore = 0
  finalScore = Math.floor(Math.random() * 100)
  console.log(finalScore)
}

function changePlayer() {
  if (player === 4) {
    player = 1
  } else {
    player++
  }
}

function cookGrenade() {
  if (player === 1) {
    player1++
    totalScore++
    updateScore()
    checkScore()
  }
  if (player === 2) {
    player2++
    totalScore++
    updateScore()
    checkScore()
  }
  if (player === 3) {
    player3++
    totalScore++
    updateScore()
    checkScore()
  }
  if (player === 4) {
    player4++
    totalScore++
    updateScore()
    checkScore()
  }
}

function updateScore() {
  document.getElementById('score1').innerHTML = player1
  document.getElementById('score2').innerHTML = player2
  document.getElementById('score3').innerHTML = player3
  document.getElementById('score4').innerHTML = player4
  document.getElementById('totalScore').innerHTML = totalScore
}

function checkScore() {
  if (totalScore == finalScore) {
    console.log('end game')
    endGame()
  }
}

function endGame() {
  console.log('Player Wins!')

  startGame()
}

function startGame() {
  player1 = 0
  player2 = 0
  player3 = 0
  player4 = 0
  totalScore = 0
  player = 1
  updateScore()
}
